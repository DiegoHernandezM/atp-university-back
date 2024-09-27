import {useEffect, useState} from 'react';
import { useForm } from '@inertiajs/react';
import { Button, Typography, Input } from '@material-tailwind/react';
import Modal from 'react-modal';
import WelcomePage from '../../WelcomePage.jsx';

Modal.setAppElement('#app');

export default function WelcomeSection({ onSuccess }) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [landingData, setLandingData] = useState({
        title: '',
        section1_video: '',
        section1_video_description: '',
        isPrev: true,
        type: ''
    });

    const {setData, post, processing } = useForm();

    useEffect(() => {
        setData({
            title: landingData?.title || '',
            section1_video: selectedFile || null,
            section1_video_description: landingData.section1_video_description || ''
        });
    }, [landingData, selectedFile]);


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileUrl = URL.createObjectURL(file);
            setSelectedFile({ url: fileUrl, file, type: file.type });

            setLandingData(prevState => ({
                ...prevState,
                section1_video: fileUrl,
                type: file.type
            }));
        }
    };

    const openModal = () => {
        if (selectedFile) {
            setModalIsOpen(true);
        }
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleChangeTitle = (e) => {
        const newTitle = e.target.value;
        setLandingData(prevState => ({
            ...prevState,
            title: newTitle
        }));
    };

    const handleChangeDescription = (e) => {
        const newDescription = e.target.value;
        setLandingData(prevState => ({
            ...prevState,
            section1_video_description: newDescription
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Crear un FormData solo si hay archivo
        const formData = new FormData();
        formData.append('title', landingData.title);
        formData.append('section1_video_description', landingData.section1_video_description);
        if (selectedFile) {
            formData.append('section1_video', selectedFile.file);
        }

        post('/landing/welcome', {
            data: formData,
            preserveScroll: true,
            onFinish: () => {
                console.log('Formulario enviado con éxito');
                setLandingData({
                    title: '',
                    section1_video_description: '',
                    section1_video: ''
                });
                setModalIsOpen(false);  // Cerrar el modal
                setSelectedFile(null);  // Limpiar la imagen seleccionada
                onSuccess("Landing Page actualizada correctamente.");
            }
        });
    };

    return (
        <section className="p-4">
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Bienvenido</h2>
                <div>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Actualiza la información de tu Landing Page.
                    </p>
                </div>
                <div className="mt-4">
                    <Typography variant="h6" color="blue-gray" className="mb-1">
                        Título
                    </Typography>
                    <Input
                        name="title"
                        placeholder="Título de página"
                        id="title"
                        value={landingData.title}
                        onChange={handleChangeTitle}
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                </div>

                <div className="mt-4">
                    <Typography variant="h6" color="blue-gray" className="mb-1">
                        Descripción
                    </Typography>
                    <Input
                        name="description"
                        placeholder="Descripción"
                        id="description"
                        value={landingData.section1_video_description}
                        onChange={handleChangeDescription}
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                </div>

                <div className="mt-4">
                    <Typography variant="h6" color="blue-gray" className="mb-1">
                        Agrega un Video, Imagen o GIF
                    </Typography>
                    <input
                        type="file"
                        name="section1_file"
                        id="section1_file"
                        className="hidden"
                        accept="video/*, image/*"
                        onChange={handleFileChange}
                    />
                </div>

                <div className="flex flex-wrap gap-4 mt-4">
                    <Button
                        size="sm"
                        variant="gradient"
                        className="rounded-full flex items-center gap-3"
                        onClick={() => document.getElementById('section1_file').click()}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                            />
                        </svg>
                        Seleccionar Archivo
                    </Button>

                    <Button
                        size="sm"
                        variant="gradient"
                        className="rounded-full flex items-center gap-3"
                        onClick={openModal}
                        disabled={!selectedFile}
                    >
                        Previsualizar
                    </Button>

                </div>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Previsualización de Archivo"
                    style={{
                        content: {
                            top: '50%',
                            left: '58%',
                            right: 'auto',
                            bottom: 'auto',
                            marginRight: '-50%',
                            transform: 'translate(-50%, -50%)',
                            width: '100%',
                            maxWidth: '1200px',
                            height: 'auto',
                            maxHeight: '600px',
                        },
                    }}
                >
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Previsualización</h2>

                    <div className="mt-8">
                        <WelcomePage landingData={landingData} fixedNav={false} />
                    </div>
                    <div className="mt-4 flex space-x-4">
                        <Button onClick={closeModal}>Cerrar</Button>

                        <Button
                            onClick={handleSubmit}
                            disabled={!landingData.title || !landingData.section1_video_description || !selectedFile || processing}
                        >
                            Guardar
                        </Button>
                    </div>
                </Modal>
            </header>
        </section>
    );
}
