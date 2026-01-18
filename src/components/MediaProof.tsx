import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const proofImages = [
    '/proof/1.jpeg',
    '/proof/2.jpeg',
    '/proof/3.jpeg',
    '/proof/4.jpeg',
    '/proof/5.jpeg',
    '/proof/6.jpeg',
    '/proof/7.jpeg',
];

const MediaProof: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -350 : 350;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-60 translate-y-1/3 -translate-x-1/3" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-4">
                            <Camera className="w-3 h-3" />
                            <span>Gallery</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
                            Moments from <br />
                            <span className="text-blue-600">Sacred Journeys</span>
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            Glimpses of the spiritual experiences and happy pilgrims we've had the honor to serve.
                        </p>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-2 shrink-0">
                        <button
                            onClick={() => scroll('left')}
                            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all active:scale-95"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all active:scale-95"
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Slider Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 -mx-6 px-6 scrollbar-hide"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {proofImages.map((src, index) => (
                        <div
                            key={index}
                            className="snap-center shrink-0 w-[85vw] md:w-[450px] aspect-[4/3] rounded-3xl overflow-hidden relative group"
                        >
                            <img
                                src={src}
                                alt={`Al-Yusuff Pilgrimage Moment ${index + 1}`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-6 left-6 text-white">
                                    <p className="font-bold text-lg">Al-Yusuff Travels</p>
                                    <p className="text-xs text-white/80 uppercase tracking-widest">Happy Pilgrim</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MediaProof;
