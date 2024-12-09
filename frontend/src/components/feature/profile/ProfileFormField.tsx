import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ProfileFormFieldProps {
    id: string;
    label: string;
    placeholder?: string;
    type?: string;
    value?: string;
    readOnly?: boolean;
    onChange?: (value: string) => void;
}

const ProfileFormField = ({
    id,
    label,
    placeholder,
    type = "text",
    value,
    readOnly = false,
    onChange,
}: ProfileFormFieldProps) => {
    return (
        <div className="grid gap-2">
            <Label htmlFor={id}>{label}</Label>
            <Input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                readOnly={readOnly}
                className={`placeholder:text-muted-foreground/50 ${
                    readOnly 
                        ? "bg-muted cursor-default focus-visible:ring-0 focus-visible:ring-offset-0" 
                        : ""
                }`}
                aria-label={label}
                onChange={(e) => onChange?.(e.target.value)}
            />
        </div>
    );
};

export default ProfileFormField; 