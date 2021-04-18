import React from 'react';
import { Bar } from 'react-chartjs-2';

function BarChart(data) {
    console.log("Data: ", data.data);

    return (
        <Bar
            data={{
                labels: ['gmail', 'hotmail', 'outlook', 'live', 'yahoo', 'bol', 'others'],
                datasets:[
                    {
                        label: 'quantidade',
                        data: data.data,
                        backgroundColor: [
                            'rgba(255, 0, 0, 0.25)',
                            'rgba(0, 0, 255, 0.25)',
                            'rgba(0, 255, 0, 0.25)',
                            'rgba(255, 255, 0, 0.25)',
                            'rgba(0, 255, 255, 0.25)',
                            'rgba(255, 0, 255, 0.25)',
                            'rgba(0, 0, 0, 0.25)',
                        ],
                        borderColor: [
                            'rgba(255, 0, 0, 1)',
                            'rgba(0, 0, 255, 1)',
                            'rgba(0, 255, 0, 1)',
                            'rgba(255, 255, 0, 1)',
                            'rgba(0, 255, 255, 1)',
                            'rgba(255, 0, 255, 1)',
                            'rgba(0, 0, 0, 1)',
                        ],
                        borderWidth: 2
                    },
                ],
            }}
            width={100}
            height={100}
            options={{
                maintainAspectRatio: false,
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    ]
                }
            }}
        />
    );
};

export default BarChart;