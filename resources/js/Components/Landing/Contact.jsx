import React, { useState } from "react";
import { useForm } from '@inertiajs/react'; // Importa useForm desde Inertia
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
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
      },
      onError: (errors) => {
        console.error(errors);
        setLoading(false);
      }
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#203764] to-[#203764] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">¿Quieres más información de nuestros servicios?</h2>
        <p className="text-md mb-8">Contáctanos completando el formulario y te responderemos pronto.</p>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Formulario de contacto (8 columnas en dispositivos grandes) */}
          <div className="col-span-12 md:col-span-8 bg-white p-8 rounded-lg shadow-lg text-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <InputLabel htmlFor="name" value="Nombre" />
                <TextInput
                  id="name"
                  className="mt-1 block w-full"
                  value={data.name}
                  onChange={(e) => setData('name', e.target.value)}
                  required
                  isFocused
                  autoComplete="name"
                />
                {errors.name && <InputError message={errors.name} className="mt-2" />}
              </div>
              <div>
                <InputLabel htmlFor="email" value="Correo" />
                <TextInput
                  id="email"
                  type="email"
                  className="mt-1 block w-full"
                  value={data.email}
                  onChange={(e) => setData('email', e.target.value)}
                  required
                  autoComplete="username"
                />
                {errors.email && <InputError message={errors.email} className="mt-2" />}
              </div>
              <div>
                <InputLabel htmlFor="school" value="Escuela" />
                <TextInput
                  id="school"
                  className="mt-1 block w-full"
                  value={data.school}
                  onChange={(e) => setData('school', e.target.value)}
                  required
                  isFocused
                  autoComplete="school"
                />
                {errors.school && <InputError message={errors.school} className="mt-2" />}
              </div>
              <div>
                <textarea
                  id="message"
                  name="message"
                  value={data.message}
                  onChange={(e) => setData('message', e.target.value)}
                  rows="6"
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm md:text-base"
                />
                {errors.message && <InputError message={errors.message} className="mt-2" />}
              </div>
              <div className="flex items-center gap-4">
                <Button type="submit" color="blue-gray" fullWidth disabled={loading}>
                  Enviar mensaje
                </Button>
              </div>
            </form>
          </div>

          {/* Información de contacto (4 columnas en dispositivos grandes) */}
          <div className="col-span-12 md:col-span-4 text-white">
            <div className="bg-white p-8 rounded-lg shadow-lg text-gray-700">
              <div className="mb-6">
                <img src={`/storage/images/logo.png`} alt="Logo" className="mx-auto h-20 w-25" /> {/* Ajusta el tamaño del logo según sea necesario */}
              </div>
              <h3 className="text-xl font-bold mb-4">Información de contacto</h3>
              <ul className="space-y-4">
                <li>
                  <p className="font-medium">Dirección</p>
                  <p>Aqui va la dirección</p>
                </li>
                <li>
                  <p className="font-medium">Teléfono</p>
                  <p>+1 123 456 1234</p>
                </li>
                <li>
                  <p className="font-medium">Correo</p>
                  <p>info@aviationinsigth.net</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
