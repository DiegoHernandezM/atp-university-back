import {useEffect, useState} from 'react';
import { useForm } from '@inertiajs/react';
import { Button, Typography, Input } from '@material-tailwind/react';
import Modal from 'react-modal';
import AboutPage from '../../AboutPage.jsx'

Modal.setAppElement('#app');

export default function AboutSection({ onSuccess }) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [landingData, setLandingData] = useState({
        section3_image: '',
        section3_about: '',
        section3_mission: '',
        section3_vision: '',
        isPrev: true,
        type: ''
    });

    const {setData, post, processing } = useForm();

    useEffect(() => {
        setData({
            section3_mission: landingData?.section3_mission || '',
            section3_image: selectedFile || null,
            section3_vision: landingData?.section3_vision || '',
            section3_about: landingData?.section3_about || ''
        });
    }, [landingData, selectedFile]);


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileUrl = URL.createObjectURL(file);
            setSelectedFile({ url: fileUrl, file, type: file.type });

            setLandingData(prevState => ({
                ...prevState,
                section3_image: fileUrl,
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

    const handleChangeAbout = (e) => {
        const newAbout = e.target.value;
        setLandingData(prevState => ({
            ...prevState,
            section3_about: newAbout
        }));
    };

    const handleChangeMission = (e) => {
        const newMission = e.target.value;
        setLandingData(prevState => ({
            ...prevState,
            section3_mission: newMission
        }));
    };

    const handleChangeVision = (e) => {
        const newVision = e.target.value;
        setLandingData(prevState => ({
            ...prevState,
            section3_vision: newVision
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Crear un FormData solo si hay archivo
        const formData = new FormData();
        formData.append('section3_vision', landingData.section3_about);
        formData.append('section3_mission', landingData.section3_mission);
        formData.append('section3_vision', landingData.section3_vision);
        if (selectedFile) {
            formData.append('section3_image', selectedFile.section3_image);
        }

        post('/landing/about', {
            data: formData,
            preserveScroll: true,
            onFinish: () => {
                console.log('Formulario enviado con éxito');
                setLandingData({
                    section3_about: '',
                    section3_mission: '',
                    section3_vision: '',
                    section3_image: ''
                });
                setModalIsOpen(false);
                setSelectedFile(null);
                onSuccess("Landing Page actualizada correctamente.");
            }
        });
    };

    return (
        <section className="p-4">
            <header>
                <div>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Actualiza la información de tu Mision y Visión.
                    </p>
                </div>

                <div className="mt-4">
                    <Typography variant="h6" color="blue-gray" className="mb-1">
                        Sobre Nosotros
                    </Typography>
                    <Input
                        name="section3_about"
                        placeholder="Nosotros"
                        id="section3_about"
                        value={landingData.section3_about}
                        onChange={handleChangeAbout}
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                </div>

                <div className="mt-4">
                    <Typography variant="h6" color="blue-gray" className="mb-1">
                        Mision
                    </Typography>
                    <Input
                        name="section3_mission"
                        placeholder="Escribe tu mision"
                        id="section3_mission"
                        value={landingData.section3_mission}
                        onChange={handleChangeMission}
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                </div>

                <div className="mt-4">
                    <Typography variant="h6" color="blue-gray" className="mb-1">
                        Vision
                    </Typography>
                    <Input
                        name="section3_vision"
                        placeholder="Escribe tu vision"
                        id="section3_vision"
                        value={landingData.section3_vision}
                        onChange={handleChangeVision}
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                </div>

                <div className="mt-4">
                    <Typography variant="h6" color="blue-gray" className="mb-1">
                        Agregar imagen
                    </Typography>
                    <input
                        type="file"
                        name="section3_image"
                        id="section3_image"
                        className="hidden"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </div>

                <div className="flex flex-wrap gap-4 mt-4">
                    <Button
                        size="sm"
                        variant="gradient"
                        className="rounded-full flex items-center gap-3"
                        onClick={() => document.getElementById('section3_image').click()}
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
                            maxWidth: '1000px',
                            height: 'auto',
                            maxHeight: '700px',
                        },
                    }}
                >
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Previsualización</h2>

                    <div className="mt-8">
                        <AboutPage landingData={landingData} />
                    </div>
                    <div className="mt-4 flex space-x-4">
                        <Button onClick={closeModal}>Cerrar</Button>

                        <Button
                            onClick={handleSubmit}
                            disabled={!landingData.section3_vision || !landingData.section3_mission || !selectedFile || processing}
                        >
                            Guardar
                        </Button>
                    </div>
                </Modal>
            </header>
        </section>
    );
}
