import React, { useEffect, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Button, Typography } from '@material-tailwind/react';
import Modal from 'react-modal';
import TestimonialsPage from '../../TestimonialsPage.jsx';

Modal.setAppElement('#app');

export default function TestimonialsSection({ landingData: initialLandingData, onSuccess }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const { setData, post, processing } = useForm();

  const parsedSectionTestimonials = typeof initialLandingData?.section6_testimonials === 'string'
      ? JSON.parse(initialLandingData.section6_testimonials)
      : initialLandingData.section6_testimonials;

  const [landingData, setLandingData] = useState({
    section6_testimonials: Array.isArray(parsedSectionTestimonials)
        ? parsedSectionTestimonials
        : [
          { name: '', description: '', image: null }
        ],
    section: '',
  });

  useEffect(() => {
    if (initialLandingData) {
      const parsedSectionTestimonials = typeof initialLandingData.section6_testimonials === 'string'
          ? JSON.parse(initialLandingData.section6_testimonials)
          : initialLandingData.section6_testimonials;

      setLandingData({
        section6_testimonials: Array.isArray(parsedSectionTestimonials)
            ? parsedSectionTestimonials
            : [
              { name: '', description: '', image: null }
            ],
        section: 'testimonials',
      });
    }
  }, [initialLandingData]);


  useEffect(() => {
    setData({
      section6_testimonials: landingData.section6_testimonials,
      section: 'testimonials'
    });
  }, [landingData]);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleTestimonialsChange = (index, field, value) => {
    const updatedTestimonials = [...landingData.section6_testimonials];
    updatedTestimonials[index][field] = value;
    setLandingData(prevData => ({
      ...prevData,
      section6_testimonials: updatedTestimonials
    }));
  };


  const handleFileChange = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setSelectedImage({ url: fileUrl });

      const updatedTestimonials = [...landingData.section6_testimonials];
      updatedTestimonials[index].image = { url: fileUrl, file: file };
      setLandingData(prevState => ({
        ...prevState,
        section6_testimonials: updatedTestimonials
      }));
    }
  };
  const addNewTestimonialSection = () => {
    setLandingData(prevData => ({
      ...prevData,
      section6_testimonials: [
        ...prevData.section6_testimonials,
        { name: '', description: '', image: null }
      ]
    }));
  };

  const removeTestimonialSection = (index) => {
    const updatedTestimonials = [...landingData.section6_testimonials];
    updatedTestimonials.splice(index, 1);
    setLandingData(prevData => ({
      ...prevData,
      section6_testimonials: updatedTestimonials
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('section6_testimonials', JSON.stringify(landingData.section6_testimonials));
    post('/landing', {
      data: formData,
      preserveScroll: true,
      onFinish: () => {
        console.log('Formulario enviado con éxito');
        setModalIsOpen(false);
        /*setLandingData({
          section6_testimonials: [{ name: '', description: '', image: null }]
        });*/
        window.scrollTo({ top: 0, behavior: 'smooth' });
        onSuccess("Landing Page actualizada correctamente.");
      }
    });
  };

  return (
    <section className="border p-4">
      <header>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Agrega información de Testimonios.
        </p>
        <br />
        {landingData.section6_testimonials.map((count, index) => (
          <div key={index} className="border p-6 rounded-md mb-4 space-y-2">
            <Typography variant="h6" color="blue-gray" className="mb-1">
              Nombre
            </Typography>
            <input
              type="text"
              value={count.name ?? ''}
              onChange={(e) => handleTestimonialsChange(index, 'name', e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md"
            />
            <Typography variant="h6" color="blue-gray" className="mb-1">
              Descripción
            </Typography>
            <input
              type="text"
              value={count.description ?? ''}
              onChange={(e) => handleTestimonialsChange(index, 'description', e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md"
            />

            <div className="mt-4">
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Agregar imagen
              </Typography>
              <div className="flex flex-wrap gap-4">
                <input
                  type="file"
                  name="testimonials_image"
                  id={`testimonials_image_${index}`}
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, index)}
                />
                <Button
                  size="sm"
                  variant="gradient"
                  className="rounded-full flex items-center gap-3"
                  onClick={() => document.getElementById(`testimonials_image_${index}`).click()} // Seleccionar el input de la sección correcta
                >
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
                      d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                    />
                  </svg>
                  Seleccionar imagen
                </Button>
              </div>
            </div>

            {/* Botón para eliminar sección */}
            <div className="mt-4">
              <Button
                size="sm"
                variant="gradient"
                color="red"
                onClick={() => removeTestimonialSection(index)}
              >
                Eliminar sección
              </Button>
            </div>
          </div>
        ))}

        <div className="mt-4 flex space-x-4">
          {/* Botón para agregar nueva sección */}
          <div className="mt-6">
            <Button
              size="sm"
              variant="gradient"
              onClick={addNewTestimonialSection}
            >
              Agregar Testimonio
            </Button>
          </div>

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
              width: '100%',
              maxWidth: '1200px',
              height: 'auto',
              maxHeight: '700px',
            },
          }}
        >
          <div className="absolute top-2 right-2 z-50">
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
          <br />
          <TestimonialsPage landingData={landingData.section6_testimonials} isPrev={true} />
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
