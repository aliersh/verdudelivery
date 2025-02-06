import { FC } from "react";

import { Label } from "@/components/ui/label";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { SelectFieldProps } from "@/lib/types/form";

const SelectField: FC<SelectFieldProps> = ({
    id,
    label,
    options,
    placeholder,
    onChange,
    error,
}: SelectFieldProps) => {
    return (
        <div className="grid gap-2">
            <Label htmlFor={id}>{label}</Label>
            <Select onValueChange={onChange}>
                <SelectTrigger id={id}>
                    <SelectValue
                        placeholder={placeholder}
                        className="text-muted-foreground/50"
                    />
                </SelectTrigger>
                <SelectContent>
                    {options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            {error && <p className="mt-1 text-sm text-destructive">{error}</p>}
        </div>
    );
};

export default SelectField;
