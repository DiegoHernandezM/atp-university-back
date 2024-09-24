import React from 'react';
import '../../../css/flighttable.css';

export default function CoursesLandingTable() {
  const flights = [
    { day: '18', month: 'OCTUBRE', course: 'CIAC PREP', code: 'AA830', remark: 'CUPO 20 PERSONAS' },
    { day: '20', month: 'OCTUBRE', course: 'CIAC PREP', code: 'BB267', remark: 'SIN CUPO' },
    { day: '01', month: 'SEPTIEMBRE', course: 'CIAC PREP', code: 'CC281', remark: 'CANCELADO' },
    { day: '15', month: 'SEPTIEMBRE', course: 'CIAC PREP', code: 'DD1032', remark: 'CUPO 10 PERSONAS' },
    { day: '10', month: 'ENERO', course: 'CIAC PREP', code: 'EE4818', remark: 'PENDIENTE' },
    { day: '20', month: 'FEBRERO', course: 'CIAC PREP', code: 'FFN418', remark: 'PENDIENTE' },
  ];

  return (
    <div className="flight-table">
      <table>
        <thead>
          <tr>
            <th>DIA</th>
            <th>MES</th>
            <th>CURSO</th>
            <th>CODIGO</th>
            <th>REMARKS</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight, index) => (
            <tr key={index}>
              <td>{flight.day}</td>
              <td>{flight.month}</td>
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
