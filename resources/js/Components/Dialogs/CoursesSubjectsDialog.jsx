import React, { useState, useEffect } from "react";
import { useForm } from '@inertiajs/react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Checkbox,
} from "@material-tailwind/react";

export default function CoursesSubjectsDialog({ open, onClose, handleMessage, course, subjects }) {
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const { data, setData, post, reset, errors } = useForm({
    course_id: course?.id,
    aSubjects: []
  });

  // Actualiza el estado con las materias actuales del curso cuando se abre el diálogo
  useEffect(() => {
    if (course?.subjects) {
      const courseSubjectIds = course.subjects.map(subject => subject.id);
      setSelectedSubjects(courseSubjectIds);

      // Inicializa el formulario con el course_id y las materias actuales
      setData({
        course_id: course?.id,
        aSubjects: courseSubjectIds,
      });
    }
  }, [course]);

  // Manejar el cambio de estado de los checkboxes
  const handleCheckboxChange = (subjectId) => {
    const updatedSelectedSubjects = selectedSubjects.includes(subjectId)
      ? selectedSubjects.filter(id => id !== subjectId) // Desmarcar materia
      : [...selectedSubjects, subjectId]; // Marcar nueva materia

    setSelectedSubjects(updatedSelectedSubjects);

    // Actualiza el arreglo de materias seleccionadas en el formulario
    setData('aSubjects', updatedSelectedSubjects);
  };

  // Guardar las materias seleccionadas
  const handleSave = () => {
    post(route('courses.subjects'), {
      onSuccess: () => {
        reset();
        handleMessage("Materias actualizadas correctamente");
        onClose();
      },
      onError: (errors) => {
        console.error(errors);
      }
    });
  };

  // Agrupar las materias en columnas de 7
  const groupSubjectsInColumns = (subjects, perColumn = 7) => {
    const columns = [];
    for (let i = 0; i < subjects.length; i += perColumn) {
      columns.push(subjects.slice(i, i + perColumn));
    }
    return columns;
  };

  const subjectColumns = groupSubjectsInColumns(subjects);

  return (
    <Dialog open={open} handler={onClose} size="lg">
      <DialogHeader>
        {`Administra las materias que pertenecerán al curso: ${course?.title}`}
      </DialogHeader>
      <DialogBody>
        <div className="grid grid-cols-3 gap-4">
          {subjectColumns.map((subjectGroup, colIndex) => (
            <div key={colIndex} className="flex flex-col space-y-2">
              {subjectGroup.map((subject) => (
                <div key={subject.id} className="flex items-center">
                  <Checkbox
                    id={`subject-${subject.id}`}
                    checked={selectedSubjects.includes(subject.id)} // Asegúrate de que `selectedSubjects` contiene los IDs correctos
                    onChange={() => handleCheckboxChange(subject.id)}
                  />
                  <label htmlFor={`subject-${subject.id}`} className="ml-2">
                    {subject.title}
                  </label>
                </div>
              ))}
            </div>
          ))}
        </div>
      </DialogBody>
      <DialogFooter>
        <Button variant="text" color="red" onClick={onClose} className="mr-1">
          <span>Cancelar</span>
        </Button>
        <Button variant="gradient" color="green" onClick={handleSave}>
          <span>Guardar</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
