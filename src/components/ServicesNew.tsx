
interface ServiceDetail {
    title: string;
    description: string;
    features: string[];
}

const servicesData: ServiceDetail[] = [
    {
        title: 'HAJJ PACKAGES',
        description: 'Fulfill your Hajj obligations with peace of mind',
        features: [
            'Comprehensive visa and documentation processing',
            'Flight and ground transportation arrangements',
            'Accommodation in safe, accessible locations',
            'Experienced guides and on ground support',
            'Tailored packages for individuals, families, and groups'
        ]
    },
    {
        title: 'UMRAH PACKAGES',
        description: 'Spiritual journey with comfort and convenience',
        features: [
            'Flight bookings and airport transfers',
            'Comfortable and convenient accommodation near the Haram',
            'Guided tours and spiritual support',
            'Visa and documentation assistance',
            'Flexible Pay-Small-Small payment plan'
        ]
    },
    {
        title: 'AIRLINE TICKET BOOKING',
        description: 'Reliable ticket booking for local and international travels',
        features: [
            'Airline tickets for Umrah, Hajj, and general travel',
            'Domestic and international flight arrangements',
            'Group and corporate ticketing',
            'Transparent pricing with confirmation on payment'
        ]
    },
    {
        title: 'INTERNATIONAL TRAVEL SERVICES',
        description: 'Full travel solutions beyond religious trips',
        features: [
            'Hotel reservations and accommodation arrangements',
            'Visa processing and travel documentation',
            'Airport transfers and travel assistance',
            'Group or corporate travel packages'
        ]
    },
    {
        title: 'FLEXIBLE PAYMENT PLANS',
        description: 'Making travel affordable for everyone',
        features: [
            'Pay-Small-Small / Gradual Payment Options',
            'No pressure or fixed schedules',
            'Secure and transparent payment tracking',
            'Confirmation of booking as soon as payment is made'
        ]
    },
    {
        title: 'GROUP TOURS',
        description: 'Organized group travel experiences',
        features: [
            'Customized itineraries for groups',
            'Group discounts and special rates',
            'Dedicated group coordinators',
            'Complete travel package management'
        ]
    }
];

export default function ServicesPackages() {
    const styles = `
    .services-container {
      background: linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%);
      padding: 60px 20px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    .services-header {
      text-align: center;
      margin-bottom: 60px;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }

    .services-header h1 {
      font-size: 2.8rem;
      font-weight: 700;
      color: #1a3a52;
      margin: 0 0 15px 0;
      letter-spacing: -0.5px;
    }

    .services-header p {
      font-size: 1.1rem;
      color: #666;
      margin: 0;
      line-height: 1.6;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 30px;
      max-width: 1400px;
      margin: 0 auto;
    }

    .service-card {
      background: white;
      border-radius: 12px;
      padding: 40px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
      border-left: 4px solid #d4a574;
    }

    .service-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
    }

    .service-card-title {
      font-size: 1.4rem;
      font-weight: 700;
      color: #1a3a52;
      margin: 0 0 10px 0;
    }

    .service-card-description {
      font-size: 0.95rem;
      color: #666;
      margin: 0 0 20px 0;
      line-height: 1.5;
      font-style: italic;
    }

    .features-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .features-list li {
      font-size: 0.9rem;
      color: #555;
      margin-bottom: 12px;
      padding-left: 24px;
      position: relative;
      line-height: 1.5;
    }

    .features-list li:before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #d4a574;
      font-weight: bold;
      font-size: 1.1rem;
    }

    .features-list li:last-child {
      margin-bottom: 0;
    }

    @media (max-width: 768px) {
      .services-container {
        padding: 40px 15px;
      }

      .services-header h1 {
        font-size: 2rem;
      }

      .services-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }

      .service-card {
        padding: 30px;
      }

      .service-card-title {
        font-size: 1.2rem;
      }
    }
  `;

    return (
        <>
            <style>{styles}</style>
            <div id='services' className="services-container">
                <div className="services-header">
                    <h1>Our Travel Services</h1>
                    <p>Comprehensive travel solutions for religious journeys, international travel, and group adventures</p>
                </div>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div key={index} className="service-card">
                            <h2 className="service-card-title">{service.title}</h2>
                            <p className="service-card-description">{service.description}</p>
                            <ul className="features-list">
                                {service.features.map((feature, featureIndex) => (
                                    <li key={featureIndex}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
