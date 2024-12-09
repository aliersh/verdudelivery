import { Button } from "@/components/common/buttons/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ProfileFormField from "./ProfileFormField";

const ProfileForm = () => {
    return (
        <form>
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <h2 className="text-xl font-semibold">
                            Información Personal
                        </h2>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <ProfileFormField
                                id="firstName"
                                label="Nombre"
                                placeholder="Oscar"
                            />
                            <ProfileFormField
                                id="lastName"
                                label="Apellido"
                                placeholder="Acevedo"
                            />
                        </div>
                        <ProfileFormField
                            id="phone"
                            label="Teléfono"
                            placeholder="+56 9 1234 5678"
                            type="tel"
                        />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <h2 className="text-xl font-semibold">
                            Dirección de Entrega
                        </h2>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <ProfileFormField
                            id="address"
                            label="Dirección"
                            placeholder="Av. Principal 123"
                        />
                        <div className="grid gap-4 sm:grid-cols-2">
                            <ProfileFormField
                                id="city"
                                label="Ciudad"
                                placeholder="Viña del Mar"
                            />
                            <ProfileFormField
                                id="region"
                                label="Región"
                                placeholder="Valparaíso"
                            />
                        </div>
                    </CardContent>
                </Card>

                <div className="flex justify-end">
                    <Button 
                        type="submit" 
                        className="w-full sm:w-auto"
                        aria-label="Guardar cambios"
                    >
                        Guardar cambios
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default ProfileForm; 