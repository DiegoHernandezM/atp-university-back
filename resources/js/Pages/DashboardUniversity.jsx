import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { UserIcon, BookOpenIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';

import InscriptionCourses from "../Components/Charts/InscriptionCourses";
import FinancialBalance from "../Components/Charts/FinancialBalance";

export default function DashboardUniversity({ auth, data }) {
  const handleViewStudents = () => {
    window.location.href = route('students.index');
  };
  const handleViewCourses = () => {
    window.location.href = route('courses.index');
  };

  return (
    <AuthenticatedLayout user={auth.user} roles={auth.roles}>
      <Head title="Dashboard" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {/* Card: Conteo de Estudiantes */}
        <Card className="relative">
          <CardBody className="relative z-10">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Conteo de Estudiantes
            </Typography>
            <Typography variant="h1">{ data?.countStudents }</Typography>
          </CardBody>
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <UserIcon className="w-32 h-32 text-blue-gray-400" />
          </div>
          <CardFooter className="pt-0 relative z-10">
            <Button
              className="mt-4 bg-black text-white font-bold px-4 text-sm py-2 rounded"
              onClick={handleViewStudents}
            >
              Ver mis estudiantes
            </Button>
          </CardFooter>
        </Card>

        {/* Card: Conteo de Cursos */}
        <Card className="relative">
          <CardBody className="relative z-10">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Conteo de Cursos
            </Typography>
            <Typography variant="h1">{ data?.countCourses }</Typography>
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
              Ingresos totales
            </Typography>
            <Typography variant="h1">{ data?.amount }</Typography>
          </CardBody>
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <CurrencyDollarIcon className="w-32 h-32 text-blue-gray-400" />
          </div>
        </Card>

        {/* Chart: Inscription Courses */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <InscriptionCourses data={ data?.barChart ?? [] } />
        </div>

        {/* Chart: Financial Balance */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <FinancialBalance />
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
