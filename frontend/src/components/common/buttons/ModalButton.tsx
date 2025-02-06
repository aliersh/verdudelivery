import { FC } from "react";

import { Button } from "@/components/ui/button";

interface ModalButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}

const ModalButton: FC<ModalButtonProps> = ({ label, ...props }) => {
    return (
        <Button variant="link" className="h-auto p-0 font-normal" {...props}>
            {label}
        </Button>
    );
};

export default ModalButton;
