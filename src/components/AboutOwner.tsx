'use client';

import { CheckCircle2 } from 'lucide-react';

export default function AboutOwner() {
    const credentials = [
        {
            title: 'NAHCON-Accredited',
            description: 'Licensed by National Hajj Commission of Nigeria',
        },
        {
            title: 'NANTA-Certified',
            description: 'National Association of Nigeria Travel Agents',
        },
        {
            title: 'IATA-Certified',
            description: 'International Air Transport Association',
        },
        {
            title: 'AHUON Member',
            description: 'Association of Hajj & Umrah Operators of Nigeria',
        },
        {
            title: 'NCAA-Compliant',
            description: 'Civil Aviation Standards & Regulations',
        },
        {
            title: 'CAC Registered',
            description: 'Corporate Affairs Commission since May 13, 2016',
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-linear-to-br from-slate-50 to-slate-100">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                        Meet Our Visionary Leader
                    </h2>
                    <p className="text-lg text-slate-600">
                        The expertise and dedication behind Al-Yusuff International Travels
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                    {/* CEO Image */}
                    <div className="flex justify-center">
                        <div className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                            <img
                                src="/public/ceo.jpg"
                                alt="Alhaji Abdul Mojeed Oladele Yusuff - CEO"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-blue-50 to-transparent" />
                        </div>
                    </div>

                    {/* CEO Information */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-4xl font-bold text-slate-900 mb-2">
                                Alhaji Abdul Mojeed
                                <br />
                                <span className="text-xl md:text-2xl text-blue-600">
                                    Oladele Yusuff
                                </span>
                            </h3>
                            <p className="text-lg font-semibold text-slate-700">
                                Chief Executive Officer
                            </p>
                            <p className="text-sm text-slate-500 mt-1">
                                Al-Yusuff International Travels and Tours Ltd
                            </p>
                        </div>

                        <p className="text-slate-700 leading-relaxed text-lg">
                            With over a decade of expertise in the travel and pilgrimage industry,
                            Alhaji Mojeed Oladele Yusuff founded and leads Al-Yusuff International
                            Travels and Tours Ltd with a mission to provide exceptional Hajj and
                            Umrah experiences to Muslims worldwide.
                        </p>

                        <p className="text-slate-700 leading-relaxed text-lg">
                            His company is registered with the Corporate Affairs Commission (CAC)
                            in Nigeria since May 13, 2016, and has grown to become a trusted name in
                            pilgrimage logistics, offering comprehensive services from visa processing
                            to on-ground support in Saudi Arabia.
                        </p>

                        <div className="pt-4 border-t border-slate-300">
                            <p className="text-sm font-semibold text-slate-600 mb-3 uppercase tracking-wide">
                                ✓ Fully Compliant & Accredited
                            </p>
                            <p className="text-slate-700 text-sm leading-relaxed">
                                Under his visionary leadership, the company maintains the highest standards of
                                service delivery while ensuring full compliance with national and international
                                travel regulations.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Credentials Grid */}
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                    <h4 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                        Professional Credentials & Accreditations
                    </h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {credentials.map((credential) => (
                            <div
                                key={credential.title}
                                className="flex gap-4 p-4 rounded-lg bg-linear-to-br from-blue-50 to-blue-100 hover:shadow-md transition-shadow"
                            >
                                <div className="shrink-0 mt-1">
                                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h5 className="font-bold text-slate-900 mb-1">
                                        {credential.title}
                                    </h5>
                                    <p className="text-sm text-slate-600">
                                        {credential.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mission Statement */}
                <div className="mt-12 bg-linear-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center">
                    <h4 className="text-2xl font-bold mb-4">Our Commitment</h4>
                    <p className="text-lg leading-relaxed max-w-2xl mx-auto">
                        Under Alhaji Mojeed's leadership, Al-Yusuff International Travels delivers
                        comprehensive logistics and travel support, combining professional expertise
                        with deep respect for the spiritual significance of every Hajj and Umrah journey.
                    </p>
                </div>
            </div>
        </section>
    );
}
