import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];

  const data = {
    labels,
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        borderCapStyle: 'butt',
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 2,
        pointRadius: 7,
        pointHitRadius: 10,
        data: [10, 20, 30, 40, 50, 40, 20, 30],
        spanGaps: true,
      },
    ],
  };


  

  const lineOptions = {
    tooltips: {
      enabled: false,
    },
    plugins: {
      legend: {
        position: 'top',
        display: false,
      },
    },
  };

  return <Line data={data} options={lineOptions} />;
};

export default LineChart;
