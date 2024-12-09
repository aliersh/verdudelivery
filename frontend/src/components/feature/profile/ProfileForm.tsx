"use client";

import { Button } from "@/components/common/buttons/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ProfileFormField from "./ProfileFormField";
import { useState } from "react";

// Type for user profile data
interface UserProfile {
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    city: string;
    region: string;
}

// Mock data - replace this with actual user data from the backend
const mockUserData: UserProfile = {
    firstName: "Oscar",
    lastName: "Acevedo",
    phone: "+56 9 1234 5678",
    address: "Av. Principal 123",
    city: "Viña del Mar",
    region: "Valparaíso",
};

const ProfileForm = () => {
    const [isEditingPersonal, setIsEditingPersonal] = useState(false);
    const [isEditingAddress, setIsEditingAddress] = useState(false);
    const [userData, setUserData] = useState<UserProfile>(mockUserData);

    const handleInputChange = (id: keyof UserProfile, value: string) => {
        setUserData(prev => ({ ...prev, [id]: value }));
    };

    const handleSavePersonal = async () => {
        // TODO: Make API call to save personal information
        setIsEditingPersonal(false);
    };

    const handleSaveAddress = async () => {
        // TODO: Make API call to save address information
        setIsEditingAddress(false);
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-6">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <h2 className="text-xl font-semibold">
                            Información Personal
                        </h2>
                        <Button
                            type="button"
                            variant={isEditingPersonal ? "accent" : "default"}
                            onClick={isEditingPersonal ? handleSavePersonal : () => setIsEditingPersonal(true)}
                            aria-label={isEditingPersonal ? "Guardar información personal" : "Editar información personal"}
                        >
                            {isEditingPersonal ? "Guardar" : "Editar"}
                        </Button>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <ProfileFormField
                                id="firstName"
                                label="Nombre"
                                placeholder="Oscar"
                                value={userData.firstName}
                                readOnly={!isEditingPersonal}
                                onChange={(value) => handleInputChange('firstName', value)}
                            />
                            <ProfileFormField
                                id="lastName"
                                label="Apellido"
                                placeholder="Acevedo"
                                value={userData.lastName}
                                readOnly={!isEditingPersonal}
                                onChange={(value) => handleInputChange('lastName', value)}
                            />
                        </div>
                        <ProfileFormField
                            id="phone"
                            label="Teléfono"
                            placeholder="+56 9 1234 5678"
                            type="tel"
                            value={userData.phone}
                            readOnly={!isEditingPersonal}
                            onChange={(value) => handleInputChange('phone', value)}
                        />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <h2 className="text-xl font-semibold">
                            Dirección de Entrega
                        </h2>
                        <Button
                            type="button"
                            variant={isEditingAddress ? "accent" : "default"}
                            onClick={isEditingAddress ? handleSaveAddress : () => setIsEditingAddress(true)}
                            aria-label={isEditingAddress ? "Guardar dirección" : "Editar dirección"}
                        >
                            {isEditingAddress ? "Guardar" : "Editar"}
                        </Button>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <ProfileFormField
                            id="address"
                            label="Dirección"
                            placeholder="Av. Principal 123"
                            value={userData.address}
                            readOnly={!isEditingAddress}
                            onChange={(value) => handleInputChange('address', value)}
                        />
                        <div className="grid gap-4 sm:grid-cols-2">
                            <ProfileFormField
                                id="city"
                                label="Ciudad"
                                placeholder="Viña del Mar"
                                value={userData.city}
                                readOnly={!isEditingAddress}
                                onChange={(value) => handleInputChange('city', value)}
                            />
                            <ProfileFormField
                                id="region"
                                label="Región"
                                placeholder="Valparaíso"
                                value={userData.region}
                                readOnly={!isEditingAddress}
                                onChange={(value) => handleInputChange('region', value)}
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </form>
    );
};

export default ProfileForm; 