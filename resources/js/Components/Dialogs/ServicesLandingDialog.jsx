import React, { useState } from "react";
import { Dialog, DialogBody, DialogHeader, DialogFooter, Typography, IconButton } from "@material-tailwind/react";
import { CalendarDateRangeIcon, CursorArrowRippleIcon } from "@heroicons/react/24/outline";
import CoursesLandingTable from "../Tables/CoursesLandingTable";

export default function ServicesLandingDialog({ open, onClose, selectedService, isPrev }) {
  const [openSecondaryDialog, setOpenSecondaryDialog] = useState(false);

  const handleOpenSecondaryDialog = () => setOpenSecondaryDialog(!openSecondaryDialog);
  const handleCloseSecondaryDialog = () => setOpenSecondaryDialog(false);

  return (
    <Dialog open={open} size="xxl" handler={onClose} className="bg-gradient-to-b from-[#B0B0B0] to-[#EEEEEE] relative">
      <div className="absolute top-2 right-2 z-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-3 h-10 w-10 cursor-pointer hover:scale-110 transition-transform duration-200"
          onClick={onClose}
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <DialogHeader className="relative">
        {/* Fondo con opacidad */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{   backgroundImage: isPrev ? `url(${selectedService?.background_image?.url})` : `url(/storage/images/${selectedService?.background_image?.url})`}}
        ></div>

        {/* Barra blanca opaca detrás del título */}
        <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 bg-white opacity-50 h-16 sm:h-20 lg:h-24 xl:h-32"></div>

        {/* Título */}
        <div className="relative z-10 p-4 sm:p-6 lg:p-8">
          <Typography
            variant="h1"
            className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl"
            style={{ color: '#203764' }}
          >
            {selectedService?.title || ''}
          </Typography>
        </div>
      </DialogHeader>

      {/* Cuerpo del diálogo con scroll */}
      <DialogBody divider className="overflow-auto max-h-[70vh] p-4 sm:p-6 lg:p-8 mt-20">
        {/* Texto principal */}
        <Typography
          variant="h2"
          className="text-black text-base sm:text-lg lg:text-xl"
        >
          {selectedService?.title || ''}
        </Typography>

        {/* Texto adicional */}
        <Typography
          variant="h1"
          className="text-black text-sm sm:text-base lg:text-xl mt-10 mb-20"
        >
          {selectedService?.description || ''}
        </Typography>
        {/* Diálogo secundario */}
        <Dialog open={openSecondaryDialog} size="sm" handler={handleOpenSecondaryDialog} className="bg-gradient-to-b from-gray-100 to-white">
          <CoursesLandingTable />
        </Dialog>
      </DialogBody>
      <DialogFooter className="flex justify-center space-x-2 mt-20">
        {/* Botones */}
        <div className="flex justify-center space-x-4 sm:space-x-6 lg:space-x-10 mt-6 sm:mt-8 lg:mt-10">
          {/* Botón 1 - Enlace */}
          <div className="flex flex-col items-center">
            <a
              href={selectedService?.link || "/"}
              className="shadow-xl shadow-gray-500/50 bg-[#E0E0E0] w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full border-2 border-gray-400 flex items-center justify-center text-center text-blue-800 hover:text-white hover:bg-[#203764] transition-colors"
            >
              <CursorArrowRippleIcon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
            </a>
            <span className="text-[#203764] font-bold mt-2 text-sm sm:text-lg lg:text-xl">Aplicación</span>
          </div>

          {/* Botón 2 - Abre diálogo secundario */}
          <div className="flex flex-col items-center">
            <button
              onClick={handleOpenSecondaryDialog}
              className="shadow-xl shadow-white-500/50 bg-[#E0E0E0] w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full border-2 border-gray-400 flex items-center justify-center text-center text-blue-800 hover:text-white hover:bg-[#203764] transition-colors"
            >
              <CalendarDateRangeIcon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
            </button>
            <span className="text-[#203764] font-bold mt-2 text-sm sm:text-lg lg:text-xl">Calendario</span>
          </div>

          {/* Botón 3 - WhatsApp */}
          <div className="flex flex-col items-center">
            <a
              href={`https://wa.me/${selectedService?.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shadow-xl shadow-gray-500/50 bg-[#E0E0E0] w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full border-2 border-gray-400 flex items-center justify-center text-center text-blue-800 hover:text-white hover:bg-[#203764] transition-colors"
            >
              <img
                src="/storage/wp.png"
                alt="WhatsApp"
                className="w-full h-full object-contain rounded-full"
              />
            </a>
            <span className="text-[#203764] font-bold mt-2 text-sm sm:text-lg lg:text-xl">Información</span>
          </div>
        </div>
      </DialogFooter>
    </Dialog>
  );
}
