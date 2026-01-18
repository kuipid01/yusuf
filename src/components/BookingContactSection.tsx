import React from 'react';

const BookingContactSection: React.FC = () => {
    return (
        <section id="contact" className="py-24 bg-blue-50/30">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-stretch">

                    {/* Left Column: Booking Form */}
                    <div className="lg:w-3/5 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-blue-900/5 border border-blue-50">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-[10px] font-black text-blue-600 uppercase tracking-widest mb-8">
                            Reserve Your Slot
                        </div>

                        <h2 className="text-4xl lg:text-6xl font-black text-gray-900 leading-none mb-10">
                            Secure Your <br />
                            <span className="text-blue-600">Sacred Journey</span> <br />
                            Today!
                        </h2>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="Enter email address"
                                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 transition-all"
                                    />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        placeholder="Enter phone number"
                                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Location</label>
                                    <select className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 transition-all appearance-none text-gray-400">
                                        <option value="">Select location</option>
                                        <option value="abuja">Abuja</option>
                                        <option value="lagos">Lagos</option>
                                        <option value="kano">Kano</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Description</label>
                                <textarea
                                    placeholder="Tell us about your travel plans..."
                                    rows={4}
                                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 transition-all resize-none"
                                ></textarea>
                            </div>

                            <button className="w-full sm:w-auto bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 hover:-translate-y-1">
                                Submit Request
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7-7 7" />
                                </svg>
                            </button>
                        </form>
                    </div>

                    {/* Right Column: CTA Image Card */}
                    <div className="lg:w-2/5 relative rounded-[2.5rem] overflow-hidden group min-h-[500px] shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop"
                            alt="Mosque Interior"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-blue-900/90 via-blue-900/40 to-transparent"></div>

                        <div className="absolute inset-0 p-12 flex flex-col justify-end items-start text-white">
                            <h3 className="text-3xl font-black mb-4 leading-tight">
                                Do You Have Any <br />
                                Query, Let's Talk?
                            </h3>
                            <p className="text-blue-100/80 text-sm mb-8 max-w-xs font-medium italic">
                                "Our team is here to guide you with care and professionalism from start to finish."
                            </p>
                            <button className="px-10 py-4 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-md text-white font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-blue-900 transition-all flex items-center gap-2 group">
                                TALK WITH US
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BookingContactSection;
