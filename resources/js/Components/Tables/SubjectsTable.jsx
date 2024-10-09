import React, { useState, useEffect } from 'react';
import { Button, Input, Alert, IconButton, Tooltip, Typography, Card, CardBody, CardHeader, CardFooter } from '@material-tailwind/react';
import { MagnifyingGlassIcon, PencilIcon, PlusIcon, TrashIcon, XCircleIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

import SubjectsForm from '../Forms/SubjectsForm.jsx';


const SubjectsTable = ({ subjects }) => {
  const [search, setSearch] = useState('');
  const [filteredSubjects, setFilteredSubjects] = useState(subjects);
  const [currentPage, setCurrentPage] = useState(1);
  const [subjectsPerPage] = useState(5);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [currentSubjetc, setCurrentSubject] = useState(null);

  // Filtrar usuarios por búsqueda
  useEffect(() => {
    const filtered = subjects.filter((subject) =>
      subject.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredSubjects(filtered);
  }, [search, subjects]);

  // Calcular los usuarios actuales en la página
  const indexOfLastSubject = currentPage * subjectsPerPage;
  const indexOfFirstSubject = indexOfLastSubject - subjectsPerPage;
  const currentSubjects = filteredSubjects.slice(indexOfFirstSubject, indexOfLastSubject);

  // Cambiar página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleOpenDrawer = () => setOpenDrawer(true);

  const handleCloseDrawer = () => {
    setCurrentSubject(null);
    setOpenDrawer(false)
  };

  const handleFormSuccess = (message) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  const handleEditClick = (subject) => {
    setCurrentSubject(subject);
    setOpenDrawer(true);
  };

  return (
    <>
      {successMessage && <Alert color="green">{successMessage}</Alert>}
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                Lista de Materias
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Administra tus materias a continuación
              </Typography>
            </div>
            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <div className="w-full md:w-72">
                <Input
                  label="Buscar nombre"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <Button className="flex items-center gap-3" size="sm" onClick={handleOpenDrawer}>
                <PlusIcon strokeWidth={2} className="h-4 w-4" /> Nuevo
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">Título</th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">Descripción</th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">Estado</th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {currentSubjects.map((subject, index) => (
                <tr key={subject.id}>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <Typography className="font-bold">{subject.title}</Typography>
                    </div>
                  </td>
                  <td className="p-4">{subject.description}</td>
                  <td className="p-4">
                    {subject.status === 'active' ? (
                      <CheckCircleIcon className="h-4 w-4 text-green-500" /> // Ícono para activo
                    ) : (
                      <XCircleIcon className="h-4 w-4 text-red-500" /> // Ícono para inactivo
                    )}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <Tooltip content="Editar">
                        <IconButton variant="text" onClick={() => handleEditClick(subject)}>
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      <form method="POST" action={route('subjects.destroy', subject.id)} onSubmit={(e) => {
                        if (!window.confirm(`¿Estás seguro que deseas eliminar la materia: ${subject.name}?`)) {
                          e.preventDefault();
                        }
                      }}>
                        <input type="hidden" name="_token" value={document.querySelector('meta[name="csrf-token"]').getAttribute('content')} />
                        <input type="hidden" name="_method" value="DELETE" />
                        <Tooltip content="Eliminar">
                          <IconButton type="submit" variant="text" color="red">
                            <TrashIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Button variant="outlined" size="sm" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Anterior</Button>
          <Button variant="outlined" size="sm" onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(filteredSubjects.length / subjectsPerPage)}>Siguiente</Button>
        </CardFooter>
      </Card>
      <SubjectsForm open={openDrawer} onClose={handleCloseDrawer} onSuccess={handleFormSuccess} currentSubject={currentSubjetc} />
    </>

  );
};

export default SubjectsTable;
