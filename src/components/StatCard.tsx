import React from 'react';

interface StatCardProps {
    icon: React.ReactNode;
    value: string;
    label: string;
    bgColor: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, bgColor }) => {
    return (
        <div className={`${bgColor} rounded-2xl p-6 shadow-lg backdrop-blur-sm transform hover:scale-105 transition-all duration-300`}>
            <div className="flex flex-col items-center text-white">
                <div className="mb-3">
                    {icon}
                </div>
                <div className="text-3xl font-bold mb-1">{value}</div>
                <div className="text-sm font-medium opacity-90">{label}</div>
            </div>
        </div>
    );
};

export default StatCard;
