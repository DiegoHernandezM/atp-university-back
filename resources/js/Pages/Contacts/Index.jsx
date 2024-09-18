import React, { useEffect } from 'react';
import { Head } from '@inertiajs/react';
import { Alert } from '@material-tailwind/react';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InfornationRequestTable from '@/Components/Tables/InformationRequestTable';

export default function InformationRequest({ auth, informationRequests, ...props }) {
  const success = props?.flash?.success;

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Solicitud de información</h2>}
    >
      <Head title="Contacts" />
      <div>
        {success && <Alert color="green">{success}</Alert>}
      </div>
      <div className="mt-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
          <InfornationRequestTable informationRequests={informationRequests} />
        </div>
      </div >
    </AuthenticatedLayout>
  );
}

