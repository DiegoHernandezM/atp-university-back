import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { UsersIcon, InformationCircleIcon } from '@heroicons/react/24/solid';
import VisitBalance from "../Components/Charts/VisitBalance";

export default function Dashboard({ auth, data }) {
  const handleViewCourses = () => {
    window.location.href = route('contacts.get');
  }
  return (
    <AuthenticatedLayout user={auth.user} roles={auth.roles}>
      <Head title="Dashboard" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {/* Card: Conteo de Visitas */}
        <Card className="relative">
          <CardBody className="relative z-10">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Conteo de Visitas
            </Typography>
            <Typography variant="h1">{data?.count}</Typography>
          </CardBody>
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <UsersIcon className="w-32 h-32 text-blue-gray-400" />
          </div>
        </Card>

        {/* Card: Conteo de Solicitudes */}
        <Card className="relative">
          <CardBody className="relative z-10">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Solicitudes de Información
            </Typography>
            <Typography variant="h1">{data?.contacts}</Typography>
          </CardBody>
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <InformationCircleIcon className="w-32 h-32 text-blue-gray-400" />
          </div>
          <CardFooter className="pt-0 relative z-10">
            <Button
              className="mt-4 bg-black text-white font-bold px-4 text-sm py-2 rounded"
              onClick={handleViewCourses}
            >
              Ver mis solicitudes
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-3">
        <VisitBalance />
      </div>
    </AuthenticatedLayout>
  );
}
