import React from 'react';

interface BadgeProps {
    text: string;
}

const Badge: React.FC<BadgeProps> = ({ text }) => {
    return (
        <div className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
            <span className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                {text}
            </span>
        </div>
    );
};

export default Badge;
