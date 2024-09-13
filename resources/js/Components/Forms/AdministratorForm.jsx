import React, { useState, useEffect } from "react";
import { Drawer, Button, Input, IconButton } from "@material-tailwind/react";
import { useForm } from '@inertiajs/react'; // Importa useForm desde Inertia
import InputError from '@/Components/InputError';

const AdministratorsForm = ({ open, onClose, onSuccess, currentUser }) => {
  const isEditing = !!currentUser;
  const { data, setData, post, reset, errors, put } = useForm({
    name: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isEditing) {
      setData({
        name: currentUser.name,
        email: currentUser.email,
        password: '',
      });
    } else {
      reset();
    }
  }, [currentUser, isEditing]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (isEditing) {
      // Si estamos editando, hacemos un PUT o PATCH
      put(route('administrators.update', currentUser.id), {
        ...data,
        onSuccess: () => {
          setLoading(false);
          onSuccess("Administrador actualizado correctamente.");
          onClose();
        },
        onError: (errors) => {
          console.error(errors);
          setLoading(false);
        }
      });
    } else {
      post(route('administrators.store'), {
        onSuccess: () => {
          setLoading(false);
          reset();
          onSuccess("Administrador creado correctamente.");
          onClose();
        },
        onError: (errors) => {
          console.error(errors);
          setLoading(false);
        }
      });
    }
  };

  return (
    <React.Fragment>
      <Drawer placement="right" open={open} onClose={onClose} className="p-4" size={500}>
        <div className="flex items-center justify-between px-4 pb-2">
          <h3 className="text-lg font-bold">
            {isEditing ? "Editar Administrador" : "Agregar Nuevo Administrador"}
          </h3>
          <IconButton variant="text" color="blue-gray" onClick={onClose}>
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="p-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Input
                id="name"
                name="name"
                value={data.name}
                type="text"
                size="lg"
                label="Nombre"
                placeholder="Nombre del Administrador"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={(e) => setData('name', e.target.value)} // Actualiza el campo de nombre
              />
              {errors.name && <InputError message={errors.name} className="mt-2" />}
            </div>
            <div className="mb-4">
              <Input
                id="email"
                name="email"
                value={data.email}
                type="email"
                size="lg"
                label="Correo Electrónico"
                placeholder="ejemplo@correo.com"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={(e) => setData('email', e.target.value)} // Actualiza el campo de email
              />
              {errors.email && <InputError message={errors.email} className="mt-2" />} {/* Muestra error si existe */}
            </div>
            <div className="mb-4">
              <Input
                id="password"
                name="password"
                value={data.password}
                type="password"
                size="lg"
                label=" Contraseña"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={(e) => setData('password', e.target.value)} // Actualiza el campo de contraseña
              />
              {errors.password && <InputError message={errors.password} className="mt-2" />} {/* Muestra error si existe */}
            </div>
            <Button type="submit" color="blue-gray" fullWidth disabled={loading}>
              {loading ? "Enviando..." : isEditing ? "Actualizar Administrador" : "Crear Administrador"}
            </Button>
          </form>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default AdministratorsForm;
