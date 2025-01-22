import { FC } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PasswordChangeForm: FC = () => {
    return (
        <div className="max-w-md space-y-4">
            <div className="space-y-2">
                <Label htmlFor="currentPassword">Contraseña actual</Label>
                <Input
                    id="currentPassword"
                    type="password"
                    placeholder="••••••••"
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="newPassword">Nueva contraseña</Label>
                <Input
                    id="newPassword"
                    type="password"
                    placeholder="••••••••"
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="confirmPassword">
                    Confirmar nueva contraseña
                </Label>
                <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                />
            </div>
            <Button className="mt-2">Cambiar contraseña</Button>
        </div>
    );
};

export default PasswordChangeForm;
