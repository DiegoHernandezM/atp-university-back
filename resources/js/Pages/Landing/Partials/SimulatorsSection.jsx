import { useEffect, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Button, Typography } from '@material-tailwind/react';
import Modal from 'react-modal';
import SimulatorsPage from '../../SimulatorsPage.jsx';

Modal.setAppElement('#app');

export default function SimulatorsSection({ onSuccess }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const [landingData, setLandingData] = useState({
        section5_simulators: [
            { title: '', description: '', image: null }
        ]
    });

    const { setData, post, processing } = useForm();

    useEffect(() => {
        setData({
            section5_simulators: landingData.section5_simulators
        });
    }, [landingData]);

    const openModal = () => {
        if (selectedImage) {
          setModalIsOpen(true);
        }
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleSimulatorsChange = (index, field, value) => {
        const updatedSimulators = [...landingData.section5_simulators];
        updatedSimulators[index][field] = value;
        setLandingData(prevData => ({
            ...prevData,
            section5_simulators: updatedSimulators
        }));
    };

    const isPreviewDisabled = landingData.section5_simulators.every(
        count => count.title.trim() !== '' && count.description.trim() !== '' && count.image !== null
    );

    const handleFileChange = (event, index) => {
        const file = event.target.files[0];
        if (file) {
            const fileUrl = URL.createObjectURL(file);
            setSelectedImage({ url: fileUrl });

            const updatedSimulators = [...landingData.section5_simulators];
            updatedSimulators[index].image = { url: fileUrl, file: file };
            setLandingData(prevState => ({
                ...prevState,
                section5_simulators: updatedSimulators
            }));
        }
    };
    const addNewSimulatorSection = () => {
        setLandingData(prevData => ({
            ...prevData,
            section5_simulators: [
                ...prevData.section5_simulators,
                { title: '', description: '', image: null }
            ]
        }));
    };

    const removeSimulatorSection = (index) => {
        const updatedSimulator = [...landingData.section5_simulators];
        updatedSimulator.splice(index, 1);
        setLandingData(prevData => ({
            ...prevData,
            section5_simulators: updatedSimulator
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('section5_simulators', JSON.stringify(landingData.section5_simulators));
        console.log(formData)
        post('/landing/simulators', {
            data: formData,
            preserveScroll: true,
            onFinish: () => {
              console.log('Formulario enviado con éxito');
              setModalIsOpen(false);
              setLandingData({
                section5_simulators: [
                  { title: '', description: '', image: null }
                ]
              });
              setSelectedImage(null);
              onSuccess("Landing Page actualizada correctamente.");
            }
        });
    };

    return (
        <section className="p-4">
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Bienvenido</h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Agrega información de Simuladores.
                </p>

                {landingData.section5_simulators.map((count, index) => (
                    <div key={index} className="border border-gray-800 p-6 rounded-md mb-4 space-y-2">
                        <Typography variant="h6" color="blue-gray" className="mb-1">
                            Título
                        </Typography>
                        <input
                            type="text"
                            value={count.title ?? ''}
                            onChange={(e) => handleSimulatorsChange(index, 'title', e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md"
                        />

                        <Typography variant="h6" color="blue-gray" className="mb-1">
                            Descripción
                        </Typography>
                        <input
                            type="text"
                            value={count.description ?? ''}
                            onChange={(e) => handleSimulatorsChange(index, 'description', e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md"
                        />

                        <div className="mt-4">
                            <Typography variant="h6" color="blue-gray" className="mb-1">
                                Agregar imagen
                            </Typography>
                            <div className="flex flex-wrap gap-4">
                                <input
                                    type="file"
                                    name="image"
                                    id={`image_${index}`}
                                    className="hidden"
                                    accept="image/*"
                                    onChange={(e) => handleFileChange(e, index)}
                                />
                                <Button
                                    size="sm"
                                    variant="gradient"
                                    className="rounded-full flex items-center gap-3"
                                    onClick={() => document.getElementById(`image_${index}`).click()} // Seleccionar el input de la sección correcta
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
                                    Seleccionar imagen
                                </Button>
                            </div>
                        </div>

                        {/* Botón para eliminar sección */}
                        <div className="mt-4">
                            <Button
                                size="sm"
                                variant="gradient"
                                color="red"
                                onClick={() => removeSimulatorSection(index)}
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
                            onClick={addNewSimulatorSection}
                        >
                            Agregar Simulador
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
                    contentLabel="Previsualizar"
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
                    <h2>Previsualización Simuladores</h2>
                    <SimulatorsPage landingData={landingData.section5_simulators} isPrev={true} />
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
