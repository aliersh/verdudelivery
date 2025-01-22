import { FC } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import EmailDisplay from "./EmailDisplay";
import PasswordChangeForm from "./PasswordChangeForm";

const SettingsInfo: FC = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Configuración de la cuenta</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <EmailDisplay />
                <PasswordChangeForm />
            </CardContent>
        </Card>
    );
};

export default SettingsInfo;