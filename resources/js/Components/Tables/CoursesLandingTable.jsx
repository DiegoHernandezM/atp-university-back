import React from 'react';

export default function CoursesLandingTable({ flights }) {

  return (
    <div className="flight-table">
      <style jsx>{`
        @font-face {
          font-family: 'DS Digital';
          src: url('/fonts/ds-digital.ttf') format('truetype');
        }

        .flight-table {
          background-color: #1a1a1a;
          color: #ffc107;
          font-family: 'DS Digital', monospace;
          width: 100%;
          max-width: 800px;
          margin: auto;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th, td {
          padding: 15px;
          text-align: left;
          font-size: 1.5rem;
          border-bottom: 2px solid #333;
          box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 1);
        }

        th {
          color: #fff;
          font-weight: bold;
        }

        td {
          font-family: 'DS Digital', monospace;
        }

        td.cancelled {
          color: red;
        }

        td.delayed {
          color: orange;
        }

        @media (max-width: 768px) {
          .flight-table th, .flight-table td {
            font-size: 1rem;
            padding: 10px;
          }
        }
      `}</style>
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
