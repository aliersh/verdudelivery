"use client";

import { Loader2 } from "lucide-react";
import { FC } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCustomer } from "@/lib/contexts/CustomerContext";
import useAccountForm from "@/lib/hooks/useAccountInfoForm";
import useAccountUpdate from "@/lib/hooks/useAccountInfoUpdate";

import AccountFormFields from "./AccountInfoFormFields";

const AccountInfo: FC = () => {
    const { customer } = useCustomer();
    const form = useAccountForm(customer);
    const { isLoading, updateAccount } = useAccountUpdate();

    return (
        <Card>
            <CardHeader>
                <CardTitle>Información Personal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <form
                    onSubmit={form.handleSubmit(updateAccount)}
                    className="space-y-6"
                >
                    <AccountFormFields
                        register={form.register}
                        errors={form.formState.errors}
                    />
                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full md:w-auto"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                Guardando...
                            </>
                        ) : (
                            "Guardar cambios"
                        )}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default AccountInfo;
