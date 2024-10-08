import React, { useState, useEffect } from "react";
import {
  Input,
  Button,
  Dialog,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
  Card,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useForm } from '@inertiajs/inertia-react';


export default function ResourcesDialog({ open, onClose, currentLesson, subject }) {
  const { post, reset } = useForm();
  // Estado para manejar los recursos
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(false);

  // Al abrir el Dialog, cargar los recursos existentes
  useEffect(() => {
    if (currentLesson?.resources) {
      setResources(currentLesson.resources);
    } else {
      // Si no hay recursos, inicializamos con un recurso vacío
      setResources([{ title: '', type: '', file: null }]);
    }
  }, [currentLesson]);

  // Función para agregar un nuevo recurso (Card)
  const handleAddResource = () => {
    setResources([...resources, { title: '', type: '', file: null }]);
  };

  // Función para eliminar un recurso
  const handleRemoveResource = (index) => {
    const updatedResources = resources.filter((_, i) => i !== index);
    setResources(updatedResources);
  };

  // Función para actualizar los valores de un recurso
  const handleResourceChange = (index, field, value) => {
    const updatedResources = [...resources];
    // Si el valor es un evento (input o select), extraer el valor
    if (value && value.target) {
      updatedResources[index][field] = value.target.value;
    } else {
      updatedResources[index][field] = value;
    }
    setResources(updatedResources);
  };

  const handleSaveResources = (e) => {
    e.preventDefault();

    const formData = new FormData();
    console.log(resources);
    // Añadir el ID de la lección
    formData.append('lesson_id', currentLesson.id);
    //formData.append('resources', JSON.stringify(landingData.section4_services));
    // Añadir los recursos al FormData
    // resources.forEach((resource, index) => {
    //     formData.append(`resources[${index}][title]`, resource.title);
    //     formData.append(`resources[${index}][type]`, resource.type);

    //     // Si existe un archivo, lo agregamos también
    //     if (resource.file) {
    //         formData.append(`resources[${index}][file]`, resource.file);
    //     }
    // });



    post(`/resources/store/${currentLesson.id}`, {
      data: currentLesson.id,
      preserveScroll: true,
      onFinish: () => {
        console.log('Formulario enviado con éxito');
      },
      onError: (errors) => {
        console.error(errors);
        setLoading(false);
      }
    });
};

  return (
    <Dialog size="xxl" open={open} handler={onClose} className="h-screen p-4">
      <DialogHeader className="relative m-0 block">
        <Typography variant="h4" color="blue-gray">
          Administra el contenido de la lección
        </Typography>
        <Typography className="mt-1 font-normal text-gray-600">
          {`Lección: ${currentLesson?.title}`}
        </Typography>
        <IconButton
          size="sm"
          variant="text"
          className="!absolute right-3.5 top-3.5"
          onClick={onClose}
        >
          <XMarkIcon className="h-4 w-4 stroke-2" />
        </IconButton>
      </DialogHeader>
      <DialogBody className="flex flex-col h-full space-y-4 pb-6 overflow-y-scroll">
        {/* Contenedor con scroll, limitado a la altura disponible */}
        <div className="flex-1 overflow-y-auto space-y-4 h-1/2">
          {resources.map((resource, index) => (
            <Card key={index} className="relative">
              <CardBody>
                {/* Input hidden para el ID */}
                <input
                  type="hidden"
                  name={`resources[${index}][id]`}
                  value={resource.id || ''}
                />

                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 text-left font-medium"
                  >
                    Titulo
                  </Typography>
                  <Input
                    color="gray"
                    size="lg"
                    placeholder="Ingresa el título"
                    name={`resources[${index}][title]`}
                    value={resource.title}
                    onChange={(e) => handleResourceChange(index, 'title', e.target.value)}
                    className="placeholder:opacity-100 focus:!border-t-gray-900"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                </div>
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 text-left font-medium"
                  >
                    Tipo
                  </Typography>
                  <select
                    name={`resources[${index}][type]`}
                    value={resource.type || ''}
                    onChange={(e) => handleResourceChange(index, 'type', e.target.value)}
                    className="!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-800 ring-4 ring-transparent placeholder:text-gray-600 focus:!border-primary focus:!border-t-blue-gray-900 group-hover:!border-primary"
                  >
                    <option value="">Seleccione</option>
                    <option value="pdf">PDF</option>
                    <option value="video">Video</option>
                  </select>
                </div>
                <div className="flex gap-4">
                  <div className="w-full">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 text-left font-medium"
                    >
                      Archivo
                    </Typography>
                    <input
                      type="file"
                      name={`resources[${index}][file]`}
                      onChange={(e) => handleResourceChange(index, 'file', e.target.files[0])}  // Seleccionar el primer archivo
                    />
                  </div>
                </div>
              </CardBody>
              <CardFooter>
                <Button
                  variant="text"
                  size="sm"
                  color="red"
                  onClick={() => handleRemoveResource(index)}
                >
                  Eliminar
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </DialogBody>
      <DialogFooter className="sticky bottom-0 flex justify-between space-x-2 bg-white py-4">
        {/* Botón Agregar contenido a la izquierda */}
        <Button size="sm" variant="text" className="flex items-center gap-2" onClick={handleAddResource}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.75v14.5m7.25-7.25h-14.5"
            />
          </svg>
          Agregar contenido
        </Button>

        {/* Botones Guardar y Cancelar a la derecha */}
        <div className="flex space-x-2">
          <Button onClick={handleSaveResources}>
            Guardar
          </Button>
          <Button onClick={onClose}>
            Cancelar
          </Button>
        </div>
      </DialogFooter>
    </Dialog>
  );
}
