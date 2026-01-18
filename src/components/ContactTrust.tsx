
import {
    Phone,
    Mail,
    MapPin,
    Shield,
    Lock,
    Award,
    Headphones,
    Eye,
} from 'lucide-react';

export default function ContactTrust() {
    const trustPoints = [
        {
            icon: Lock,
            title: 'Secure Payments',
            description:
                'Flexible, transparent payment plans with confirmation of every transaction.',
        },
        {
            icon: Award,
            title: 'Verified Travel Services',
            description:
                'Licensed and experienced travel professionals handling all arrangements.',
        },
        {
            icon: Shield,
            title: 'Faith Conscious Guidance',
            description:
                'Every journey managed with care, respect, and spiritual understanding.',
        },
        {
            icon: Headphones,
            title: '24/7 Support',
            description:
                'Dedicated team available before, during, and after your journey.',
        },
        {
            icon: Eye,
            title: 'Transparent Processes',
            description: 'Clear pricing, detailed itineraries, and no hidden charges.',
        },
    ];

    const certifications = [
        { name: 'IATA', logo: '/logos/iata.png' },
        { name: 'NANTA', logo: '/logos/nanta.jpg' },
        { name: 'AHUON', logo: '/logos/ahuon.png' },
        { name: 'NCIA', logo: '/logos/ncia.png' },
        { name: 'NAHCON', logo: '/logos/nahcon.jpg' },
    ];

    const airlines = [
        { name: 'Qatar Airways', logo: '/logos/qatar.png' },
        { name: 'Egypt Air', logo: '/logos/egypt.png' },
        { name: 'Emirates', logo: '/logos/emirates.png' },
        { name: 'Ethiopian Airlines', logo: '/logos/ethopian.png' },
    ];

    const socials = [
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/share/1H9RCJnKuu/?mibextid=wwXIfr',
            logo: '/logos/facebook.png',
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/alyusuffintl?igsh=bzRqY2U1eGdia2Fh',
            logo: '/logos/instagram.jpg',
        },
        {
            name: 'TikTok',
            url: 'https://www.tiktok.com/@alyusuffintl_travels?_r=1&_t=ZN-939SLH2xTsc',
            logo: '/logos/tiktok.png',
        },
    ];

    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">

                {/* Trust Section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Why Trust Al-Yusuff International Travels?
                        </h2>
                        <p className="text-xl text-slate-600">
                            Your trust is our priority. Safe, reliable & transparent services.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
                        {trustPoints.map((point) => {
                            const Icon = point.icon;
                            return (
                                <div
                                    key={point.title}
                                    className="bg-linear-to-br from-blue-50 to-slate-50 p-6 rounded-lg border border-blue-100"
                                >
                                    <Icon className="w-8 h-8 text-blue-600 mb-3" />
                                    <h3 className="font-semibold mb-2">{point.title}</h3>
                                    <p className="text-sm text-slate-600">{point.description}</p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Certifications */}
                    <div className="bg-linear-to-r from-blue-600 to-blue-800 p-8 rounded-lg mb-16">
                        <h3 className="text-2xl font-bold text-white text-center mb-8">
                            Certified & Accredited
                        </h3>

                        <div className="flex flex-wrap justify-center gap-8">
                            {certifications.map((cert) => (
                                <div
                                    key={cert.name}
                                    className="bg-white p-4 rounded-lg shadow-sm"
                                >
                                    <img
                                        src={cert.logo}
                                        alt={cert.name}
                                        width={100}
                                        height={60}
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Airlines */}
                    <div className="bg-slate-50 p-8 rounded-lg border">
                        <h3 className="text-2xl font-bold text-center mb-8">
                            Trusted Airline Partners
                        </h3>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
                            {airlines.map((airline) => (
                                <div
                                    key={airline.name}
                                    className="bg-white p-6 rounded-lg border flex justify-center"
                                >
                                    <img
                                        src={airline.logo}
                                        alt={airline.name}
                                        width={120}
                                        height={60}
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="border-t pt-20">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Get in Touch
                        </h2>
                        <p className="text-xl text-slate-600">
                            We're here to help plan your perfect journey
                        </p>
                    </div>

                    {/* Phone & Email */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="p-8 rounded-lg border bg-blue-50">
                            <Phone className="text-blue-600 mb-3" />
                            <a href="tel:+2348035124441">+234 803 512 4441</a><br />
                            <a href="tel:+2348089299201">+234 808 929 9201</a>
                        </div>

                        <div className="p-8 rounded-lg border bg-blue-50">
                            <Mail className="text-blue-600 mb-3" />
                            <a href="mailto:Alyusufftravels@yahoo.com">
                                Alyusufftravels@yahoo.com
                            </a>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="p-8 rounded-lg border bg-green-50 mb-12">
                        <MapPin className="text-green-600 mb-3" />
                        <p>
                            50, Ishaga Road Off Owodele Bus Stop,
                            LUTH Teaching Hospital Road, Surulere, Lagos
                        </p>
                    </div>

                    {/* Social Media Logos */}
                    <div className="bg-slate-900 p-10 rounded-lg">
                        <h3 className="text-white text-2xl font-bold text-center mb-8">
                            Follow Us
                        </h3>

                        <div className="flex justify-center gap-10">
                            {socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white p-4 rounded-lg hover:scale-105 transition"
                                >
                                    <img
                                        src={social.logo}
                                        alt={social.name}
                                        width={40}
                                        height={40}
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
