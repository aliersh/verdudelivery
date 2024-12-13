"use client";

import AccountInfo from "@/components/feature/account/AccountInfo";
import AccountNav from "@/components/feature/account/AccountNav";
import AddressInfo from "@/components/feature/account/AddressInfo";
import SettingsInfo from "@/components/feature/account/SettingsInfo";

const SECTIONS = [
    {
        id: "personal",
        title: "Información Personal",
    },
    {
        id: "addresses",
        title: "Dirección de entrega",
    },
    {
        id: "settings",
        title: "Configuración de la cuenta",
    },
];

const AccountPage = () => {
    return (
        <div className="container px-4 mx-auto">
            <div className="flex gap-8 py-6">
                <AccountNav sections={SECTIONS} />
                <div className="flex-1 min-w-0 space-y-6">
                    <div id="personal">
                        <AccountInfo />
                    </div>
                    <div id="addresses">
                        <AddressInfo />
                    </div>
                    <div id="settings">
                        <SettingsInfo />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountPage;
