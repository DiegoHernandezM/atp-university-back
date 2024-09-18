import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Typography
} from "@material-tailwind/react";

export default function ContactDialog({ open, onClose, currentPerson }) {
  return (
    <Dialog open={open} size="md" handler={onClose}>
      <div className="flex items-center justify-between">
        <DialogHeader className="flex flex-col items-start">
          {" "}
          <Typography className="mb-1" variant="h4">
            Nombre: {currentPerson?.name}
          </Typography>
        </DialogHeader>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-3 h-5 w-5"
          onClick={onClose}
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <DialogBody>
        <div className="grid gap-6">
          <Typography className="-mb-1" color="blue-gray" variant="h6">
            Datos generales
          </Typography>
          <Input value={currentPerson?.country} label="País" readOnly />
          <Input value={currentPerson?.city} label="Ciudad" readOnly />
          <Input value={currentPerson?.email} label="Correo" readOnly />
          <Input value={currentPerson?.school} label="Escuela" readOnly />
          <Textarea value={currentPerson?.message} label="Message" readOnly />
        </div>
      </DialogBody>
      <DialogFooter className="space-x-2">
        <Button variant="gradient" color="gray" onClick={onClose}>
          Cerrar
        </Button>
        <Button
          variant="gradient"
          color="gray"
          onClick={() => window.location.href = `mailto:${currentPerson.email}?subject=Tu Asunto&body=Escribe tu mensaje aquí`}
        >
          Responder
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
