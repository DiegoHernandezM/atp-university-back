import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import {Head, Link, useForm} from '@inertiajs/react';
import {Typography} from "@material-tailwind/react";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'), {
            onFinish: () => reset('email')
        });
    };

    return (
        <GuestLayout>
            <Head title="Recuperar Contraseña" />

            <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                ¿Olvidaste tu contraseña? No hay problema. Simplemente déjanos saber tu dirección de correo electrónico  y te enviaremos unas nuevas credenciales de acceso.
            </div>

            {status && (
                <div className={`mb-4 font-medium text-sm ${status.error ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>
                    {status.message}
                </div>
            )}

            <form onSubmit={submit}>
                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    required
                    isFocused={true}
                    onChange={(e) => setData('email', e.target.value)}
                />

                <InputError message={errors.email} className="mt-2" />

                <div className="flex items-center justify-end mt-4">
                    <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
                        <Link href="/login" className="text-gray-700 ml-1">Inicia sesión</Link>
                    </Typography>
                    <PrimaryButton className="ms-4" disabled={processing}>
                        Enviar
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
