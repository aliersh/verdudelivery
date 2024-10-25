import { FC } from "react";
import Logo from "@/components/shared/Logo";

const ContactInfo: FC = () => (
    <div className="flex flex-col items-start gap-4">
        <Logo />
        <span className="sr-only">Verdudelivery</span>
        <div className="grid gap-1 text-muted-foreground">
            <div>info@verdudelivery.cl</div>
            <div>+56 9 9078 5716</div>
        </div>
    </div>
);

export default ContactInfo;
