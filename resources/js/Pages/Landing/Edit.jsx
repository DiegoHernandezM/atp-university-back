import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Button, IconButton, Input, Typography } from '@material-tailwind/react';
import React, { useState } from 'react';

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
            roles={auth.roles}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Editar Landing</h2>}
        >
            <Head title="Editar Landing" />
        </AuthenticatedLayout >
    );
}

