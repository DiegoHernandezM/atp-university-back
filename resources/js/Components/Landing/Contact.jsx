import React, { useState } from "react";
import { useForm } from '@inertiajs/react'; // Importa useForm desde Inertia
import InputError from '@/Components/InputError';
import { Button, Input, Alert } from "@material-tailwind/react";

export default function Contact() {
  const { data, setData, post, reset, errors } = useForm({
    name: '',
    email: '',
    school: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    post(route('contact.store'), {
      onSuccess: () => {
        setLoading(false);
        reset();
        setSuccessMessage("Mensaje enviado.");
        setTimeout(() => setSuccessMessage(null), 3000);
        onClose();
      },
      onError: (errors) => {
        console.error(errors);
        setLoading(false);
      }
    });
  };
  return (
    <section id="contact" className="contact-section py-20 bg-blue-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">¿Quieres más información de nuestros servicios?</h2>
        <p className="text-xl mb-6">Contáctanos completando el formulario y te responderemos pronto.</p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md text-gray-700">
          {successMessage && <Alert color="green">{successMessage}</Alert>}
          <div className="mb-6">
            <img src={`/storage/images/logo.png`} alt="Logo" className="mx-auto h-20 w-25" /> {/* Ajusta el tamaño del logo según sea necesario */}
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-left mb-2">Nombre</label>
            <Input
              id="name"
              name="name"
              value={data.name}
              type="text"
              size="lg"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setData('name', e.target.value)}
            />
            {errors.name && <InputError message={errors.name} className="mt-2" />}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-left mb-2">Correo Electrónico</label>
            <Input
              id="email"
              name="email"
              value={data.email}
              type="email"
              size="lg"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setData('email', e.target.value)} // Actualiza el campo de email
            />
            {errors.email && <InputError message={errors.email} className="mt-2" />}
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-left mb-2">Escuela</label>
            <Input
              id="school"
              name="school"
              value={data.school}
              type="text"
              size="lg"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setData('school', e.target.value)}
            />
            {errors.name && <InputError message={errors.school} className="mt-2" />}
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-left mb-2">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={data.message}
              onChange={(e) => setData('message', e.target.value)}
              rows="4"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {errors.message && <InputError message={errors.message} className="mt-2" />}
          </div>
          <Button type="submit" color="blue-gray" fullWidth disabled={loading}>
            Enviar
          </Button>
        </form>
      </div>
    </section>
  );
}
