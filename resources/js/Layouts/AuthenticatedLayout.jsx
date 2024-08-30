import { useState } from 'react';
import { Link } from '@inertiajs/react';
import DashboardNavbar from '@/Components/Layouts/DashboardNavbar';
import DashboardSidebar from '@/Components/Layouts/DasboardSidebar';
import Configurator from '@/Components/Layouts/Configurator';
import { MaterialTailwindProvider } from '@/context/MaterialTailwindContext';
import {
  UserCircleIcon,
  Cog6ToothIcon,
  BellIcon,
  CreditCardIcon,
  Bars3Icon,
} from '@heroicons/react/24/solid';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const routes = [
      {
          layout: 'dashboard',
          title: 'Main',
          pages: [
              { icon: <Bars3Icon className="h-5 w-5" />, name: 'Dashboard', path: route('dashboard') },
              { icon: <UserCircleIcon className="h-5 w-5" />, name: 'Profile', path: route('profile.edit') },
              { icon: <Cog6ToothIcon className="h-5 w-5" />, name: 'Settings', path: '/settings' },
          ],
      },
      {
          layout: 'dashboard',
          title: 'Auth Pages',
          pages: [
              { icon: <UserCircleIcon className="h-5 w-5" />, name: 'Sign In', path: '/sign-in' },
              { icon: <UserCircleIcon className="h-5 w-5" />, name: 'Sign Up', path: '/sign-up' },
          ],
      },
      // Puedes agregar más secciones aquí
  ];


    return (
      <MaterialTailwindProvider> {/* Envuelve todo con el proveedor */}
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex">
          <DashboardSidebar
              brandName="ATP UNIVERSITY"
              routes={routes}
          />
          <div className="flex-1 flex flex-col ml-80"> {/* Ajusta el margen izquierdo */}
              <DashboardNavbar />
              <main className="flex-1 p-4">
                {header && (

                    <div className="bg-white dark:bg-gray-900 flex max-w-3xl mx-auto py-6 px-2 sm:px-4 lg:px-6">{header}</div>

                )}
                {children}
              </main>
          </div>
          <Configurator />
        </div>
    </MaterialTailwindProvider>
    );
}
