import React from 'react';

const AchievementSection: React.FC = () => {
    return (
        <section className="bg-gray-100 flex justify-center items-center m-2">
            <div className="max-w-md bg-white shadow-md p-6 rounded-lg w-full">
                <div className="text-2xl font-semibold mb-2">Achievement</div>
                <div className="flex items-center mb-4">
                    <div className="bg-blue-500 text-white p-2 rounded-full mr-3">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 9v6m6-6v6" />
                        </svg>
                    </div>
                    <div>
                        <div className="font-semibold text-lg">Achievement Level</div>
                        <div className="text-gray-500">Level Name</div>
                    </div>
                </div>
                <p className="text-gray-700 mb-4">Achievement Level Description goes here.</p>
                <div className="relative w-full bg-gray-200 rounded-full h-4">
                    <div className="absolute left-0 h-4 bg-indigo-500 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                    <div>0</div>
                    <div>Max</div>
                </div>
            </div>
        </section>
    );
};

export default AchievementSection;
