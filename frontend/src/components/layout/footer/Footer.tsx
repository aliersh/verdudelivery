import { FC } from "react";
import { Instagram } from "lucide-react";

import ContactInfo from "@/components/layout/footer/ContactInfo";
import FooterCopyright from "@/components/layout/footer/FooterCopyright";
import SocialLinks from "@/components/layout/footer/SocialLinks";

const Footer: FC = () => {
    return (
        <footer className="w-full py-8 bg-muted md:py-12">
            <div className="container grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                <ContactInfo />
                <div className="flex items-center justify-center">
                    <SocialLinks
                        href="#"
                        icon={Instagram}
                        label="Verdudelivery Instagram"
                    />
                </div>
                <FooterCopyright />
            </div>
        </footer>
    );
};

export default Footer;
