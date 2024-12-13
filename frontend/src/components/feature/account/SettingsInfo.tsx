import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SettingsInfo = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Configuración de la cuenta</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
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
                <div className="max-w-md space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="currentPassword">
                            Contraseña actual
                        </Label>
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
                <div className="pt-6 border-t">
                    <Button
                        variant="destructive"
                        className="text-white hover:bg-destructive/90"
                    >
                        Eliminar cuenta
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default SettingsInfo;
