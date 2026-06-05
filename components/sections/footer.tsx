import Image from 'next/image';
import Link from 'next/link';
import { contactInfo, footerQuickLinks, footerCompanyLinks, specialtyPages } from '@/lib/content';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue-deep text-white">
      <div className="container-main section-py">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/RS-medical-logo.png" alt="RS Medical Agency" width={100} height={100} />
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Trusted healthcare distribution connecting manufacturers, pharmacies, hospitals,
              and institutions across the region and beyond.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/60 text-sm hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerCompanyLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/60 text-sm hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">Specialties</h4>
            <ul className="space-y-2.5">
              {specialtyPages.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">Reach Us</h4>
            <div className="space-y-3 text-white/60 text-sm">
              <p className="leading-relaxed">{contactInfo.address}</p>
              <p>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </p>
              <p>
                <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </p>
              <div className="flex gap-3 pt-2">
                <a href={contactInfo.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/40 hover:text-white transition-colors">
                  <FaFacebook size={18} />
                </a>
                <a href={contactInfo.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/40 hover:text-white transition-colors">
                  <FaInstagram size={18} />
                </a>
                <a href={contactInfo.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/40 hover:text-white transition-colors">
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-main py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div className="flex items-center gap-4">
            <span>&copy; {year} RS Medical Agency</span>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
          <p className="text-center md:text-right">
            RS Medical Agency supplies to licensed institutions and businesses only, not to individual consumers.
          </p>
        </div>
      </div>
    </footer>
  );
}
