import Chart from 'chart.js';
import React, { FC, useEffect, useRef } from 'react';
import { primary, secondary } from '../../../../utils/colors';
import { StatsChartWrapper } from './StatsChartStyles';

interface Props {
  statsValues: Array<number | any>;
  dates: Array<string>;
  suggestedMax?: number;
  label?: string;
  stepSize?: number;
}

const StatsChart: FC<Props> = ({
  statsValues,
  dates,
  suggestedMax = 20,
  label = '',
  stepSize = 1
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chart = useRef<Chart>();

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.getContext('2d');
      chart.current = new Chart(canvasRef.current, {
        type: 'bar',
        data: {
          labels: dates,
          datasets: [
            {
              label,
              backgroundColor: dates.map((item, index) =>
                index % 2 === 0 ? primary : secondary
              ),
              borderColor: 'rgb(255, 99, 132)',
              data: statsValues
            }
          ]
        },
        options: {
          responsiveAnimationDuration: 0,
          legend: {
            fullWidth: true,
            align: 'center'
          },
          hover: {
            animationDuration: 0 // duration of animations when hovering an item
          },
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  stepSize,
                  suggestedMax: suggestedMax
                }
              }
            ]
          }
        }
      });
    }

    return () => {
      if (chart.current) {
        chart.current.destroy();
      }
    };
  }, [canvasRef, statsValues, dates, chart]);

  return (
    <StatsChartWrapper>
      <canvas ref={canvasRef} style={{ display: 'block' }} />
    </StatsChartWrapper>
  );
};

export default StatsChart;
