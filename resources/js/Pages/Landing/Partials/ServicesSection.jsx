import { useEffect, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Button, Typography } from '@material-tailwind/react';
import Modal from 'react-modal';
import ServicesPage from '../../ServicesPage.jsx';

Modal.setAppElement('#app');

export default function ServicesSection({ onSuccess }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedButtonImage, setSelectedButtonImage] = useState(null);
    const [selectedBackgroundImage, setSelectedBackgroundImage] = useState(null);

    const [landingData, setLandingData] = useState({
        section4_services: [
            { title: '', description: '', link: '', phone: '', button_image: null, background_image: null }
        ]
    });

    const { setData, post, processing } = useForm();

    useEffect(() => {
        setData({
            section4_services: landingData.section4_services
        });
    }, [landingData]);

    const openModal = () => {
        if (selectedButtonImage && selectedBackgroundImage)
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleServicesChange = (index, field, value) => {
        const updatedServices = [...landingData.section4_services];
        updatedServices[index][field] = value;
        setLandingData(prevData => ({
            ...prevData,
            section4_services: updatedServices
        }));
    };

    const isPreviewDisabled = landingData.section4_services.every(
        count => count.title.trim() !== '' && count.description.trim() !== ''
            && count.link.trim() !== '' && count.button_image !== null
            && count.background_image !== null
    );

    const handleButtonImageChange = (event, index) => {
        const file = event.target.files[0];
        if (file) {
            const fileUrl = URL.createObjectURL(file);
            setSelectedButtonImage({ url: fileUrl });

            const updatedServices = [...landingData.section4_services];
            updatedServices[index].button_image = { url: fileUrl, file: file };
            setLandingData(prevState => ({
                ...prevState,
                section4_services: updatedServices
            }));
        }
    };

    const handleBackgroundImageChange = (event, index) => {
        const file = event.target.files[0];
        if (file) {
            const fileUrl = URL.createObjectURL(file);
            setSelectedBackgroundImage({ url: fileUrl });

            const updatedServices = [...landingData.section4_services];
            updatedServices[index].background_image = { url: fileUrl, file: file };
            setLandingData(prevState => ({
                ...prevState,
                section4_services: updatedServices
            }));
        }
    };

    // Función para agregar una nueva sección de servicio
    const addNewServiceSection = () => {
        setLandingData(prevData => ({
            ...prevData,
            section4_services: [
                ...prevData.section4_services,
                { title: '', description: '', link: '', phone: '', button_image: null, background_image: null }
            ]
        }));
    };

    // Función para eliminar una sección de servicio
    const removeServiceSection = (index) => {
        const updatedServices = [...landingData.section4_services];
        updatedServices.splice(index, 1); // Elimina el elemento en la posición index
        setLandingData(prevData => ({
            ...prevData,
            section4_services: updatedServices
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('section4_services', JSON.stringify(landingData.section4_services));
        console.log(formData)
        post('/landing/services', {
            data: formData,
            preserveScroll: true,
            onFinish: () => {
                console.log('Formulario enviado con éxito');
                setModalIsOpen(false);
                onSuccess("Landing Page actualizada correctamente.");
            }
        });
    };

    return (
        <section className="p-4">
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Bienvenido</h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Actualiza la información de tus Servicios.
                </p>

                {landingData.section4_services.map((count, index) => (
                    <div key={index} className="border border-gray-800 p-6 rounded-md mb-4 space-y-2">
                        <Typography variant="h6" color="blue-gray" className="mb-1">
                            Título del Servicio
                        </Typography>
                        <input
                            type="text"
                            value={count.title ?? ''}
                            onChange={(e) => handleServicesChange(index, 'title', e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md"
                        />

                        <Typography variant="h6" color="blue-gray" className="mb-1">
                            Descripción
                        </Typography>
                        <input
                            type="text"
                            value={count.description ?? ''}
                            onChange={(e) => handleServicesChange(index, 'description', e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md"
                        />

                        <Typography variant="h6" color="blue-gray" className="mb-1">
                            Link
                        </Typography>
                        <input
                            type="text"
                            value={count.link ?? ''}
                            onChange={(e) => handleServicesChange(index, 'link', e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md"
                        />

                      <Typography variant="h6" color="blue-gray" className="mb-1">
                        Telefono
                      </Typography>
                      <input
                        type="text"
                        value={count.phone ?? ''}
                        onChange={(e) => handleServicesChange(index, 'phone', e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md"
                      />

                        <div className="mt-4">
                            <Typography variant="h6" color="blue-gray" className="mb-1">
                                Agregar imagen para botón
                            </Typography>
                            <div className="flex flex-wrap gap-4">
                                <input
                                    type="file"
                                    name="button_image"
                                    id={`button_image_${index}`} // ID único por cada sección
                                    className="hidden"
                                    accept="image/*"
                                    onChange={(e) => handleButtonImageChange(e, index)} // Cambié para que llame la función con el índice correspondiente
                                />
                                <Button
                                    size="sm"
                                    variant="gradient"
                                    className="rounded-full flex items-center gap-3"
                                    onClick={() => document.getElementById(`button_image_${index}`).click()} // Seleccionar el input de la sección correcta
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
                                    Seleccionar imagen para botón
                                </Button>
                            </div>
                        </div>

                        <div className="mt-4">
                            <Typography variant="h6" color="blue-gray" className="mb-1">
                                Agregar imagen de fondo
                            </Typography>
                            <div className="flex flex-wrap gap-4">
                                <input
                                    type="file"
                                    name="background_image"
                                    id={`background_image_${index}`} // ID único por cada sección
                                    className="hidden"
                                    accept="image/*"
                                    onChange={(e) => handleBackgroundImageChange(e, index)} // Cambié para que llame la función con el índice correspondiente
                                />
                                <Button
                                    size="sm"
                                    variant="gradient"
                                    className="rounded-full flex items-center gap-3"
                                    onClick={() => document.getElementById(`background_image_${index}`).click()} // Seleccionar el input de la sección correcta
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
                                    Seleccionar imagen de fondo
                                </Button>
                            </div>
                        </div>

                        {/* Botón para eliminar sección */}
                        <div className="mt-4">
                            <Button
                                size="sm"
                                variant="gradient"
                                color="red"
                                onClick={() => removeServiceSection(index)}
                            >
                                Eliminar sección
                            </Button>
                        </div>
                    </div>
                ))}

                <div className="mt-4 flex space-x-4">
                    {/* Botón para agregar nueva sección */}
                    <div className="mt-6">
                        <Button
                            size="sm"
                            variant="gradient"
                            onClick={addNewServiceSection}
                        >
                            Agregar Servicio
                        </Button>
                    </div>

                    {/* Botón de previsualización */}
                    <div className="mt-6">
                        <Button
                            size="sm"
                            variant="gradient"
                            disabled={!isPreviewDisabled}
                            onClick={openModal}
                        >
                            Previsualizar
                        </Button>
                    </div>
                </div>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Previsualizar Servicios"
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
                            maxHeight: '700px',
                        },
                    }}
                >
                    <h2>Previsualización de Servicios</h2>
                    <ServicesPage landingData={landingData.section4_services} isPrev={true} />
                    <div className="mt-4 flex space-x-4">
                        <Button onClick={closeModal}>Cerrar</Button>

                        <Button
                            onClick={handleSubmit}
                            disabled={processing || !isPreviewDisabled}
                        >
                            Guardar
                        </Button>
                    </div>
                </Modal>
            </header>
        </section>
    );
}
