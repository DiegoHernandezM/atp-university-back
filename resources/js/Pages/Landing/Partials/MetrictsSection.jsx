import React, { useEffect, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Button, Typography } from '@material-tailwind/react';
import Modal from 'react-modal';
import MetrictsPage from '../../MetrictsPage.jsx';

Modal.setAppElement('#app');

export default function MetrictsSection({ landingData: initialLandingData, onSuccess }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const { setData, post, processing } = useForm();

    const parsedSection2Counts = typeof initialLandingData?.section2_counts === 'string'
        ? JSON.parse(initialLandingData.section2_counts)
        : initialLandingData.section2_counts;

    const [landingData, setLandingData] = useState({
        section2_counts: Array.isArray(parsedSection2Counts)
            ? parsedSection2Counts
            : [
                { title: '', quantity: '' },
                { title: '', quantity: '' },
                { title: '', quantity: '' },
                { title: '', quantity: '' }
            ],
        section: 'metricts',
    });

    useEffect(() => {
        if (initialLandingData) {
            const parsedSection2Counts = typeof initialLandingData.section2_counts === 'string'
                ? JSON.parse(initialLandingData.section2_counts)
                : initialLandingData.section2_counts;

            setLandingData({
                section2_counts: Array.isArray(parsedSection2Counts)
                    ? parsedSection2Counts
                    : [
                        { title: '', quantity: '' },
                        { title: '', quantity: '' },
                        { title: '', quantity: '' },
                        { title: '', quantity: '' }
                    ],
                section: 'metricts',
            });
        }
    }, [initialLandingData]);

    useEffect(() => {
        setData({
            section2_counts: landingData.section2_counts,
            section: 'metricts'
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
            section2_counts: updatedCounts,
            section: 'metricts'
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('section2_counts', landingData);
        post('/landing', {
            data: formData,
            preserveScroll: true,
            onFinish: () => {
                console.log('Formulario enviado con éxito');
                setModalIsOpen(false);
                /*setLandingData({
                    section2_counts: [
                        { title: '', quantity: '' },
                        { title: '', quantity: '' },
                        { title: '', quantity: '' },
                        { title: '', quantity: '' }
                    ]
                });*/
                window.scrollTo({ top: 0, behavior: 'smooth' });
                onSuccess("Landing Page actualizada correctamente.");
            }
        });
    };


    return (
        <section className="border p-4">
            <header>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Actualiza la información de tus Estadísticas.
                </p>
                <br />
                {landingData.section2_counts.map((count, index) => (
                    <div key={index} className="border p-6 rounded-md mb-4 space-y-2">
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
                            left: '50%',
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
                        <MetrictsPage landingData={landingData} />
                    </div>
                    <div className="mt-4 flex flex-col sm:flex-row gap-4">
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
