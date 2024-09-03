import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Button, IconButton, Input, Typography } from '@material-tailwind/react';
import React, { useState } from 'react';
import LandingPage from '../LandingPage';

export default function Edit({ auth, landingData }) {
    const { data, setData, post, progress } = useForm({
        title: landingData?.title || '',
        section1_video: null,
        section1_video_description: landingData?.section1_video_description || '',
        section2_counts: JSON.parse(landingData?.section2_counts) || [{ title: '', quantity: '', image: null }],
        section3_image: null,
        section3_mission: landingData?.section3_mission || '',
        section3_vision: landingData?.section3_vision || '',
        section4_services: JSON.parse(landingData?.section4_services) || [{ title: '', link: '', image: null }],
        section5_simulators: JSON.parse(landingData?.section5_simulators) || [{ title: '', description: '', file: null }]
    });

    const handleChange = (e) => {
        if (e.target.type === 'file') {
            setData(e.target.name, e.target.files[0]);
        } else {
            setData(e.target.name, e.target.value);
        }
    };

    const handleCountChange = (index, field, value, event = null) => {
        const updatedCounts = [...data.section2_counts];
        updatedCounts[index][field] = value;
        setData('section2_counts', updatedCounts);

        if (event && event.target.type === 'file') {
            submit();
        }
    };

    const addCount = () => {
        setData('section2_counts', [...data.section2_counts, { title: '', quantity: '', image: null }]);
    };

    const removeCount = (index) => {
        const updatedCounts = data.section2_counts.filter((_, i) => i !== index);
        setData('section2_counts', updatedCounts);
    };

    const handleServiceChange = (index, field, value, event = null) => {
        const updatedServices = [...data.section4_services];
        updatedServices[index][field] = value;
        setData('section4_services', updatedServices);

        if (event && event.target.type === 'file') {
            submit();
        }
    };

    const addService = () => {
        setData('section4_services', [...data.section4_services, { title: '', link: '', image: null }]);
    };

    const removeService = (index) => {
        const updatedServices = data.section4_services.filter((_, i) => i !== index);
        setData('section4_services', updatedServices);
    };

    const handleSimulatorChange = (index, field, value, event = null) => {
        const updatedSimulators = [...data.section5_simulators];
        updatedSimulators[index][field] = value;
        setData('section5_simulators', updatedSimulators);
        if (event && event.target.type === 'file') {
            submit();
        }
    };

    const addSimulator = () => {
        setData('section5_simulators', [...data.section5_simulators, { title: '', description: '', file: null }]);
    };

    const removeSimulator = (index) => {
        const updatedSimulators = data.section5_simulators.filter((_, i) => i !== index);
        setData('section5_simulators', updatedSimulators);
    };

    function submit(e = null) {
        if (e) {
            e.preventDefault();
        }
        const formData = new FormData();
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                if (key === 'section2_counts' || key === 'section4_services' || key === 'section5_simulators') {
                    formData.append(key, JSON.stringify(data[key]));
                } else {
                    formData.append(key, data[key]);
                }
            }
        }

        post('/landing', {
            data: formData,
            preserveScroll: true,
            onFinish: () => {
                console.log('Formulario enviado con éxito');
            }
        });
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Editar Landing</h2>}
        >
            <Head title="Editar Landing" />
            <div className="flex">
                <div className="w-1/3">
                    <div className="mt-8">
                        <form onSubmit={submit} className="mt-3 space-y-6">
                            <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                                <Typography variant="h4" color="blue-gray" className="mb-1">
                                    Sección 1: Bienvenida
                                </Typography>
                                <div>
                                    <Typography variant="h6" color="blue-gray" className="mb-1">
                                        Video, Imagen o GIF
                                    </Typography>
                                    <input
                                        type="file"
                                        name="section1_video"
                                        id="section1_video"
                                        onChange={handleChange}
                                        className="hidden"
                                        accept="video/*, image/*"
                                    />
                                    <Button size="sm" variant="gradient" className="rounded-full flex items-center gap-3 mb-2" onClick={() => document.getElementById(`section1_video`).click()}>
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

                                </div>
                                <div>
                                    <Typography variant="h6" color="blue-gray" className="mb-1">
                                        Título
                                    </Typography>
                                    <Input
                                        name="title"
                                        placeholder="Título de página"
                                        id="title"
                                        value={data.title}
                                        onBlur={submit}
                                        onChange={handleChange}
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    />
                                </div>

                                <div>
                                    <Typography variant="h6" color="blue-gray" className="mb-1">
                                        Texto de bienvenida
                                    </Typography>
                                    <textarea
                                        name="section1_video_description"
                                        id="section1_video_description"
                                        value={data.section1_video_description}
                                        onChange={handleChange}
                                        onBlur={submit}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    />
                                </div>
                            </div>

                            <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                                <Typography variant="h4" color="blue-gray" className="mb-1">
                                    Sección 2: Contadores
                                </Typography>
                                {data.section2_counts.map((count, index) => (
                                    <div key={index} className="border border-gray-800 p-6 rounded-md mb-4 space-y-2">
                                        <div>
                                            <Typography variant="h6" color="blue-gray" className="mb-1">
                                                Imagen del conteo
                                            </Typography>
                                            <Button size="sm" variant="gradient" className="rounded-full flex items-center gap-3" onClick={() => document.getElementById(`image-${index}`).click()}>
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
                                            <input
                                                type="file"
                                                name={`image-${index}`}
                                                id={`image-${index}`}
                                                onChange={(e) => handleCountChange(index, 'image', e.target.files[0], e)}
                                                className="hidden"
                                                accept="image/*"
                                            />

                                        </div>
                                        <div>
                                            <Typography variant="h6" color="blue-gray" className="mb-1">
                                                Título del contador
                                            </Typography>
                                            <input
                                                type="text"
                                                name="title"
                                                id={`title-${index}`}
                                                value={count.title ?? ''}
                                                onBlur={submit}
                                                onChange={(e) => handleCountChange(index, 'title', e.target.value)}
                                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            />
                                        </div>
                                        <div>
                                            <Typography variant="h6" color="blue-gray" className="mb-1">
                                                Cantidad del contador
                                            </Typography>
                                            <input
                                                type="number"
                                                name="quantity"
                                                id={`quantity-${index}`}
                                                value={count.quantity ?? ''}
                                                onBlur={submit}
                                                onChange={(e) => handleCountChange(index, 'quantity', e.target.value)}
                                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            />
                                        </div>
                                        <IconButton color="red" onClick={() => removeCount(index)}>
                                            <i className="fas fa-cancel" />
                                        </IconButton>
                                    </div>
                                ))}
                                <Button size='sm' color='blue' variant="gradient" className="rounded-full flex items-center gap-3" onClick={addCount}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                                    </svg>
                                    Agregar contador
                                </Button>
                            </div>

                            <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                                <Typography variant="h4" color="blue-gray" className="mb-1">
                                    Sección 3: Misión y Visión
                                </Typography>
                                <div>
                                    <Typography variant="h6" color="blue-gray" className="mb-1">
                                        Imágen
                                    </Typography>
                                    <Button size="sm" variant="gradient" className="rounded-full flex items-center gap-3 mb-2" onClick={() => document.getElementById(`section3_image`).click()}>
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
                                    <input
                                        type="file"
                                        name="section3_image"
                                        id="section3_image"
                                        onChange={handleChange}
                                        className="hidden"
                                        accept="image/*"
                                    />
                                </div>
                                <div>
                                    <Typography variant="h6" color="blue-gray" className="mb-1">
                                        Misión
                                    </Typography>
                                    <textarea
                                        name="section3_mission"
                                        id="section3_mission"
                                        value={data.section3_mission ?? ''}
                                        onChange={handleChange}
                                        onBlur={submit}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    />
                                </div>
                                <div>
                                    <Typography variant="h6" color="blue-gray" className="mb-1">
                                        Visión
                                    </Typography>
                                    <textarea
                                        name="section3_vision"
                                        id="section3_vision"
                                        value={data.section3_vision ?? ''}
                                        onChange={handleChange}
                                        onBlur={submit}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    />
                                </div>
                            </div>
                            <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                                <Typography variant="h4" color="blue-gray" className="mb-1">
                                    Sección 4: Servicios
                                </Typography>
                                {data.section4_services.map((service, index) => (
                                    <div key={index} className="border border-gray-800 p-6 rounded-md mb-4 space-y-2">
                                        <div>
                                            <Typography variant="h6" color="blue-gray" className="mb-1">
                                                Imagen del servicio
                                            </Typography>
                                            <Button size="sm" variant="gradient" className="rounded-full flex items-center gap-3" onClick={() => document.getElementById(`s_image-${index}`).click()}>
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
                                            <input
                                                type="file"
                                                name={`s_image-${index}`}
                                                id={`s_image-${index}`}
                                                onChange={(e) => handleServiceChange(index, 'image', e.target.files[0], e)}
                                                className="hidden"
                                                accept="image/*"
                                            />
                                        </div>
                                        <div>
                                            <Typography variant="h6" color="blue-gray" className="mb-1">
                                                Título del servicio
                                            </Typography>
                                            <input
                                                type="text"
                                                name="title"
                                                id={`title-${index}`}
                                                value={service.title ?? ''}
                                                onBlur={submit}
                                                onChange={(e) => handleServiceChange(index, 'title', e.target.value)}
                                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            />
                                        </div>
                                        <div>
                                            <Typography variant="h6" color="blue-gray" className="mb-1">
                                                Enlace o Link
                                            </Typography>
                                            <input
                                                type="text"
                                                name="link"
                                                id={`link-${index}`}
                                                value={service.link ?? ''}
                                                onBlur={submit}
                                                onChange={(e) => handleServiceChange(index, 'link', e.target.value)}
                                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            />
                                        </div>
                                        <IconButton color="red" onClick={() => removeService(index)}>
                                            <i className="fas fa-cancel" />
                                        </IconButton>
                                    </div>
                                ))}
                                <Button size='sm' color='blue' variant="gradient" className="rounded-full flex items-center gap-3" onClick={addService}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                                    </svg>
                                    Agregar servicio
                                </Button>
                            </div>
                            <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                                <Typography variant="h4" color="blue-gray" className="mb-1">
                                    Sección 5: Simuladores
                                </Typography>
                                {data.section5_simulators.map((simulator, index) => (
                                    <div key={index} className="border border-gray-800 p-6 rounded-md mb-4 space-y-2">
                                        <div>
                                            <Typography variant="h6" color="blue-gray" className="mb-1">
                                                Video, Imagen o GIF del Simulador
                                            </Typography>
                                            <Button size="sm" variant="gradient" className="rounded-full flex items-center gap-3" onClick={() => document.getElementById(`file-${index}`).click()}>
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
                                            <input
                                                type="file"
                                                name={`file-${index}`}
                                                id={`file-${index}`}
                                                onChange={(e) => handleSimulatorChange(index, 'file', e.target.files[0], e)}
                                                className="hidden"
                                                accept="image/*,video/*"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor={`title-${index}`} className="block text-sm font-medium text-gray-700 dark:text-gray-300">Título del Simulador</label>
                                            <input
                                                type="text"
                                                name="title"
                                                id={`title-${index}`}
                                                value={simulator.title ?? ''}
                                                onBlur={submit}
                                                onChange={(e) => handleSimulatorChange(index, 'title', e.target.value)}
                                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor={`description-${index}`} className="block text-sm font-medium text-gray-700 dark:text-gray-300">Descripción</label>
                                            <input
                                                type="text"
                                                name="description"
                                                id={`description-${index}`}
                                                value={simulator.description ?? ''}
                                                onBlur={submit}
                                                onChange={(e) => handleSimulatorChange(index, 'description', e.target.value)}
                                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            />
                                        </div>
                                        <IconButton color="red" onClick={() => removeSimulator(index)}>
                                            <i className="fas fa-cancel" />
                                        </IconButton>
                                    </div>
                                ))}
                                <Button size='sm' color='blue' variant="gradient" className="rounded-full flex items-center gap-3" onClick={addSimulator}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                                    </svg>
                                    Agregar servicio
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-2/3 mt-8">
                    <LandingPage landingData={landingData} fixedNav={false} />
                </div>
            </div >
        </AuthenticatedLayout >
    );
}

