import { useEffect, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Button, Typography } from '@material-tailwind/react';
import Modal from 'react-modal';
import MetrictsPage from '../../MetrictsPage.jsx';

Modal.setAppElement('#app');

export default function MetrictsSection({ onSuccess }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // Inicializa con 4 secciones por defecto
    const [landingData, setLandingData] = useState({
        section2_counts: [
            { title: '', quantity: '' },
            { title: '', quantity: '' },
            { title: '', quantity: '' },
            { title: '', quantity: '' }
        ]
    });

    const { setData, post, processing } = useForm();

    useEffect(() => {
        setData({
            section2_counts: landingData.section2_counts
        });
    }, [landingData]);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleCountChange = (index, field, value) => {
        const updatedCounts = [...landingData.section2_counts];
        updatedCounts[index][field] = value;
        setLandingData(prevData => ({
            ...prevData,
            section2_counts: updatedCounts
        }));
    };

    const isPreviewDisabled = landingData.section2_counts.every(
        count => count.title.trim() !== '' && count.quantity.trim() !== ''
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('section2_counts', JSON.stringify(landingData.section2_counts));

        post('/landing/metricts', {
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
                    Actualiza la información de tus Estadísticas.
                </p>

                {landingData.section2_counts.map((count, index) => (
                    <div key={index} className="border border-gray-800 p-6 rounded-md mb-4 space-y-2">
                        <Typography variant="h6" color="blue-gray" className="mb-1">
                            Título del contador
                        </Typography>
                        <input
                            type="text"
                            value={count.title ?? ''}
                            onChange={(e) => handleCountChange(index, 'title', e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md"
                        />

                        <Typography variant="h6" color="blue-gray" className="mb-1">
                            Cantidad del contador
                        </Typography>
                        <input
                            type="number"
                            value={count.quantity ?? ''}
                            onChange={(e) => handleCountChange(index, 'quantity', e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md"
                        />
                    </div>
                ))}

                <div className="flex flex-wrap gap-4 mt-4">
                    <Button
                        size="sm"
                        variant="gradient"
                        className="rounded-full flex items-center gap-3"
                        onClick={openModal}
                        disabled={!isPreviewDisabled}
                    >
                        Previsualizar
                    </Button>
                </div>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Previsualización de Estadísticas"
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
                            maxHeight: '800px',
                        },
                    }}>
                    <h2 className="text-lg font-medium text-gray-900">Previsualización</h2>

                    <div className="mt-8">
                        <MetrictsPage landingData={landingData} />
                    </div>
                    <div className="mt-4 flex space-x-4">
                        <Button onClick={closeModal}>Cerrar</Button>

                        <Button onClick={handleSubmit} disabled={processing}>
                            Guardar
                        </Button>
                    </div>
                </Modal>
            </header>
        </section>
    );
}
