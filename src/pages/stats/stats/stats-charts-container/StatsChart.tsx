import React, { FC, useRef, useEffect } from 'react';
import { Chart } from 'chart.js';
import { primary } from '../../../../utils/colors';
import { StatsChartWrapper } from './StatsChartStyles';

const StatsChart: FC<{ statsValues: Array<number>; dates: Array<string> }> = ({
  statsValues,
  dates
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
              backgroundColor: primary,
              borderColor: 'rgb(255, 99, 132)',
              data: statsValues
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true
        }
      });
    }
  }, [canvasRef, statsValues, dates, chart]);

  return (
    <StatsChartWrapper>
      <canvas ref={canvasRef} style={{ display: 'block' }} />
    </StatsChartWrapper>
  );
};

export default StatsChart;
