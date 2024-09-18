import React, { useState, useEffect } from "react";
import { Drawer, Button, Input, IconButton } from "@material-tailwind/react";
import { useForm } from '@inertiajs/react'; // Importa useForm desde Inertia
import InputError from '@/Components/InputError';

const StudentsForm = ({ open, onClose, onSuccess, currentStudent }) => {
    const isEditing = !!currentStudent;
    const { data, setData, post, reset, errors, put } = useForm({
        name: '',
        f_surname: '',
        m_surname: '',
        email: '',
        gender: '',
        phone: '',
        address: '',
        zip_code: '',
        city: '',
        country: ''
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isEditing) {
            setData({
                name: currentStudent.name,
                f_surname: currentStudent.f_surname,
                m_surname: currentStudent.m_surname,
                email: currentStudent.user.email,
                gender: currentStudent.gender,
                phone: currentStudent.phone,
                address: currentStudent.address,
                zip_code: currentStudent.zip_code,
                city: currentStudent.city,
                country: currentStudent.country,
            });
        } else {
            reset();
        }
    }, [currentStudent, isEditing]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        if (isEditing) {
            // Si estamos editando, hacemos un PUT o PATCH
            put(route('students.update', currentStudent.id), {
                ...data,
                onSuccess: () => {
                    setLoading(false);
                    onSuccess("Estudiante actualizado correctamente.");
                    onClose();
                },
                onError: (errors) => {
                    console.error(errors);
                    setLoading(false);
                }
            });
        } else {
            post(route('students.store'), {
                onSuccess: () => {
                    setLoading(false);
                    reset();
                    onSuccess("Estudiante creado correctamente.");
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
                        {isEditing ? "Editar Estudiante" : "Agregar Nuevo Estudiante"}
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
                                id="name"
                                name="name"
                                value={data.name}
                                type="text"
                                size="lg"
                                label="Nombre"
                                placeholder="Nombre"
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                onChange={(e) => setData('name', e.target.value)}
                            />
                            {errors.name && <InputError message={errors.name} className="mt-2" />}
                        </div>
                        <div className="mb-4">
                            <Input
                                id="f_surname"
                                name="f_surname"
                                value={data.f_surname}
                                type="text"
                                size="lg"
                                label="A. Paterno"
                                placeholder="A. Paterno"
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                onChange={(e) => setData('f_surname', e.target.value)}
                            />
                            {errors.f_surname && <InputError message={errors.f_surname} className="mt-2" />}
                        </div>
                        <div className="mb-4">
                            <Input
                                id="m_surname"
                                name="m_surname"
                                value={data.m_surname}
                                type="text"
                                size="lg"
                                label="A. Materno"
                                placeholder="A. Materno"
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                onChange={(e) => setData('m_surname', e.target.value)}
                            />
                            {errors.m_surname && <InputError message={errors.m_surname} className="mt-2" />}
                        </div>
                        <div className="mb-4">
                            <Input
                                id="email"
                                name="email"
                                value={data.email}
                                type="email"
                                size="lg"
                                label="Correo Electrónico"
                                placeholder="ejemplo@correo.com"
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                onChange={(e) => setData('email', e.target.value)} // Actualiza el campo de email
                            />
                            {errors.email && <InputError message={errors.email} className="mt-2" />} {/* Muestra error si existe */}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                                Género
                            </label>
                            <select
                                id="gender"
                                name="gender"
                                value={data.gender}
                                onChange={(e) => setData('gender', e.target.value)}
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-blue-gray-200 focus:border-gray-900 focus:outline-none focus:ring-indigo-500 sm:text-sm rounded-md"
                            >
                                <option value="">Seleccione género</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                                <option value="Otro">Otro</option>
                            </select>
                            {errors.gender && <InputError message={errors.gender} className="mt-2" />}
                        </div>
                        <div className="mb-4">
                            <Input
                                id="phone"
                                name="phone"
                                value={data.phone}
                                type="text"
                                size="lg"
                                label="Telefono"
                                placeholder="Telefono"
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                onChange={(e) => setData('phone', e.target.value)}
                            />
                            {errors.phone && <InputError message={errors.phone} className="mt-2" />}
                        </div>
                        <div className="mb-4">
                            <Input
                                id="address"
                                name="address"
                                value={data.address}
                                type="text"
                                size="lg"
                                label="Direccion"
                                placeholder="Direccion"
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                onChange={(e) => setData('address', e.target.value)}
                            />
                            {errors.address && <InputError message={errors.address} className="mt-2" />}
                        </div>
                        <div className="mb-4">
                            <Input
                                id="zip_code"
                                name="zip_code"
                                value={data.zip_code}
                                type="text"
                                size="lg"
                                label="CP"
                                placeholder="CP"
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                onChange={(e) => setData('zip_code', e.target.value)}
                            />
                            {errors.zip_code && <InputError message={errors.zip_code} className="mt-2" />}
                        </div>
                        <div className="mb-4">
                            <Input
                                id="city"
                                name="city"
                                value={data.city}
                                type="text"
                                size="lg"
                                label="Ciudad"
                                placeholder="Ciudad"
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                onChange={(e) => setData('city', e.target.value)}
                            />
                            {errors.city && <InputError message={errors.city} className="mt-2" />}
                        </div>
                        <div className="mb-4">
                            <Input
                                id="country"
                                name="country"
                                value={data.country}
                                type="text"
                                size="lg"
                                label="Pais"
                                placeholder="Pais"
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                onChange={(e) => setData('country', e.target.value)}
                            />
                            {errors.country && <InputError message={errors.country} className="mt-2" />}
                        </div>
                        <Button type="submit" color="blue-gray" fullWidth disabled={loading}>
                            {loading ? "Enviando..." : isEditing ? "Actualizar Estudiante" : "Crear Estudiante"}
                        </Button>
                    </form>
                </div>
            </Drawer>
        </React.Fragment>
    );
};

export default StudentsForm;
