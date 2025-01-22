import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { AccountFormData } from "@/lib/types/form";

const useAccountForm = (customer: any | null) => {
    const form = useForm<AccountFormData>({
        mode: "onBlur",
    });

    useEffect(() => {
        if (customer) {
            form.reset({
                firstName: customer.first_name || "",
                lastName: customer.last_name || "",
                phone: customer.phone || "",
            });
        }
    }, [customer, form.reset]);

    return form;
};

export default useAccountForm;
