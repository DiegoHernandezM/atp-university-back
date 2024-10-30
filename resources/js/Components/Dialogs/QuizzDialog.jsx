import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
  DialogFooter,
  Card,
  CardBody,
  Radio,
  Typography,
} from "@material-tailwind/react";
import axios from 'axios';

export default function QuizzDialog({ open, onClose, quizz, subjectId }) {
  const [parsedQuizz, setParsedQuizz] = useState([]);
  const [responses, setResponses] = useState({});
  const [feedback, setFeedback] = useState({});
  const [quizSummary, setQuizSummary] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);

  // Obtener las respuestas anteriores al abrir el diálogo
  useEffect(() => {
    if (open) {
      axios.post('/quizz/get-quiz-attempt', { subjectId })
        .then(response => {
          if (Object.keys(response.data).length > 0) {
            setResponses(response.data.responses || {}); // Inicializar respuestas con un objeto vacío si no hay respuestas
            setQuizSummary({
              correct_count: response.data.correct_count,
              total_questions: response.data.total_questions,
            });
            setIsCompleted(true);
          }
        })
        .catch(error => console.error('Error al obtener intento del cuestionario:', error));
    }
  }, [open, subjectId]);

  // Efecto para parsear el JSON del quizz cuando se monta el componente
  useEffect(() => {
    if (quizz) {
      try {
        const parsed = JSON.parse(quizz);
        setParsedQuizz(parsed);
      } catch (error) {
        console.error("Error al parsear el cuestionario:", error);
      }
    }
  }, [quizz]);

  // Manejar la selección de una respuesta y guardarla
  const handleOptionChange = async (questionIndex, answer) => {
    if (responses[questionIndex] !== undefined) {
      return; // No permitir cambiar la respuesta una vez seleccionada
    }

    setResponses({
      ...responses,
      [questionIndex]: answer,
    });

    const isCorrect = parsedQuizz[questionIndex].answare === answer;
    setFeedback({
      ...feedback,
      [questionIndex]: isCorrect,
    });

    try {
      const response = await axios.post('/quizz/save-quiz-response', {
        subjectId,
        questionIndex,
        answer,
      });
      if (response.status === 200) {
        setQuizSummary({
          correct_count: response.data.correct_count,
          total_questions: response.data.total_questions,
        });
      }
    } catch (error) {
      console.error('Error al guardar la respuesta:', error);
    }
  };

  // Manejar el envío final del cuestionario
  const handleSubmit = () => {
    if (quizSummary) {
      const percentage = ((quizSummary.correct_count / quizSummary.total_questions) * 100).toFixed(2);
      alert(`Has obtenido un ${percentage}% de aciertos.`);
    }
    onClose();
  };

  // Reiniciar el intento del cuestionario
  const handleReset = async () => {
    try {
      await axios.post('/quizz/reset-quiz-attempt', { subjectId });
      setResponses({});
      setFeedback({});
      setQuizSummary(null);
      setIsCompleted(false);
    } catch (error) {
      console.error('Error al reiniciar el cuestionario:', error);
    }
  };

  return (
    <Dialog open={open} handler={onClose} size="xxl" className="overflow-y-auto max-h-[90vh]">
      <DialogHeader>
        <Typography variant="h5">Responder Cuestionario</Typography>
      </DialogHeader>
      <DialogBody divider className="overflow-y-auto max-h-[70vh]">
        {parsedQuizz && parsedQuizz.length > 0 ? (
          parsedQuizz.map((question, index) => (
            <Card key={`question-${index}`} className="mb-4 bg-gray-100">
              <CardBody>
                <Typography variant="h6" className="mb-4 text-sm">
                  {`Pregunta ${index + 1}: ${question.question}`}
                </Typography>
                <div className="flex flex-col gap-2">
                  {Object.entries(question.answers).map(([optionKey, optionValue]) => (
                    optionValue && ( // Validar que la opción no esté vacía antes de mostrarla
                      <label
                        key={`option-${index}-${optionKey}`}
                        className={`flex items-center gap-2 p-2 rounded ${feedback[index] !== undefined
                            ? feedback[index] && responses[index] === optionKey
                              ? 'bg-green-200'
                              : !feedback[index] && responses[index] === optionKey
                                ? 'bg-red-200'
                                : ''
                            : ''
                          }`}
                      >
                        <Radio
                          id={`option-${index}-${optionKey}`}
                          name={`question-${index}`}
                          value={optionKey}
                          checked={responses?.[index] === optionKey}
                          onChange={() => handleOptionChange(index, optionKey)}
                          className="text-sm"
                          disabled={responses[index] !== undefined}
                        />
                        <Typography className="text-sm">{`${optionKey}. ${optionValue}`}</Typography>
                      </label>
                    )
                  ))}
                </div>
              </CardBody>
            </Card>
          ))
        ) : (
          <Typography className="text-sm">No hay cuestionario disponible para esta materia.</Typography>
        )}
      </DialogBody>
      <DialogFooter className="sticky bottom-0 bg-white">
        <Button variant="text" color="red" onClick={onClose} className="mr-1">
          Cancelar
        </Button>
        {isCompleted ? (
          <Button variant="gradient" color="blue" onClick={handleReset}>
            Reiniciar Test
          </Button>
        ) : (
          <Button variant="gradient" color="green" onClick={handleSubmit}>
            Terminar cuestionario
          </Button>
        )}
      </DialogFooter>
    </Dialog>
  );
}
