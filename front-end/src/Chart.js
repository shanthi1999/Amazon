import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import './Chart.css';

function Chart() {
    const [chartData, setCharData] = useState({})
    const chart = () => {
        setCharData({
            labels: ['Alexandor Hamilton', 'National Geographic Kids', 'A Dance with Dragons (A Song of Ice and Fire)', '1984 (Signet Classics)', '1984 (Signet Classics)'],
            datasets: [
                {
                    label: 'level of thickness',
                    data: [4.4, 4.5, 4.7, 4.1, 5],
                    backgroundColor: [
                        'rgba(75,192,192,0.6)'
                    ],
                    borderWidth: 4
                }
            ]
        })
    }
    useEffect(() => {
        chart()
    }, [])
    return (
        <div className="chart">
            <Bar data={chartData} options={{ responsive: true }} />
        </div>
    );
}

export default Chart;