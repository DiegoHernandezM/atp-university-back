import { useEffect, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Button, Typography } from '@material-tailwind/react';
import Modal from 'react-modal';
import ContactPage from '../../ContactPage.jsx';

Modal.setAppElement('#app');

export default function ContactSection({ onSuccess }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [landingData, setLandingData] = useState({
    section7_contact: [
      { address: '', phone: '', email: '' }
    ]
  });

  const { setData, post, processing } = useForm();

  useEffect(() => {
    setData({
      section7_contact: landingData.section7_contact
    });
  }, [landingData]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleContactChange = (index, field, value) => {
    const updatedContact = [...landingData.section7_contact];
    updatedContact[index][field] = value;
    setLandingData(prevData => ({
      ...prevData,
      section7_contact: updatedContact
    }));
  };

  const isPreviewDisabled = landingData.section7_contact.every(
    count => count.address.trim() !== '' && count.phone.trim() !== '' && count.email.trim() !== ''
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('section7_contact', JSON.stringify(landingData.section7_contact));
    post('/landing/contact', {
      data: formData,
      preserveScroll: true,
      onFinish: () => {
        console.log('Formulario enviado con éxito');
        setModalIsOpen(false);
        setLandingData({
          section7_contact: [{ address: '', phone: '', email: '' }]
        });
        onSuccess("Landing Page actualizada correctamente.");
      }
    });
  };

  return (
    <section className="p-4">
      <header>
        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Bienvenido</h2>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Agrega información de Contacto.
        </p>

        {landingData.section7_contact.map((count, index) => (
          <div key={index} className="border border-gray-800 p-6 rounded-md mb-4 space-y-2">
            <Typography variant="h6" color="blue-gray" className="mb-1">
              Dirección
            </Typography>
            <input
              type="text"
              value={count.address ?? ''}
              onChange={(e) => handleContactChange(index, 'address', e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md"
            />

            <Typography variant="h6" color="blue-gray" className="mb-1">
              Telefono
            </Typography>
            <input
              type="text"
              value={count.phone ?? ''}
              onChange={(e) => handleContactChange(index, 'phone', e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md"
            />

            <Typography variant="h6" color="blue-gray" className="mb-1">
              Email
            </Typography>
            <input
              type="text"
              value={count.email ?? ''}
              onChange={(e) => handleContactChange(index, 'email', e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md"
            />
          </div>
        ))}

        <div className="mt-4 flex space-x-4">
          {/* Botón de previsualización */}
          <div className="mt-6">
            <Button
              size="sm"
              variant="gradient"
              disabled={!isPreviewDisabled}
              onClick={openModal}
            >
              Previsualizar
            </Button>
          </div>
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Previsualizar"
          style={{
            content: {
              top: '50%',
              left: '58%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              maxWidth: '1200px',
              height: 'auto',
              maxHeight: '700px',
            },
          }}
        >
          <h2>Previsualización Contacto</h2>
          <ContactPage landingData={landingData.section7_contact} isPrev={true} />
          <div className="mt-4 flex space-x-4">
            <Button onClick={closeModal}>Cerrar</Button>

            <Button
              onClick={handleSubmit}
              disabled={processing || !isPreviewDisabled}
            >
              Guardar
            </Button>
          </div>
        </Modal>
      </header>
    </section>
  );
}
