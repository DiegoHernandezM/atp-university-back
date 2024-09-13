import React, { useState, useEffect } from 'react';
import { Button, Input, Alert, IconButton, Tooltip, Typography, Card, CardBody, CardHeader, CardFooter } from '@material-tailwind/react';
import { MagnifyingGlassIcon, PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/solid';

import AdministratorsForm from '../Forms/AdministratorForm';


const AdministratorsTable = ({ users }) => {
  const [search, setSearch] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  // Filtrar usuarios por búsqueda
  useEffect(() => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [search, users]);

  // Calcular los usuarios actuales en la página
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Cambiar página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleOpenDrawer = () => setOpenDrawer(true);

  const handleCloseDrawer = () => {
    setCurrentUser(null);
    setOpenDrawer(false)
  };

  const handleFormSuccess = (message) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  const handleEditClick = (user) => {
    setCurrentUser(user);
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
                Lista de Administradores
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Administra tus usuarios a continuación
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
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">Nombre</th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">Correo</th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user, index) => (
                <tr key={user.id}>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <Typography className="font-bold">{user.name}</Typography>
                    </div>
                  </td>
                  <td className="p-4">{user.email}</td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <Tooltip content="Editar">
                        <IconButton variant="text" onClick={() => handleEditClick(user)}>
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      <form method="POST" action={route('administrators.destroy', user.id)} onSubmit={(e) => {
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
          <Button variant="outlined" size="sm" onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(filteredUsers.length / usersPerPage)}>Siguiente</Button>
        </CardFooter>
      </Card>
      <AdministratorsForm open={openDrawer} onClose={handleCloseDrawer} onSuccess={handleFormSuccess} currentUser={currentUser} />
    </>

  );
};

export default AdministratorsTable;
