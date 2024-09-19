import React, { useState } from "react";
import { Dialog, DialogBody, DialogHeader, Button, Typography, dialog } from "@material-tailwind/react";
import { CalendarDateRangeIcon } from "@heroicons/react/24/outline";
import CoursesLandingTable from "../Tables/CoursesLandingTable";
export default function ServicesLandingDialog({ open, onClose, selectedService }) {
  const [openSecondaryDialog, setOpenSecondaryDialog] = useState(false);

  const handleOpenSecondaryDialog = () => setOpenSecondaryDialog(!openSecondaryDialog);
  const handleCloseSecondaryDialog = () => setOpenSecondaryDialog(false);

  return (
    <Dialog open={open} size="lg" handler={onClose} className="bg-gradient-to-b from-[#EEEEEE] to-[#E0E0E0]">
      <DialogHeader className="relative">
        {/* Capa del fondo con opacidad */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url('/storage/images/atp-mision.jpg')` }}
        ></div>

        {/* Barra blanca opaca detrás del título */}
        <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 bg-white opacity-50 h-40"></div>

        {/* Texto que sobresale */}
        <div className="relative z-10 p-20">
          <Typography
            variant="h1"
            className="text-white"
            style={{ fontSize: '5rem', color: '#2196F3' }}
          >
            {selectedService?.title}
          </Typography>
        </div>
      </DialogHeader>


      <DialogBody divider>
        <p>{selectedService?.description}</p>
        <Typography variant="h4" style={{ color: 'black' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed enim quis est varius rutrum. Vestibulum ornare elit dolor, eget rutrum nulla rutrum et. Nullam finibus tincidunt feugiat. Phasellus quis ullamcorper massa, in ornare enim. In interdum volutpat magna in lacinia. Morbi arcu felis, venenatis non erat nec, porttitor consectetur enim. Proin sit amet mollis eros. Quisque id fringilla ipsum. Phasellus convallis augue ac dui venenatis sodales.
        </Typography>
        <div className="flex justify-center space-x-12 mt-8">
          {/* Botón 1 - Enlace */}
          <div className="flex flex-col items-center">
            <a
              href="/aplicacion"
              className="bg-transparent w-24 h-24 rounded-full border-2 border-gray-400 flex items-center justify-center text-center text-blue-800 hover:text-white hover:bg-blue-400 transition-colors"
            >
              Aplicación
            </a>
            <span className="text-blue-800 font-bold mt-4">Aplicación</span>
          </div>

          {/* Botón 2 - Abre diálogo secundario */}
          <div className="flex flex-col items-center">
            <button
              onClick={handleOpenSecondaryDialog}  // La función que abre el Dialog
              className="bg-transparent w-24 h-24 rounded-full border-2 border-gray-400 flex items-center justify-center text-center text-blue-800 hover:text-white hover:bg-blue-400 transition-colors"
            >
              {/* Icono de calendario */}
              <CalendarDateRangeIcon className="h-10 w-10" />
            </button>
            <span className="text-blue-800 font-bold mt-4">Calendario</span>
          </div>

          {/* Botón 3 - WhatsApp */}
          <div className="flex flex-col items-center">
            <a
              href="https://wa.me/1234567890" // Coloca tu número de WhatsApp aquí
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent w-24 h-24 rounded-full border-2 border-gray-400 flex items-center justify-center text-center text-blue-800 hover:text-white hover:bg-blue-400 transition-colors"
            >
              <img
                src="/storage/wp.png" // Asegúrate de tener el ícono de WhatsApp
                alt="WhatsApp"
                className="w-full h-full object-contain rounded-full"
              />
            </a>
            <span className="text-blue-800 font-bold mt-4">Información</span>
          </div>
        </div>

        <Dialog open={openSecondaryDialog} size="sm" handler={handleOpenSecondaryDialog} className="bg-gradient-to-b from-gray-100 to-white">
          <CoursesLandingTable />
        </Dialog>
      </DialogBody>

    </Dialog>
  );
}
