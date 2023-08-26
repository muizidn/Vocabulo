import React from 'react';
import AchievementSection from './AchievementSection';
import ChartSection from './ChartSection';

const UserProfile: React.FC = () => {
    return (
        <div className="bg-white shadow-md rounded-md p-8 w-80 max-w-screen-md">
            {/* User Profile Section */}
            <section className="bg-gray-100 flex justify-center items-center">
                <div className="max-w-md bg-white shadow-md p-6 rounded-lg w-full">
                    <img src="src/assets/cat.png" alt="Profile Picture" className="w-20 h-20 rounded-full border-2 border-blue-500" />
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold mt-4">John Doe</h1>
                        <p className="text-gray-500 text-sm">Learning French</p>
                        <div className="mt-6">
                            <div className="flex justify-between items-center mb-2">
                                <p className="text-gray-500">Streak</p>
                                <p className="text-lg font-semibold">45</p>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                                <p className="text-gray-500">XP</p>
                                <p className="text-lg font-semibold">860</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-red-600">Level</p>
                                <p className="text-green-500 text-lg font-semibold">Intermediate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievement Section */}
            <AchievementSection />

            {/* Chart Section */}
            <ChartSection />
        </div>
    );
};

export default UserProfile;
