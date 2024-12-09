import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ProfileFormFieldProps {
    id: string;
    label: string;
    placeholder?: string;
    type?: string;
}

const ProfileFormField = ({
    id,
    label,
    placeholder,
    type = "text",
}: ProfileFormFieldProps) => {
    return (
        <div className="grid gap-2">
            <Label htmlFor={id}>{label}</Label>
            <Input
                id={id}
                type={type}
                placeholder={placeholder}
                className="placeholder:text-muted-foreground/50"
                aria-label={label}
            />
        </div>
    );
};

export default ProfileFormField; 