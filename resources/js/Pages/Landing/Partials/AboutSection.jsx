import React, { useEffect, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Button, Typography, Input } from '@material-tailwind/react';
import Modal from 'react-modal';
import AboutPage from '../../AboutPage.jsx';

Modal.setAppElement('#app');

export default function AboutSection({ landingData: initialData, onSuccess }) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [landingData, setLandingData] = useState({
        section3_image: '',
        section3_about: '',
        section3_mission: '',
        section3_vision: '',
        type: '',
        section: ''
    });

    const { setData, post, processing } = useForm();

    useEffect(() => {
        setLandingData(prevState => ({
            ...prevState,
            section3_image: initialData?.section3_image || null,
            section3_about: initialData?.section3_about || '',
            section3_mission: initialData?.section3_mission || '',
            section3_vision: initialData?.section3_vision || '',
            section: 'about'
        }));
    }, [initialData]);

    useEffect(() => {
        setData({
            section3_about: landingData?.section3_about || '',
            section3_mission: landingData?.section3_mission || '',
            section3_vision: landingData?.section3_vision || '',
            section3_image: selectedFile || null,
            section: 'about'
        });
    }, [landingData, selectedFile]);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (selectedFile?.url) {
                URL.revokeObjectURL(selectedFile.url);
            }
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
        setModalIsOpen(true);
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

        const formData = new FormData();
        formData.append('section3_vision', landingData.section3_vision);
        formData.append('section3_mission', landingData.section3_mission);
        formData.append('section3_about', landingData.section3_about);
        if (selectedFile) {
            formData.append('section3_image', selectedFile.file); // Asegúrate de usar el archivo real
        }

        post('/landing', {
            data: formData,
            preserveScroll: true,
            onFinish: () => {
                console.log('Formulario enviado con éxito');
                /*setAboutData({
                    section3_about: '',
                    section3_mission: '',
                    section3_vision: '',
                    section3_image: ''
                });*/
                setModalIsOpen(false);
                // setSelectedFile(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
                onSuccess("Landing Page actualizada correctamente.");
            }
        });
    };

    return (
        <section className="border p-4">
            <header>
                <div>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Actualiza la información de tu Misión y Visión.
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
                        Misión
                    </Typography>
                    <Input
                        name="section3_mission"
                        placeholder="Escribe tu misión"
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
                        Visión
                    </Typography>
                    <Input
                        name="section3_vision"
                        placeholder="Escribe tu visión"
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
                            width: '100%',
                            maxWidth: '1000px',
                            height: 'auto',
                            maxHeight: '700px',
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
                        <AboutPage landingData={landingData} isPrev={true} />
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
