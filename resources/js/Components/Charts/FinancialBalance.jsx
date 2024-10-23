import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Select,
  Option
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";

export default function FinancialBalance() {
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [chartData, setChartData] = useState({
    categories: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    series: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  });

  useEffect(() => {
    // Llamada al backend para obtener los datos de ventas por año
    axios
      .get(`/dashboard-balance-university/${year}`)
      .then((response) => {
        setChartData({
          categories: response.data.categories,
          series: response.data.series,
        });
      })
      .catch((error) => {
        console.error("Error fetching sales data", error);
      });
  }, [year]);
  const chartConfig = {
    type: "line",
    height: 240,
    series: [
      {
        name: "Ventas",
        data: chartData?.series,
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#020617"],
      stroke: {
        lineCap: "round",
        curve: "smooth",
      },
      markers: {
        size: 0,
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: chartData.categories,
      },
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };

  return (
    <Card>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >
        <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
          <CurrencyDollarIcon className="h-6 w-6" />
        </div>
        <div>
          <Typography variant="h6" color="blue-gray">
            Balance
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="max-w-sm font-normal"
          >
            Ingresos obtenidos por mes
          </Typography>

        </div>
      </CardHeader>
      <CardBody className="px-2 pb-0">
        <div className="relative z-50">
          <Select value={year} onChange={(val) => setYear(val)}>
            <Option value="2023">2023</Option>
            <Option value="2024">2024</Option>
            <Option value="2025">2025</Option>
            <Option value="2026">2026</Option>
            <Option value="2027">2027</Option>
            <Option value="2028">2028</Option>
          </Select>
        </div>
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
  );
}
