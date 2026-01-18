import React from 'react';
import {
    Facebook,
    Twitter,
    Instagram,
    MapPin,
    Phone,
    Mail,
    Plane,
    HeartHandshake,
} from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0f172a] text-white pt-20">
            <div className="container mx-auto px-6">

                {/* Top CTA Bar */}
                <div className="flex flex-col md:flex-row gap-8 mb-20">
                    <a
                        href="#packages"
                        className="flex-1 group flex items-center justify-between bg-white/5 border border-white/10 rounded-[2rem] px-10 py-8 hover:bg-blue-600 transition-all duration-500"
                    >
                        <div className="space-y-1">
                            <span className="text-2xl font-black block">Explore Packages</span>
                            <span className="text-xs text-white/60 group-hover:text-white/80">
                                Tailored Hajj & Umrah
                            </span>
                        </div>
                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                            <Plane className="w-6 h-6" />
                        </div>
                    </a>

                    <a
                        href="#contact"
                        className="flex-1 group flex items-center justify-between bg-white/5 border border-white/10 rounded-[2rem] px-10 py-8 hover:bg-blue-600 transition-all duration-500"
                    >
                        <div className="space-y-1">
                            <span className="text-2xl font-black block">Contact Now</span>
                            <span className="text-xs text-white/60 group-hover:text-white/80">
                                24/7 Support Desk
                            </span>
                        </div>
                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                            <HeartHandshake className="w-6 h-6" />
                        </div>
                    </a>
                </div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-20">

                    {/* Brand */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                                <span className="text-white font-black text-xl">AY</span>
                            </div>
                            <div className="flex flex-col leading-tight">
                                <span className="font-black tracking-tight text-lg">
                                    AL-YUSUFF
                                </span>
                                <span className="text-[10px] uppercase font-bold text-blue-400">
                                    International Travels
                                </span>
                            </div>
                        </div>

                        <p className="text-xs text-slate-400 leading-relaxed italic">
                            "We lead, others follow. Dedicated to delivering seamless Umrah,
                            Hajj and reliable international travel solutions with excellence
                            and integrity."
                        </p>

                        {/* Socials */}
                        <div className="flex gap-4">
                            <a
                                href="https://www.facebook.com/share/1H9RCJnKuu/?mibextid=wwXIfr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>

                            <a
                                href="https://www.instagram.com/alyusuffintl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>

                            <a
                                href="https://www.tiktok.com/@alyusuffintl_travels"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-widest text-white/90 mb-10 border-l-4 border-blue-600 pl-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                            <li><a href="#home" className="hover:text-blue-400">Home</a></li>
                            <li><a href="#about" className="hover:text-blue-400">About Company</a></li>
                            <li><a href="#services" className="hover:text-blue-400">Our Services</a></li>
                            <li><a href="#packages" className="hover:text-blue-400">Pricing Plan</a></li>
                            <li><a href="#contact" className="hover:text-blue-400">Contact Desk</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-widest text-white/90 mb-10 border-l-4 border-blue-600 pl-4">
                            Top Services
                        </h4>
                        <ul className="space-y-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                            <li>Hajj Packages</li>
                            <li>Umrah Packages</li>
                            <li>Airline Ticket</li>
                            <li>Hotel Reservation</li>
                            <li>Group Tours</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-widest text-white/90 mb-10 border-l-4 border-blue-600 pl-4">
                            Get In Touch
                        </h4>

                        <div className="space-y-6 text-xs text-slate-400">
                            <div className="flex gap-4 items-start">
                                <Phone className="w-5 h-5 text-blue-600 shrink-0" />
                                <div className="space-y-1">
                                    <p className="font-bold">08089299201 (WhatsApp)</p>
                                    <p className="font-bold">08035124441 (WhatsApp)</p>
                                    <p className="font-bold">08186407509</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-center">
                                <Mail className="w-5 h-5 text-blue-600" />
                                <p className="font-bold break-all">
                                    Alyusufftravels@yahoo.com
                                </p>
                            </div>

                            <div className="flex gap-4">
                                <MapPin className="w-5 h-5 text-blue-600" />
                                <p>50, ISHAGA ROAD SURULERE LAGOS</p>
                            </div>

                            <div className="flex gap-4 items-start pt-4 border-t border-white/10">
                                <div className="w-5 h-5 text-blue-600 font-black">₦</div>
                                <div>
                                    <p className="font-bold text-white">LOTUS BANK</p>
                                    <p className="font-mono text-blue-400">1000059454</p>
                                    <p className="text-[10px] uppercase mt-1">AL- YUSUFF INTERNATIONAL TRAVELS AND TOURS LTD</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5 py-10 bg-black/20 text-center">
                <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em]">
                    AL- YUSUFF INTERNATIONAL TRAVELS AND TOURS LTD © 2026
                </p>
            </div>
        </footer>
    );
};

export default Footer;
