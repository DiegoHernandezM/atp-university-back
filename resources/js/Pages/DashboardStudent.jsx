import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { BookOpenIcon, ClipboardDocumentCheckIcon, CursorArrowRaysIcon } from '@heroicons/react/24/solid';


import Courses from '@/Components/Landing/CourseGallery';
import { useEffect, useState } from 'react';
import Modal from '@/Components/Modal';
import PayPalComponent from '@/Components/PayPal/PayPalComponent';


export default function DashboardStudent({ auth, data }) {
  const [clientId, setClientId] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleViewCourses = () => {
    window.location.href = route('courses.index');
  };

  useEffect(() => {
    fetch('/paypal-client-id')
      .then(response => response.json())
      .then(data => {
        setClientId(data.client_id);
      })
      .catch(error => {
        console.error('Error fetching client ID:', error);
      });
  }, []);

  const handleBuyCourse = (sCourse) => {
    setSelectedCourse(sCourse);
    setOpenDialog(true);
    console.log(sCourse);
  }

  return (
    <AuthenticatedLayout user={auth.user} roles={auth.roles}>
      <Head title="Dashboard" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {/* Card: Conteo de Cursos */}
        <Card className="relative">
          <CardBody className="relative z-10">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Cursos tomados
            </Typography>
            <Typography variant="h1">{data.courses}</Typography>
          </CardBody>
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <BookOpenIcon className="w-32 h-32 text-blue-gray-400" />
          </div>
          <CardFooter className="pt-0 relative z-10">
            <Button
              className="mt-4 bg-black text-white font-bold px-4 text-sm py-2 rounded"
              onClick={handleViewCourses}
            >
              Ver mis cursos
            </Button>
          </CardFooter>
        </Card>

        <Card className="relative">
          <CardBody className="relative z-10">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Lecciones tomadas
            </Typography>
            <Typography variant="h1">{data.resources}</Typography>
          </CardBody>
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <CursorArrowRaysIcon className="w-32 h-32 text-blue-gray-400" />
          </div>
        </Card>

        <Card className="relative">
          <CardBody className="relative z-10">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Progreso general
            </Typography>
            <Typography variant="h1">{data.progress}%</Typography>
          </CardBody>
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <ClipboardDocumentCheckIcon className="w-32 h-32 text-blue-gray-400" />
          </div>
        </Card>


        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          {data?.untakenCourses && data?.untakenCourses.length > 0 && (
            <Courses courses={data?.untakenCourses} handleBuyCourse={handleBuyCourse} />
          )}
        </div>
      </div>

      <Dialog
        open={openDialog}
        onRequestClose={() => {
          setOpenDialog(false)
        }}
        contentLabel="Previsualización de Archivo"
      >
        <DialogBody className='h-[30rem] overflow-scroll'>
          <PayPalComponent course={selectedCourse} user={auth.user} clientId={clientId} password={null} />
        </DialogBody>
        <DialogFooter>
          <Button onClick={() => { setOpenDialog(false) }}>Cancelar</Button>
        </DialogFooter>
      </Dialog>
    </AuthenticatedLayout>
  );
}
