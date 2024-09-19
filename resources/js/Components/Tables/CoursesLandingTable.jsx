import React from 'react';
import '../../../css/flighttable.css';

export default function CoursesLandingTable() {
  const flights = [
    { date: '18-OCT-2024', course: 'CIAC PREP', code: 'AA830', remark: 'CUPO 20 PERSONAS' },
    { date: '20-OCT-2024', course: 'CIAC PREP', code: 'BB267', remark: 'SIN CUPO' },
    { date: '01-SEP-2024', course: 'CIAC PREP', code: 'CC281', remark: 'CANCELADO' },
    { date: '15-SEP-2024', course: 'CIAC PREP', code: 'DD1032', remark: 'CUPO 10 PERSONAS' },
    { date: '10-ENE-2025', course: 'CIAC PREP', code: 'EE4818', remark: 'PENDIENTE' },
    { date: '20-FEB-2025', course: 'CIAC PREP', code: 'FFN418', remark: 'PENDIENTE' },
  ];

  return (
    <div className="flight-table">
      <table>
        <thead>
          <tr>
            <th>DIA</th>
            <th>CURSO</th>
            <th>CODIGO</th>
            <th>ANOTACIONES</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight, index) => (
            <tr key={index}>
              <td>{flight.date}</td>
              <td>{flight.course}</td>
              <td>{flight.code}</td>
              <td>{flight.remark}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
