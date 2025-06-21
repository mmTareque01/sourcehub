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
  Filler,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export type TimeRange = '7d' | '30d' | '90d' | '12m';

export interface VisitorData {
  date: string;
  visitors: number;
  newVisitors: number;
  returningVisitors: number;
}

export interface VisitorStatsProps {
  data: VisitorData[];
  timeRange: TimeRange;
  onChangeTimeRange: (range: TimeRange) => void;
  percentageChange: number;
}

const VisitorStatsGraph: React.FC<VisitorStatsProps> = ({
  data,
  timeRange,
  onChangeTimeRange,
  percentageChange,
}) => {
  // Process data for chart
  const chartData = {
    labels: data.map((d) => d.date),
    datasets: [
      {
        label: 'Total Visitors',
        data: data.map((d) => d.visitors),
        borderColor: 'rgba(99, 102, 241, 1)',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: 'rgba(99, 102, 241, 1)',
        pointRadius: 3,
        pointHoverRadius: 5,
      },
      {
        label: 'New Visitors',
        data: data.map((d) => d.newVisitors),
        borderColor: 'rgba(16, 185, 129, 1)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
        borderDash: [5, 5],
      },
      {
        label: 'Returning Visitors',
        data: data.map((d) => d.returningVisitors),
        borderColor: 'rgba(245, 158, 11, 1)',
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        tension: 0.4,
        borderDash: [5, 5],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          drawOnChartArea: true,
          color: 'rgba(229, 231, 235, 0.5)',
        },
      },
      x: {
        grid: {
          drawOnChartArea: false,
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Visitor Growth</h3>
          <div className="flex items-center mt-1">
            <span className="text-2xl font-bold text-gray-900">
              {data.reduce((sum, day) => sum + day.visitors, 0).toLocaleString()}
            </span>
            <span
              className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                percentageChange >= 0
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {percentageChange >= 0 ? '↑' : '↓'} {Math.abs(percentageChange)}%
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Compared to previous period
          </p>
        </div>

        <div className="mt-4 md:mt-0">
          <div className="inline-flex rounded-md shadow-sm">
            {(['7d', '30d', '90d', '12m'] as TimeRange[]).map((range) => (
              <button
                key={range}
                type="button"
                onClick={() => onChangeTimeRange(range)}
                className={`px-3 py-2 text-sm font-medium ${
                  timeRange === range
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-700 hover:bg-gray-100'
                } ${range === '7d' ? 'rounded-l-lg' : ''} ${
                  range === '12m' ? 'rounded-r-lg' : ''
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="h-80">
        <Line data={chartData} options={options} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm font-medium text-gray-500">New Visitors</p>
          <p className="mt-1 text-xl font-semibold text-gray-900">
            {data.reduce((sum, day) => sum + day.newVisitors, 0).toLocaleString()}
          </p>
          <p className="text-xs text-gray-500 mt-1">Last {timeRange}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm font-medium text-gray-500">Returning Visitors</p>
          <p className="mt-1 text-xl font-semibold text-gray-900">
            {data.reduce((sum, day) => sum + day.returningVisitors, 0).toLocaleString()}
          </p>
          <p className="text-xs text-gray-500 mt-1">Last {timeRange}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm font-medium text-gray-500">Avg. Daily Visitors</p>
          <p className="mt-1 text-xl font-semibold text-gray-900">
            {Math.round(
              data.reduce((sum, day) => sum + day.visitors, 0) / data.length
            ).toLocaleString()}
          </p>
          <p className="text-xs text-gray-500 mt-1">Last {timeRange}</p>
        </div>
      </div>
    </div>
  );
};

export default VisitorStatsGraph;