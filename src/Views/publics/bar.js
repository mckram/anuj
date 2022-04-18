import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import author from "../../Assets/auth.json";


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const Bars = () => {

    var cites = author.cites_per_year
    var labels = Object.keys(cites)
    var val = Object.values(cites)


    const options = {
        responsive: true,
        scales: {
            x: {
              ticks: {
                color: 'white'
              }
            },
            y: {
              ticks: {
                color: 'white'
              }
            }
          },
        plugins: {
            datalabels: {
                color: 'white'
              },
          legend: {
            display:  false
            },
          title: {
            display: true,
            text: 'Annual Citations',
            color:'white',
            font: {
                size: 20,
                family: 'Montserrat-700, sans-serif'
            }
          },

        },
        
      };
      const data = {
        labels,
        datasets: [
          {
            label: 'Citations',
            data: val,
            backgroundColor: '#232b79',
          }
        ],
      };
    
      return (<Bar options={options} data={data} />)

  }



export default Bars;