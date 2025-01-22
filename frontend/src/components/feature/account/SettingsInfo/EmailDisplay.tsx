import { FC } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const EmailDisplay: FC = () => {
    return (
        <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
                id="email"
                type="email"
                value="usuario@ejemplo.com"
                disabled
                className="max-w-md bg-muted"
            />
            <p className="text-sm text-muted-foreground">
                El email no puede ser modificado
            </p>
        </div>
    );
};

export default EmailDisplay;
