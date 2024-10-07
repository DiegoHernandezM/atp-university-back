import React, { useState, useEffect } from "react";
import {
  Input,
  Option,
  Select,
  Button,
  Dialog,
  Textarea,
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

export default function ResourcesDialog({ open, onClose, currentLesson, subject }) {
  // Estado para manejar los recursos
  const [resources, setResources] = useState([]);

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
    updatedResources[index][field] = value;
    setResources(updatedResources);
  };

  return (
    <Dialog size="xxl" open={open} handler={onClose} className="p-4">
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

      <DialogBody className="space-y-4 pb-6">
        {resources.map((resource, index) => (
          <Card key={index} className="relative">
            <CardBody>
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
                  name="title"
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
                <Select
                  className="!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-800 ring-4 ring-transparent placeholder:text-gray-600 focus:!border-primary focus:!border-t-blue-gray-900 group-hover:!border-primary"
                  placeholder="1"
                  labelProps={{
                    className: "hidden",
                  }}
                  value={resource.type}
                  onChange={(e) => handleResourceChange(index, 'type', e)}
                >
                  <Option>PDF</Option>
                  <Option>Video</Option>
                </Select>
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
                    name="file"
                    onChange={(e) => handleResourceChange(index, 'file', e.target.files[0])}
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
      </DialogBody>

      <DialogFooter className="flex justify-end space-x-2">
        <Button onClick={onClose}>
          Guardar
        </Button>
        <Button onClick={onClose}>
          Cancelar
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
