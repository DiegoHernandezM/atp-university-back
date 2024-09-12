import React, { useState } from "react";
import { Drawer, Button, Input } from "@material-tailwind/react";
import { useForm } from '@inertiajs/react'; // Importa useForm desde Inertia
import InputError from '@/Components/InputError';


const AdministratorsForm = ({ open, onClose, onSuccess }) => {
  const { data, setData, post, reset, errors } = useForm({
    name: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

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
  };

  return (
    <React.Fragment>
      <Drawer placement="right" open={open} onClose={onClose} className="p-4" size={500}>
        <div className="p-4">
          <h3 className="text-lg font-bold">Agregar Nuevo Administrador</h3>
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
              {loading ? "Enviando..." : "Crear Administrador"}
            </Button>
          </form>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default AdministratorsForm;
