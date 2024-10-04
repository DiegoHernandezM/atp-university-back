import React, { useEffect, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Button, Typography, Input } from '@material-tailwind/react';
import Modal from 'react-modal';
import WelcomePage from '../../WelcomePage.jsx';

Modal.setAppElement('#app');

export default function WelcomeSection({ landingData: initialData, onSuccess }) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [landingData, setLandingData] = useState({
        title: '',
        section1_video: null,
        section1_video_description: '',
        type: '',
        section: ''
    });

    const { setData, post, processing } = useForm();

    // Cargar los datos de landingData al montar el componente, excepto el archivo
    useEffect(() => {
        setLandingData({
            ...landingData,
            title: initialData?.title || '',
            section1_video: initialData?.section1_video || null,
            section1_video_description: initialData?.section1_video_description || '',
            section: 'welcome'
        });
    }, [initialData]);

    useEffect(() => {
        setData({
            title: landingData?.title || '',
            section1_video: selectedFile,
            section1_video_description: landingData?.section1_video_description || '',
            section: 'welcome'
        });
    }, [landingData, selectedFile]);

    // Manejar la selección de archivo
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (selectedFile?.url) {
                URL.revokeObjectURL(selectedFile.url);
            }
            const fileUrl = URL.createObjectURL(file);
            setSelectedFile({ url: fileUrl, file, type: file.type });
            setLandingData((prevState) => ({
                ...prevState,
                section1_video: fileUrl,
                type: file.type
            }));
        }
    };

    const openModal = () => {
        setModalIsOpen(true);
        /*if (selectedFile) {
            setModalIsOpen(true);
        }*/
    };

    const closeModal = () => {
        setModalIsOpen(false);
        /*if (selectedFile?.url) {
            URL.revokeObjectURL(selectedFile.url);
            setSelectedFile(null);
        }*/
    };

    const handleChangeTitle = (e) => {
        setLandingData((prevState) => ({
            ...prevState,
            title: e.target.value,
        }));
    };

    const handleChangeDescription = (e) => {
        setLandingData((prevState) => ({
            ...prevState,
            section1_video_description: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', landingData.title);
        formData.append('section1_video_description', landingData.section1_video_description);
        if (selectedFile) {
            formData.append('section1_video', selectedFile.file);
        }
        post('/landing', {
            data: formData,
            preserveScroll: true,
            onFinish: () => {
                onSuccess("Landing Page actualizada correctamente.");
                /*setLandingData({
                    title: '',
                    section1_video_description: '',
                    section1_video: null
                });*/
                setModalIsOpen(false);
                // setSelectedFile(null);
            }
        });
    };

    return (
        <section className="border p-4">
            <header>
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
                        Seleccionar Archivo
                    </Button>

                    <Button
                        size="sm"
                        variant="gradient"
                        className="rounded-full flex items-center gap-3"
                        onClick={openModal}
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
                            left: '50%',
                            right: 'auto',
                            bottom: 'auto',
                            marginRight: '-50%',
                            transform: 'translate(-50%, -50%)',
                            width: '95%',
                            maxWidth: '1200px',
                            height: 'auto',
                            maxHeight: '700px',
                            padding: '50px',
                            overflowY: 'auto',
                        },
                    }}
                >
                    <div className="absolute top-2 right-2 z-50">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="mr-3 h-10 w-10 cursor-pointer hover:scale-110 transition-transform duration-200"
                            onClick={closeModal}
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <br />
                    <div className="mt-8">
                        <WelcomePage landingData={landingData} fixedNav={false} isPrev={true} />
                    </div>
                    <div className="mt-4 flex flex-col sm:flex-row gap-4">
                        <Button onClick={closeModal}>Cerrar</Button>

                        <Button
                            onClick={handleSubmit}
                            disabled={processing}
                        >
                            Guardar
                        </Button>
                    </div>
                </Modal>
            </header>
        </section>
    );
}
