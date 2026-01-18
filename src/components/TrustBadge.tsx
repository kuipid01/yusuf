import React from 'react';

interface TrustBadgeProps {
    avatars: string[];
    text: string;
}

const TrustBadge: React.FC<TrustBadgeProps> = ({ avatars, text }) => {
    return (
        <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-md border border-gray-100">
            <div className="flex -space-x-2">
                {avatars.map((avatar, index) => (
                    <div
                        key={avatar}
                        className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-linear-to-br from-blue-400 to-purple-500"
                    >
                        <img
                            src={avatar}
                            alt={`Client ${index + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                // Fallback to gradient background if image fails
                                e.currentTarget.style.display = 'none';
                            }}
                        />
                    </div>
                ))}
            </div>
            <span className="text-sm font-medium text-gray-700">{text}</span>
        </div>
    );
};

export default TrustBadge;
