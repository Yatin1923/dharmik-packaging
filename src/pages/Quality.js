import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/common/Breadcrumbs';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import './Quality.css';

const qualityStandards = [
  {
    title: 'Raw Material Inspection',
    description: 'Every batch of kraft paper and other raw materials undergoes thorough inspection for GSM, moisture content, and fiber quality before entering production.',
    icon: '1',
  },
  {
    title: 'Production Monitoring',
    description: 'Continuous monitoring during the corrugation, printing, and die-cutting processes ensures consistent quality and dimensional accuracy.',
    icon: '2',
  },
  {
    title: 'Burst Strength Testing',
    description: 'All corrugated products are tested for burst strength to ensure they meet or exceed industry standards for their intended application.',
    icon: '3',
  },
  {
    title: 'Compression Testing',
    description: 'Edge crush tests (ECT) and box compression tests (BCT) verify the stacking strength and structural integrity of every product.',
    icon: '4',
  },
  {
    title: 'Moisture Resistance',
    description: 'Products are tested for moisture resistance to ensure reliable performance in various storage and shipping conditions.',
    icon: '5',
  },
  {
    title: 'Final Inspection',
    description: 'A comprehensive final quality check covers dimensions, print quality, structural integrity, and packaging before dispatch.',
    icon: '6',
  },
];

const certifications = [
  { name: 'ISO 9001:2015', description: 'Quality Management System compliant', status: 'Compliant' },
  { name: 'BIS Standards', description: 'Bureau of Indian Standards compliant', status: 'Compliant' },
  { name: 'FSC Certified', description: 'Responsible forestry and sourcing', status: 'Working Towards' },
  { name: 'FSSAI Approved', description: 'Food-safe packaging materials', status: 'Compliant' },
];

const Quality = () => {
  return (
    <div className="page">
      <Breadcrumbs items={[{ label: 'Quality & Certifications' }]} />

      <section className="page-hero">
        <div className="container">
          <p className="section-subtitle">Quality Assurance</p>
          <h1>Quality & Certifications</h1>
          <p>Our commitment to quality is embedded in every step of our manufacturing process.</p>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="section">
        <div className="container">
          <div className="quality-promise" data-aos="fade-up">
            <div className="quality-promise__content">
              <p className="section-subtitle">Our Promise</p>
              <h2>Uncompromising Quality Standards</h2>
              <p>
                At Dharmik Packaging Industries, quality isn't just a department — it's a culture. From raw material 
                selection to final delivery, every step in our process is governed by strict quality 
                protocols that ensure our corrugated packaging products meet the highest industry standards.
              </p>
              <p>
                Our dedicated quality team conducts multiple tests at various stages of production, 
                ensuring that every box, sheet, and roll that leaves our facility is worthy of carrying 
                your products.
              </p>
            </div>
            <div className="quality-promise__stats">
              <div className="quality-stat">
                <span className="quality-stat__number">100%</span>
                <span className="quality-stat__label">Inspection Rate</span>
              </div>
              <div className="quality-stat">
                <span className="quality-stat__number">&lt;1%</span>
                <span className="quality-stat__label">Defect Rate</span>
              </div>
              <div className="quality-stat">
                <span className="quality-stat__number">6</span>
                <span className="quality-stat__label">Quality Checkpoints</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="section quality-process-section">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Our Process</p>
            <h2>Quality Control at Every Step</h2>
            <p>Six rigorous checkpoints ensure your packaging meets the highest standards.</p>
          </div>
          <div className="quality-process-grid">
            {qualityStandards.map((standard, index) => (
              <div key={index} className="quality-process-card" data-aos="fade-up" data-aos-delay={index * 80}>
                <div className="quality-process-card__number">{standard.icon}</div>
                <h4>{standard.title}</h4>
                <p>{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Certifications</p>
            <h2>Standards & Compliance</h2>
          </div>
          <div className="quality-certs-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="quality-cert-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className={`quality-cert-card__badge ${cert.status === 'Compliant' ? 'quality-cert-card__badge--active' : ''}`}>
                  {cert.status === 'Compliant' ? <CheckCircleIcon style={{ fontSize: '24px' }} /> : <RadioButtonCheckedIcon style={{ fontSize: '24px' }} />}
                </div>
                <h4>{cert.name}</h4>
                <p>{cert.description}</p>
                <span className={`quality-cert-card__status ${cert.status === 'Compliant' ? 'quality-cert-card__status--active' : ''}`}>
                  {cert.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="quality-cta dark-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Quality You Can Trust</h2>
          <p style={{ maxWidth: '500px', margin: '0 auto var(--space-xl)' }}>
            Experience our commitment to quality firsthand. Request samples or schedule a facility visit.
          </p>
          <Link to="/contact" className="btn-accent">Contact Us</Link>
        </div>
      </section>
    </div>
  );
};

export default Quality;
