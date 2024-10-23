import { useState } from 'react';
import { Link } from '@inertiajs/react';
import DashboardNavbar from '@/Components/Layouts/DashboardNavbar';
import DashboardSidebar from '@/Components/Layouts/DasboardSidebar';
import DashboardSidebarStudent from '@/Components/Layouts/DashboardSidebarStudent';
import Configurator from '@/Components/Layouts/Configurator';
import { MaterialTailwindProvider } from '@/context/MaterialTailwindContext';
import {
  UserCircleIcon,
  UsersIcon,
  Cog6ToothIcon,
  ArrowLeftEndOnRectangleIcon,
  UserGroupIcon,
  Bars3Icon,
  IdentificationIcon,
  BookOpenIcon,
  AcademicCapIcon,
  WindowIcon
} from '@heroicons/react/24/solid';

export default function Authenticated({ user, roles, header, children }) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
  const handleLogout = async (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del enlace
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content'); // Obtener el token CSRF
    try {
      const response = await fetch(route('logout'), {
        method: 'POST',
        headers: {
          'X-CSRF-TOKEN': csrfToken,
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        window.location.href = '/'; // Redirigir después de hacer logout
      } else {
        console.error('Error al cerrar sesión');
      }
    } catch (error) {
      console.error('Hubo un problema con la solicitud', error);
    }
  }
  const routes = [
    {
      layout: 'dashboard',
      title: 'Principal',
      pages: [
        { icon: <Bars3Icon className="h-5 w-5" />, name: 'Dahsboard', path: route('dashboard'), isFunction: false, },
        { icon: <UserGroupIcon className="h-5 w-5" />, name: 'Administradores', path: route('administrators.get'), isFunction: false },
        { icon: <UserCircleIcon className="h-5 w-5" />, name: 'Perfil', path: route('profile.edit'), isFunction: false },
        { icon: <Cog6ToothIcon className="h-5 w-5" />, name: 'Landing', path: route('landing.edit'), isFunction: false },
        { icon: <IdentificationIcon className="h-5 w-5" />, name: 'Contactos', path: route('contacts.get'), isFunction: false },
      ],
    },
    {
      layout: 'dashboard',
      title: 'Universidad',
      pages: [
        { icon: <Bars3Icon className="h-5 w-5" />, name: 'Dahsboard Universidad', path: route('dashboard.university'), isFunction: false, },
        { icon: <UsersIcon className="h-5 w-5" />, name: 'Estudiantes', path: route('students.index'), isFunction: false },
        { icon: <AcademicCapIcon className="h-5 w-5" />, name: 'Cursos', path: route('courses.index'), isFunction: false },
        { icon: <BookOpenIcon className="h-5 w-5" />, name: 'Materias', path: route('subjects.index'), isFunction: false },
      ],
    },
    {
      layout: 'dashboard',
      title: 'Accesos',
      pages: [
        {
          icon: <ArrowLeftEndOnRectangleIcon className="h-5 w-5" />,
          name: 'Salir',
          path: route('logout'),
          isFunction: true,
          handleClick: handleLogout
        },
      ],
    },
    // Puedes agregar más secciones aquí
  ];

  const routesStudent = [
    {
      layout: 'dashboard',
      title: 'Principal',
      pages: [
        { icon: <Bars3Icon className="h-5 w-5" />, name: 'Dahsboard', path: route('dashboard.student'), isFunction: false, },
        { icon: <UserCircleIcon className="h-5 w-5" />, name: 'Perfil', path: route('profile.edit'), isFunction: false },
        { icon: <WindowIcon className="h-5 w-5" />, name: 'Cursos', path: route('courses.list'), isFunction: false },
      ],
    },
    {
      layout: 'dashboard',
      title: 'Accesos',
      pages: [
        {
          icon: <ArrowLeftEndOnRectangleIcon className="h-5 w-5" />,
          name: 'Salir',
          path: route('logout'),
          isFunction: true,
          handleClick: handleLogout
        },
      ],
    },
    // Puedes agregar más secciones aquí
  ];


  return (
    <MaterialTailwindProvider> {/* Envuelve todo con el proveedor */}
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex">
        {roles.includes('admin') ? (
          <DashboardSidebar
            brandName="ATP UNIVERSITY"
            routes={routes}
          />
        ) : roles.includes('student') ? (
          <DashboardSidebarStudent
            brandName="ATP UNIVERSITY"
            routes={routesStudent}
          />
        ) : null}
        <div className="flex-1 flex flex-col lg:ml-80">

          <DashboardNavbar />
          <main className="flex-1 p-4">
            {header && (
              <div className="bg-white dark:bg-gray-900 flex max-w-7xl mx-auto py-6 px-2 sm:px-4 lg:px-6 rounded-lg shadow-md">{header}</div>
            )}
            {children}
          </main>
        </div>
        <Configurator />
      </div>
    </MaterialTailwindProvider>
  );
}
