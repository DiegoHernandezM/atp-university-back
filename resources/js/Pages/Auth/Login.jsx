import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import InputError from '@/Components/InputError';

import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
      email: '',
      password: '',
      remember: false,
  });

  const submit = (e) => {
      e.preventDefault();
      post(route('login'), {
          onFinish: () => reset('password'),
      });
  };

  return (
    <section className="m-8 flex gap-4">
    <div className="w-full lg:w-3/5 mt-24">
      {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
      <div className="text-center">
        <Typography variant="h2" className="font-bold mb-4">Iniciar Sesión</Typography>
        <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Ingresa tus credenciales</Typography>
      </div>
      <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2" onSubmit={submit}>
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
            Correo
          </Typography>
          <Input
            id="email"
            type="email"
            name="email"
            value={data.email}
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e) => setData('email', e.target.value)}
          />
          <InputError message={errors.email} className="mt-2" />
          <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
            Contraseña
          </Typography>
          <Input
            id="password"
            name="password"
            value={data.password}
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e) => setData('password', e.target.value)}
          />
          <InputError message={errors.password} className="mt-2" />
        </div>
        <Button type="submit" className="mt-6" fullWidth disabled={processing}>
          Enviar
        </Button>
        <div className="flex items-center justify-between gap-2 mt-6">
          <Typography variant="small" className="font-medium text-gray-900">
            <a href="/forgot-password">
              Olvide mí contraseña
            </a>
          </Typography>
        </div>

        <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
          No estas registrado?
          <Link href="/#courses" className="text-gray-900 ml-1">Crear una cuenta</Link>
        </Typography>
      </form>

    </div>
    <div className="w-2/5 h-auto hidden lg:block">
      <img
        src="images/auth/pattern.png"
        className="w-full object-cover rounded-3xl"
        style={{ height: '90%' }}
      />
    </div>

  </section>
  );
}
