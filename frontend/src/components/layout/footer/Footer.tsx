"use client";

import { FC } from 'react';

import ContactInfo from '@/components/layout/footer/ContactInfo';
import FooterCopyright from '@/components/layout/footer/FooterCopyright';
import SocialLinks from '@/components/layout/footer/SocialLinks';
import { SiInstagram } from '@icons-pack/react-simple-icons';

const Footer: FC = () => {
    return (
        <footer
            className="w-full py-8 bg-muted"
            aria-label="Footer"
            role="contentinfo"
        >
            <div className="container">
                <div className="grid items-center grid-cols-3 gap-8">
                    <ContactInfo />
                    <div className="flex items-center justify-center">
                        <SocialLinks
                            href="#"
                            icon={SiInstagram}
                            label="Verdudelivery Instagram"
                        />
                    </div>
                    <FooterCopyright />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
