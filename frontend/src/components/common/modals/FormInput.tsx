import { LockIcon, MailIcon, PhoneIcon, UserIcon } from "lucide-react";
import { FC } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormInputProps } from "@/types/auth";

const FormInput: FC<FormInputProps> = ({ label, type, id, placeholder }) => {
    const iconClassName =
        "absolute left-3 top-2.5 h-4 w-4 text-muted-foreground";

    return (
        <div className="grid gap-2">
            <Label htmlFor={id}>{label}</Label>
            <div className="relative">
                {type === "text" && <UserIcon className={iconClassName} />}
                {type === "email" && <MailIcon className={iconClassName} />}
                {type === "password" && <LockIcon className={iconClassName} />}
                {type === "tel" && <PhoneIcon className={iconClassName} />}
                <Input
                    type={type}
                    id={id}
                    autoFocus={false}
                    placeholder={placeholder}
                    className="pl-9 text-muted-foreground placeholder:text-muted-foreground/50"
                />
            </div>
        </div>
    );
};

export default FormInput;
