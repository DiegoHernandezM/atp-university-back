import React, { useEffect, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Button, Typography } from '@material-tailwind/react';
import Modal from 'react-modal';
import ContactPage from '../../ContactPage.jsx';

Modal.setAppElement('#app');

export default function ContactSection({ landingData: initialLandingData, onSuccess }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { setData, post, processing } = useForm();

  const parsedSectionContact = typeof initialLandingData?.section7_contact === 'string'
      ? JSON.parse(initialLandingData.section7_contact)
      : initialLandingData.section7_contact;

  const [landingData, setLandingData] = useState({
    section7_contact: Array.isArray(parsedSectionContact)
        ? parsedSectionContact
        : [{ address: '', phone: '', email: '' }],
    section: '',
  });

  useEffect(() => {
    if (initialLandingData) {
      const parsedSectionContact = typeof initialLandingData.section7_contact === 'string'
          ? JSON.parse(initialLandingData.section7_contact)
          : initialLandingData.section7_contact;

      setLandingData({
        section7_contact: Array.isArray(parsedSectionContact)
            ? parsedSectionContact
            : [{ address: '', phone: '', email: '' }],
        section: 'contact',
      });
    }
  }, [initialLandingData]);

  useEffect(() => {
    setData({
      section7_contact: landingData.section7_contact,
      section: 'contact'
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('section7_contact', JSON.stringify(landingData.section7_contact));
    post('/landing', {
      data: formData,
      preserveScroll: true,
      onFinish: () => {
        console.log('Formulario enviado con éxito');
        setModalIsOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        onSuccess("Landing Page actualizada correctamente.");
      }
    });
  };

  return (
      <section className="border p-4 md:p-8 lg:p-12">
        <header>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Agrega información de Contacto.
          </p>
          <br />
          {landingData.section7_contact.map((count, index) => (
              <div key={index} className="border p-4 md:p-6 lg:p-8 rounded-md mb-4 space-y-2">
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

          <div className="mt-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Botón de previsualización */}
            <div className="mt-6">
              <Button
                  size="sm"
                  variant="gradient"
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
                  left: '50%',
                  right: 'auto',
                  bottom: 'auto',
                  marginRight: '-50%',
                  transform: 'translate(-50%, -50%)',
                  width: '95%',
                  maxWidth: '1200px',
                  height: 'auto',
                  maxHeight: '700px',
                  padding: '50px',
                  overflowY: 'auto',
                },
              }}
          >
            <div className="absolute top-3 right-2 z-50">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-10 w-10 cursor-pointer hover:scale-110 transition-transform duration-200"
                  onClick={closeModal}
              >
                <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                />
              </svg>
            </div>
            <ContactPage landingData={landingData.section7_contact} isPrev={true} />
            <div className="mt-4 flex flex-col sm:flex-row gap-4">
              <Button onClick={closeModal}>Cerrar</Button>

              <Button
                  onClick={handleSubmit}
                  disabled={processing}
              >
                Guardar
              </Button>
            </div>
          </Modal>
        </header>
      </section>
  );
}
