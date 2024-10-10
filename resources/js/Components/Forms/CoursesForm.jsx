import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Drawer, Button, Input, IconButton, Textarea } from "@material-tailwind/react";
import { useForm, router } from '@inertiajs/react'; // Importa useForm desde Inertia
import InputError from '@/Components/InputError';

const CoursesForm = ({ open, onClose, onSuccess, currentCourse }) => {
  const isEditing = !!currentCourse;
  const { data, setData, post, reset, errors, put } = useForm({
    title: '',
    description: '',
    price: '',
    file: null,  // Agregamos el archivo como parte del estado
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isEditing) {
      setData({
        title: currentCourse.title,
        description: currentCourse.description,
        price: currentCourse.price,
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
    formData.append('description', data.description);
    formData.append('price', data.price);

    // Si se seleccionó un archivo, lo añadimos
    if (data.file) {
      formData.append('file', data.file);
    }

    if (isEditing) {

      axios.put(`/courses/update/${currentCourse.id}`, null, {
        params: {
          title: data.title,
          description: data.description,
          price: data.price,
          file: data.file
        },
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then((response) => {
          setLoading(false);
          onSuccess("Curso actualizado correctamente.");
          onClose();
        })
        .then(() => {
          setTimeout(() => {
            window.location.href = route('courses.index');
          }, 2000);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
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
