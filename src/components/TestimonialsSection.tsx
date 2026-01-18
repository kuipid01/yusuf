import React from 'react';

const TestimonialsSection: React.FC = () => {
    return (
        <section id="testimonials" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <div className="inline-block px-6 py-2 rounded-full border border-blue-100 bg-blue-50 text-[10px] font-black text-blue-600 uppercase tracking-widest shadow-sm">
                        Testimonials
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                        Unforgettable Journeys, <span className="text-blue-600">Real Satisfaction</span>
                    </h2>
                </div>

                {/* Testimonials Display Box */}
                <div className="bg-white border border-blue-50 rounded-[2.5rem] p-4 md:p-8 shadow-2xl shadow-blue-900/5 max-w-6xl mx-auto">

                    {/* ⬇️ Force equal height columns */}
                    <div className="grid lg:grid-cols-2 gap-8 items-stretch min-h-[520px]">

                        {/* Left side: Video */}
                        <div className="relative rounded-3xl overflow-hidden shadow-lg bg-black h-full">
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/gOpyd7qNjDQ"
                                title="Customer Testimonial"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>

                        {/* Right side: Testimonial Card */}
                        <div className="bg-blue-50/50 rounded-3xl overflow-hidden shadow-md flex flex-col border border-blue-100/50 h-full">

                            {/* Image grid – fixed height */}
                            <div className="grid grid-cols-3 gap-1 h-[220px]">
                                <div className="col-span-2 row-span-2">
                                    <img
                                        src="/testimonial1.png"
                                        alt="Client 1"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <img
                                        src="/test2.png"
                                        alt="Client 2"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <img
                                        src="/test.png"
                                        alt="Client 3"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Content fills remaining space */}
                            <div className="p-6 bg-white flex-1 flex flex-col">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="font-black text-blue-700 text-sm">
                                        Ilelaboye Toheebat
                                    </span>
                                    <span className="text-gray-400 text-xs italic">
                                        is 😄 feeling happy with
                                    </span>
                                    <span className="font-black text-blue-700 text-sm uppercase">
                                        AL-YUSUFF Travels
                                    </span>
                                </div>

                                <p className="text-gray-400 text-[10px] font-bold mb-4 uppercase tracking-widest">
                                    March 16 • 7:33 AM
                                </p>

                                <div className="relative flex-1">
                                    <svg
                                        className="absolute -top-2 -left-2 w-8 h-8 text-blue-50/50"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M14.017 21L14.017 18C14.017 16.899 14.899 16.017 16 16.017L19 16.017C19.552 16.017 20 15.569 20 15.017L20 9.017C20 8.465 19.552 8.017 19 8.017L15 8.017C14.448 8.017 14 7.569 14 7.017L14 5.017C14 4.465 14.448 4.017 15 4.017L20 4.017C21.105 4.017 22 4.912 22 6.017L22 15.017C22 17.679 20.197 19.945 17.586 20.632L14.017 21Z" />
                                    </svg>

                                    <p className="relative text-gray-700 text-sm leading-relaxed italic z-10 font-medium pt-2">
                                        “There are so many things my heart wants to say to you, all of which can be summed up in just three words –
                                        <span className="text-blue-600 font-black"> thanks for everything</span>.
                                        You make me proud of choosing AL-YUSUFF for my sacred journey!”
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
