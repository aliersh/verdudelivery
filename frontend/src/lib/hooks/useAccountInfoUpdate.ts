import { useState } from "react";

import authApi from "@/lib/api/auth";
import { useCustomer } from "@/lib/contexts/CustomerContext";
import { toast } from "@/lib/hooks/use-toast";
import { AccountFormData } from "@/lib/types/form";

const useAccountUpdate = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { setCustomer } = useCustomer();

    const updateAccount = async (data: AccountFormData) => {
        setIsLoading(true);
        try {
            const updatedCustomer = await authApi.updateCustomer({
                first_name: data.firstName,
                last_name: data.lastName,
                phone: data.phone,
            });

            setCustomer(updatedCustomer);
            toast({
                title: "Perfil actualizado",
                description: "Los cambios han sido guardados exitosamente",
            });
        } catch {
            toast({
                title: "Error",
                description: "No se pudo actualizar el perfil",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, updateAccount };
};

export default useAccountUpdate;
