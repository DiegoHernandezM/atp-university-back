import React, { useEffect } from 'react';
import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { Alert } from '@material-tailwind/react';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import AdministratorsTable from '@/Components/Tables/AdministratorsTable';

export default function Administrators({ auth, users, ...props }) {
  const success = props?.flash?.success;

  return (
    <AuthenticatedLayout
      user={auth.user}
      roles={auth.roles}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Administradores</h2>}
    >
      <Head title="Administrators" />
      <div>
        {success && <Alert color="green">{success}</Alert>}
      </div>
      <div className="mt-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
          <AdministratorsTable users={users} />
        </div>
      </div >
    </AuthenticatedLayout>
  );
}

