import React from 'react';

const ChartSection: React.FC = () => {
    return (
        <section className="bg-gray-100 flex justify-center items-center">
            <div className="max-w-md bg-white shadow-md p-6 rounded-lg w-full">
                <div className="text-2xl font-semibold mb-4">Words Learned</div>
                <div className="flex flex-col">
                    <div className="mb-2">
                        <label htmlFor="timeInterval" className="text-gray-700">Select Time Interval:</label>
                        <select id="timeInterval" className="border border-gray-300 rounded px-3 py-1">
                            <option value="day">Day</option>
                            <option value="week">Week</option>
                            <option value="month">Month</option>
                        </select>
                    </div>
                    <div className="w-full">
                        <canvas id="myChart" style={{ width: '100%', height: '200px' }}></canvas>
                    </div>
                </div>
                <script src="src/chart.js"></script>
            </div>
        </section>
    );
};

export default ChartSection;
