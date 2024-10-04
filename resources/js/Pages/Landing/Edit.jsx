import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {Alert, Typography} from '@material-tailwind/react';
import React, { useState } from 'react';
import WelcomeSection from "@/Pages/Landing/Partials/WelcomeSection.jsx";
import MetrictsSection from "@/Pages/Landing/Partials/MetrictsSection.jsx";
import AboutSection from "@/Pages/Landing/Partials/AboutSection.jsx";
import ServicesSection from "@/Pages/Landing/Partials/ServicesSection.jsx";
import SimulatorsSection from "@/Pages/Landing/Partials/SimulatorsSection.jsx";
import TestimonialsSection from "@/Pages/Landing/Partials/TestimonialsSection.jsx";
import ContactSection from "@/Pages/Landing/Partials/ContactSection.jsx";
export default function Edit({ auth, landingData }) {

    const [successMessage, setSuccessMessage] = useState(null);

    const handleFormSuccess = (message) => {
        setSuccessMessage(message);
        setTimeout(() => setSuccessMessage(null), 5000);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Editar Landing</h2>}
        >
            <Head title="Editar Landing" />
            <div className="mt-12">
              <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                {successMessage && <Alert color="green">{successMessage}</Alert>}
                <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                  <Typography variant="h4" color="blue-gray" className="mb-1">
                    Inicio
                  </Typography>
                  <WelcomeSection landingData={landingData} onSuccess={handleFormSuccess}/>
                </div>

                <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                  <Typography variant="h4" color="blue-gray" className="mb-1">
                    Estadísticas
                  </Typography>
                  <MetrictsSection landingData={landingData} onSuccess={handleFormSuccess}/>
                </div>

                <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                  <Typography variant="h4" color="blue-gray" className="mb-1">
                    Sobre Nosotros
                  </Typography>
                  <AboutSection landingData={landingData} onSuccess={handleFormSuccess}/>
                </div>

                <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                  <Typography variant="h4" color="blue-gray" className="mb-1">
                    Servicios
                  </Typography>
                  <ServicesSection landingData={landingData} onSuccess={handleFormSuccess}/>
                </div>

                <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                  <Typography variant="h4" color="blue-gray" className="mb-1">
                    Simuladores
                  </Typography>
                  <SimulatorsSection landingData={landingData} onSuccess={handleFormSuccess}/>
                </div>

                <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                  <Typography variant="h4" color="blue-gray" className="mb-1">
                    Testimonios
                  </Typography>
                  <TestimonialsSection landingData={landingData} onSuccess={handleFormSuccess}/>
                </div>

                <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                  <Typography variant="h4" color="blue-gray" className="mb-1">
                    Contacto
                  </Typography>
                  <ContactSection landingData={landingData} onSuccess={handleFormSuccess}/>
                </div>
              </div>
            </div>
        </AuthenticatedLayout>
    );
}

