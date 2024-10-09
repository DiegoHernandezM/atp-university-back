import React, { useEffect, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Button, Typography } from '@material-tailwind/react';
import Modal from 'react-modal';
import ServicesPage from '../../ServicesPage.jsx';

Modal.setAppElement('#app');

export default function ServicesSection({ landingData: initialLandingData, onSuccess }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedButtonImage, setSelectedButtonImage] = useState(null);
  const [selectedBackgroundImage, setSelectedBackgroundImage] = useState(null);
  const { setData, post, processing } = useForm();

  const parsedSectionServices = typeof initialLandingData?.section4_services === 'string'
    ? JSON.parse(initialLandingData.section4_services)
    : initialLandingData.section4_services;

  const [landingData, setLandingData] = useState({
    section4_services: Array.isArray(parsedSectionServices)
      ? parsedSectionServices
      : [
        { title: '', description: '', link: '', phone: '', button_image: null, background_image: null, calendar: [{ day: '', month: '', course: '', code: '', remark: '' }] }
      ],
    section: '',
  });

  useEffect(() => {
    if (initialLandingData) {
      const parsedSectionServices = typeof initialLandingData.section4_services === 'string'
        ? JSON.parse(initialLandingData.section4_services)
        : initialLandingData.section4_services;

      setLandingData({
        section4_services: Array.isArray(parsedSectionServices)
          ? parsedSectionServices
          : [
            { title: '', description: '', link: '', phone: '', button_image: null, background_image: null, calendar: [{ day: '', month: '', course: '', code: '', remark: '' }] }
          ],
        section: 'services',
      });
    }
  }, [initialLandingData]);

  useEffect(() => {
    setData({
      section4_services: landingData.section4_services,
      section: 'services'
    });
  }, [landingData]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleServicesChange = (index, field, value) => {
    const updatedServices = [...landingData.section4_services];
    updatedServices[index][field] = value;
    setLandingData(prevData => ({
      ...prevData,
      section4_services: updatedServices
    }));
  };

  const handleButtonImageChange = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setSelectedButtonImage({ url: fileUrl });

      const updatedServices = [...landingData.section4_services];
      updatedServices[index].button_image = { url: fileUrl, file: file };
      setLandingData(prevState => ({
        ...prevState,
        section4_services: updatedServices
      }));
    }
  };

  const handleBackgroundImageChange = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setSelectedBackgroundImage({ url: fileUrl });

      const updatedServices = [...landingData.section4_services];
      updatedServices[index].background_image = { url: fileUrl, file: file };
      setLandingData(prevState => ({
        ...prevState,
        section4_services: updatedServices
      }));
    }
  };

  const handleCalendarChange = (serviceIndex, calendarIndex, field, value) => {
    const updatedServices = [...landingData.section4_services];
    if (!updatedServices[serviceIndex].calendar) {
      updatedServices[serviceIndex].calendar = [];
    }
    updatedServices[serviceIndex].calendar[calendarIndex] = {
      ...updatedServices[serviceIndex].calendar[calendarIndex],
      [field]: value
    };
    setLandingData(prevData => ({
      ...prevData,
      section4_services: updatedServices
    }));
  };

  // Función para agregar una nueva sección de servicio
  const addNewServiceSection = () => {
      setLandingData(prevData => ({
          ...prevData,
          section4_services: [
              ...prevData.section4_services,
              { title: '', description: '', link: '', phone: '', button_image: null, background_image: null, calendar:[{day: '', month: '', course: '', code: '', remark: ''}] }
          ]
      }));
  };

  // Función para eliminar una sección de servicio
  const removeServiceSection = (index) => {
    const updatedServices = [...landingData.section4_services];
    updatedServices.splice(index, 1); // Elimina el elemento en la posición index
    setLandingData(prevData => ({
      ...prevData,
      section4_services: updatedServices
    }));
  };

  const addCalendarEntry = (serviceIndex) => {
    const updatedServices = [...landingData.section4_services];
    updatedServices[serviceIndex].calendar.push({ day: '', month: '', course: '', code: '', remark: '' });
    setLandingData(prevData => ({
      ...prevData,
      section4_services: updatedServices
    }));
  };

  const removeCalendarEntry = (serviceIndex, calendarIndex) => {
    const updatedServices = [...landingData.section4_services];
    updatedServices[serviceIndex].calendar.splice(calendarIndex, 1);
    setLandingData(prevData => ({
      ...prevData,
      section4_services: updatedServices
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('section4_services', JSON.stringify(landingData.section4_services));
    post('/landing', {
      data: formData,
      preserveScroll: true,
      onFinish: () => {
        console.log('Formulario enviado con éxito');
        setModalIsOpen(false);
        /* setLandingData({
            section4_services: [{ title: '', description: '', link: '', phone: '', button_image: null, background_image: null }]
        });
        */
        window.scrollTo({ top: 0, behavior: 'smooth' });
        onSuccess("Landing Page actualizada correctamente.");
      }
    });
  };

  return (
    <section className="border p-4">
      <header>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Actualiza la información de tus Servicios.
        </p>
        <br />
        {landingData.section4_services.map((count, index) => (
          <div key={index} className="border p-6 rounded-md mb-4 space-y-2">
            <Typography variant="h6" color="blue-gray" className="mb-1">
              Título del Servicio
            </Typography>
            <input
              type="text"
              value={count.title ?? ''}
              onChange={(e) => handleServicesChange(index, 'title', e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md"
            />

            <Typography variant="h6" color="blue-gray" className="mb-1">
              Descripción
            </Typography>
            <input
              type="text"
              value={count.description ?? ''}
              onChange={(e) => handleServicesChange(index, 'description', e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md"
            />

            <Typography variant="h6" color="blue-gray" className="mb-1">
              Link
            </Typography>
            <input
              type="text"
              value={count.link ?? ''}
              onChange={(e) => handleServicesChange(index, 'link', e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md"
            />

            <Typography variant="h6" color="blue-gray" className="mb-1">
              Telefono
            </Typography>
            <input
              type="text"
              value={count.phone ?? ''}
              onChange={(e) => handleServicesChange(index, 'phone', e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md"
            />
            {count?.calendar?.length === 0 ? (
              // Si no hay fechas, se muestra el botón para agregar una
              <div className="mt-2 flex space-x-2">
                <Button size="sm" variant="gradient" onClick={() => addCalendarEntry(index)}>
                  Agregar fecha
                </Button>
              </div>
            ) : (
              // Si hay fechas, se muestran los campos y los botones para agregar o eliminar fechas
              count?.calendar?.map((calendar, calendarIndex) => (
                <div key={calendarIndex} className="mb-4">
                  {/* Contenedor horizontal para todos los campos */}
                  <div className="flex space-x-4 items-center">
                    {/* Campo Día */}
                    <div className="flex-1">
                      <Typography variant="h6" color="blue-gray" className="mb-1">
                        Día
                      </Typography>
                      <input
                        type="number"
                        max="31"
                        value={calendar.day ?? ''}
                        onChange={(e) => handleCalendarChange(index, calendarIndex, 'day', e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md"
                      />
                    </div>

                    {/* Campo Mes */}
                    <div className="flex-1">
                      <Typography variant="h6" color="blue-gray" className="mb-1">
                        Mes
                      </Typography>
                      <select
                        value={calendar.month ?? ''}
                        onChange={(e) => handleCalendarChange(index, calendarIndex, 'month', e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md"
                      >
                        <option value="">Seleccionar mes</option>
                        <option value="Enero">Enero</option>
                        <option value="Febrero">Febrero</option>
                        <option value="Marzo">Marzo</option>
                        <option value="Abril">Abril</option>
                        <option value="Mayo">Mayo</option>
                        <option value="Junio">Junio</option>
                        <option value="Julio">Julio</option>
                        <option value="Agosto">Agosto</option>
                        <option value="Septiembre">Septiembre</option>
                        <option value="Octubre">Octubre</option>
                        <option value="Noviembre">Noviembre</option>
                        <option value="Diciembre">Diciembre</option>
                      </select>
                    </div>

                    {/* Campo Curso */}
                    <div className="flex-1">
                      <Typography variant="h6" color="blue-gray" className="mb-1">
                        Curso
                      </Typography>
                      <input
                        type="text"
                        value={calendar.course ?? ''}
                        onChange={(e) => handleCalendarChange(index, calendarIndex, 'course', e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md"
                      />
                    </div>

                    {/* Campo Código */}
                    <div className="flex-1">
                      <Typography variant="h6" color="blue-gray" className="mb-1">
                        Código
                      </Typography>
                      <input
                        type="text"
                        value={calendar.code ?? ''}
                        onChange={(e) => handleCalendarChange(index, calendarIndex, 'code', e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md"
                      />
                    </div>

                    {/* Campo Observaciones */}
                    <div className="flex-1">
                      <Typography variant="h6" color="blue-gray" className="mb-1">
                        Observaciones
                      </Typography>
                      <input
                        type="text"
                        value={calendar.remark ?? ''}
                        onChange={(e) => handleCalendarChange(index, calendarIndex, 'remark', e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  {/* Botones para agregar/eliminar fechas */}
                  <div className="mt-2 flex space-x-2">
                    <Button size="sm" variant="gradient" onClick={() => addCalendarEntry(index)}>
                      Agregar fecha
                    </Button>
                    <Button size="sm" variant="gradient" color="red" onClick={() => removeCalendarEntry(index, calendarIndex)}>
                      Eliminar fecha
                    </Button>

                  </div>
                </div>
              ))
            )}

            <div className="mt-4">
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Agregar imagen para botón
              </Typography>
              <div className="flex flex-wrap gap-4">
                <input
                  type="file"
                  name="button_image"
                  id={`button_image_${index}`} // ID único por cada sección
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => handleButtonImageChange(e, index)} // Cambié para que llame la función con el índice correspondiente
                />
                <Button
                  size="sm"
                  variant="gradient"
                  className="rounded-full flex items-center gap-3"
                  onClick={() => document.getElementById(`button_image_${index}`).click()} // Seleccionar el input de la sección correcta
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
                  Seleccionar imagen para botón
                </Button>
              </div>
            </div>

            <div className="mt-4">
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Agregar imagen de fondo
              </Typography>
              <div className="flex flex-wrap gap-4">
                <input
                  type="file"
                  name="background_image"
                  id={`background_image_${index}`} // ID único por cada sección
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => handleBackgroundImageChange(e, index)} // Cambié para que llame la función con el índice correspondiente
                />
                <Button
                  size="sm"
                  variant="gradient"
                  className="rounded-full flex items-center gap-3"
                  onClick={() => document.getElementById(`background_image_${index}`).click()} // Seleccionar el input de la sección correcta
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
                  Seleccionar imagen de fondo
                </Button>
              </div>
            </div>

            {/* Botón para eliminar sección */}
            <div className="mt-4">
              <Button
                size="sm"
                variant="gradient"
                color="red"
                onClick={() => removeServiceSection(index)}
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
              onClick={addNewServiceSection}
            >
              Agregar Servicio
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
          contentLabel="Previsualizar Servicios"
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
          <ServicesPage landingData={landingData.section4_services} isPrev={true} />
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
