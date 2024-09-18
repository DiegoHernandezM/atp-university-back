import React, { useState, useEffect } from 'react';
import { Button, Input, Alert, IconButton, Tooltip, Typography, Card, CardBody, CardHeader, CardFooter } from '@material-tailwind/react';
import { MagnifyingGlassIcon, EyeIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/solid';


const AdministratorRequestTable = ({ informationRequests }) => {
  const [search, setSearch] = useState('');
  const [filteredPersons, setFilteredPersons] = useState(informationRequests);
  const [currentPage, setCurrentPage] = useState(1);
  const [personsPerPage] = useState(5);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [currentPerson, setCurrentPerson] = useState(null);

  // Filtrar usuarios por búsqueda
  useEffect(() => {
    const filtered = informationRequests.filter((person) =>
      person.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredPersons(filtered);
  }, [search, informationRequests]);

  // Calcular los usuarios actuales en la página
  const indexOfLastPerson = currentPage * personsPerPage;
  const indexOfFirstPerson = indexOfLastPerson - personsPerPage;
  const currentPersons = filteredPersons.slice(indexOfFirstPerson, indexOfLastPerson);

  // Cambiar página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleOpenDrawer = () => setOpenDrawer(true);

  const handleCloseDrawer = () => {
    setCurrentPerson(null);
    setOpenDrawer(false)
  };

  const handleFormSuccess = (message) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  const handleEditClick = (person) => {
    setCurrentPerson(person);
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
                Lista de solicitudes de información
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Administra las solicitudes a continuación
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
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">Nombre</th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">Correo</th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">Escuela</th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">País</th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">Ciudad</th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {currentPersons.map((user, index) => (
                <tr key={user.id}>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <Typography className="font-bold">{user.name}</Typography>
                    </div>
                  </td>
                  <td className="p-4">{user.email}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <Typography className="font-bold">{user.school}</Typography>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <Typography className="font-bold">{user.country}</Typography>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <Typography className="font-bold">{user.city}</Typography>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <Tooltip content="Ver">
                        <IconButton variant="text" onClick={() => handleEditClick(user)}>
                          <EyeIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      <form method="POST" action={route('contacts.destroy', user.id)} onSubmit={(e) => {
                        if (!window.confirm(`¿Estás seguro que deseas eliminar a ${user.name}?`)) {
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
          <Button variant="outlined" size="sm" onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(filteredPersons.length / personsPerPage)}>Siguiente</Button>
        </CardFooter>
      </Card>
    </>

  );
};

export default AdministratorRequestTable;
