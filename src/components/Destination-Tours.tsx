'use client';

interface Destination {
    id: number;
    name: string;
    image: string;
    description: string;
    highlights: string[];
    type: 'religious' | 'cultural' | 'luxury';
}

const destinations: Destination[] = [
    {
        id: 1,
        name: 'Makkah',
        image: '/destinations/makkah.jpg',
        description: 'Experience the spiritual heart of Islam. Visit the holiest city for Hajj and Umrah pilgrimages.',
        highlights: ['Kaaba & Masjid al-Haram', 'Tawaf & Sai', 'Spiritual Journey'],
        type: 'religious',
    },
    {
        id: 2,
        name: 'Madinah',
        image: '/destinations/madinah.jpg',
        description: 'Visit the city of the Prophet. Experience serenity and spiritual connection at Al-Masjid an-Nabawi.',
        highlights: ['Al-Masjid an-Nabawi', 'Prophetic Heritage', 'Divine Tranquility'],
        type: 'religious',
    },
    {
        id: 3,
        name: 'Dubai',
        image: '/destinations/dubai.jpg',
        description: 'Discover modern luxury and innovation. Shop, explore stunning architecture, and experience world-class hospitality.',
        highlights: ['Burj Khalifa', 'Shopping Districts', 'Desert Safari'],
        type: 'luxury',
    },
    {
        id: 4,
        name: 'Turkey',
        image: '/destinations/turkey.jpg',
        description: 'Explore rich history and natural wonders. From Cappadocia to Istanbul, experience timeless beauty.',
        highlights: ['Cappadocia Hot Balloons', 'Historic Bazaars', 'Bosphorus Charm'],
        type: 'cultural',
    },
    {
        id: 5,
        name: 'Egypt',
        image: '/destinations/egypt.jpg',
        description: 'Journey through ancient civilization. Witness the majesty of the pyramids and the mysteries of the Nile.',
        highlights: ['Great Pyramids', 'Nile Cruises', 'Ancient Wonders'],
        type: 'cultural',
    },
    {
        id: 6,
        name: 'Qatar',
        image: '/destinations/qatar.jpg',
        description: 'Experience Arabian elegance. Blend modern sophistication with traditional Islamic culture in Doha.',
        highlights: ['Doha Skyline', 'Islamic Museum', 'Pearl District'],
        type: 'luxury',
    },
];

export default function DestinationsTours() {
    return (
        <section className="w-full bg-linear-to-b from-slate-50 to-white py-16 px-4 md:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Explore Our Top Destinations
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">
                        From sacred pilgrimage sites to world-class destinations, we bring you unforgettable travel experiences across the globe.
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                            Religious Journeys
                        </span>
                        <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                            Cultural Tours
                        </span>
                        <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                            Luxury Getaways
                        </span>
                    </div>
                </div>

                {/* Destinations Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {destinations.map((destination) => (
                        <div
                            key={destination.id}
                            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            {/* Image Container */}
                            <div className="relative h-80 overflow-hidden bg-slate-200">
                                <img
                                    src={destination.image || "/placeholder.svg"}
                                    alt={destination.name}

                                    className="object-cover group-hover:scale-110 transition-transform duration-500"

                                />
                                {/* Type Badge */}
                                <div className="absolute top-4 right-4">
                                    <span
                                        className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${destination.type === 'religious'
                                            ? 'bg-emerald-500'
                                            : destination.type === 'cultural'
                                                ? 'bg-blue-500'
                                                : 'bg-purple-500'
                                            }`}
                                    >
                                        {destination.type.charAt(0).toUpperCase() + destination.type.slice(1)}
                                    </span>
                                </div>
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Card Content */}
                            <div className="relative p-6 bg-white">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">{destination.name}</h3>
                                <p className="text-slate-600 text-sm mb-4 line-clamp-2">{destination.description}</p>

                                {/* Highlights */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {destination.highlights.map((highlight, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-md"
                                        >
                                            ✓ {highlight}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <button
                                    onClick={() => {
                                        const query = encodeURIComponent(destination.name);
                                        const url = `https://www.google.com/search?q=${query}`;
                                        window.open(url, '_blank');
                                    }}
                                    className="w-full px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105">
                                    Explore Destination
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Travel Services Info */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <h3 className="text-xl font-bold mb-3">Custom Tours</h3>
                            <p className="text-slate-300">
                                Personalize your itinerary based on your interests, budget, and group size.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-3">Professional Support</h3>
                            <p className="text-slate-300">
                                Expert guides and on-ground support to ensure a seamless travel experience.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-3">Group & Corporate Travel</h3>
                            <p className="text-slate-300">
                                Specialized arrangements for businesses, conferences, and group travels.
                            </p>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div>
                            <p className="text-slate-300 mb-2">Ready to explore these amazing destinations?</p>
                            <h4 className="text-2xl font-bold">Start Your Journey Today</h4>
                        </div>
                        <button
                            onClick={() => {
                                const text = `Hello, I'm interested in planning a trip. Please provide more details.`;
                                const url = `https://wa.me/2348089299201?text=${encodeURIComponent(text)}`;
                                window.open(url, '_blank');
                            }}
                            className="px-8 py-3 bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-900 font-bold rounded-lg hover:from-emerald-300 hover:to-teal-300 transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                            Plan Your Trip
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
