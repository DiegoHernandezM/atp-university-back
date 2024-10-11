import React, { useState, useEffect } from "react";
import { Drawer, Button, Input, IconButton, Textarea } from "@material-tailwind/react";
import { useForm } from '@inertiajs/react'; // Importa useForm desde Inertia
import InputError from '@/Components/InputError';

const CoursesForm = ({ open, onClose, onSuccess, currentCourse }) => {
  const isEditing = !!currentCourse;
  const { data, setData, post, reset, errors } = useForm({
    title: '',
    description: '',
    price: '',
    status: '',
    cover: null,
    file: null,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isEditing) {
      setData({
        title: currentCourse.title,
        description: currentCourse.description,
        price: currentCourse.price,
        status: currentCourse.status,
        cover: null,
        file: null,  // Reiniciar el archivo al editar
      });
    } else {
      reset();
    }
  }, [currentCourse, isEditing]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();

    // Agregar datos al formData
    formData.append('title', data.title);
    formData.append('status', data.status);
    formData.append('description', data.description);
    formData.append('price', data.price);

    // Si se seleccionó un archivo, lo añadimos
    if (data.file) {
      formData.append('file', data.file);
    }
    if (data.cover) {
      formData.append('cover', data.cover);
    }

    if (isEditing) {
      post(route('courses.update', currentCourse.id), {
        data: formData,  // Usamos formData
        onSuccess: () => {
          setLoading(false);
          reset();
          onSuccess("Curso actualizado correctamente.");
          onClose();
        },
        onError: (errors) => {
          console.error(errors);
          setLoading(false);
        }
      });
    } else {
      post(route('courses.store'), {
        data: formData,  // Usamos formData
        onSuccess: () => {
          setLoading(false);
          reset();
          onSuccess("Curso creado correctamente.");
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
            {isEditing ? "Editar Curso" : "Agregar Nuevo Curso"}
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
        <div className="p-4 h-[calc(100vh-100px)] overflow-y-auto">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Input
                id="title"
                name="title"
                value={data.title}
                type="text"
                size="lg"
                label="Nombre"
                placeholder="Nombre"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={(e) => setData('title', e.target.value)}
              />
              {errors.title && <InputError message={errors.title} className="mt-2" />}
            </div>
            <div className="mb-4">
              <Textarea
                id="description"
                name="description"
                value={data.description}
                size="lg"
                placeholder="Descripción"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={(e) => setData('description', e.target.value)}
              />
              {errors.description && <InputError message={errors.description} className="mt-2" />}
            </div>
            <div className="mb-4">
              <Input
                id="price"
                name="price"
                value={data.price}
                type="text"
                size="lg"
                label="Precio ($)"
                placeholder="Precio ($)"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={(e) => setData('price', e.target.value)}
              />
              {errors.price && <InputError message={errors.price} className="mt-2" />}
            </div>
            <div className="mb-4">
              <label htmlFor="cover" className="block text-sm font-medium text-gray-700 mb-2">
                Agrega una imagen para portada del curso (.jpg)
              </label>
              <input
                type="file"
                id="cover"
                name="cover"
                accept=".jpg,.jpeg"
                onChange={(e) => setData('cover', e.target.files[0])}  // Usamos e.target.files[0] para obtener el archivo
              />
              {errors.cover && <InputError message={errors.cover} className="mt-2" />}
            </div>
            <div className="mb-4">
              <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-2">
                Agrega video o PDF de presentación para el curso
              </label>
              <input
                type="file"
                id="file"
                name="file"
                accept=".pdf,.mp4"
                onChange={(e) => setData('file', e.target.files[0])}  // Usamos e.target.files[0] para obtener el archivo
              />
              {errors.file && <InputError message={errors.file} className="mt-2" />}
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                Esatdo
              </label>
              <select
                id="status"
                name="status"
                value={data.status}
                onChange={(e) => setData('status', e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-blue-gray-200 focus:border-gray-900 focus:outline-none focus:ring-indigo-500 sm:text-sm rounded-md"
              >
                <option value="">Seleccione</option>
                <option value="active">Activo</option>
                <option value="inactive">Inactivo</option>
              </select>
              {errors.status && <InputError message={errors.status} className="mt-2" />}
            </div>
            <Button type="submit" color="blue-gray" fullWidth disabled={loading}>
              {loading ? "Enviando..." : isEditing ? "Actualizar Curso" : "Crear Curso"}
            </Button>
          </form>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default CoursesForm;
