import Logo from "@/components/common/logo/Logo";
import PasswordResetForm from "@/components/feature/auth/password-reset/PasswordResetForm";

const PasswordResetPage = () => {
    return (
        <div className="container relative grid flex-col items-center justify-center min-h-screen lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative flex-col hidden h-full p-10 text-white bg-muted lg:flex dark:border-r">
                <div className="absolute inset-0 bg-zinc-900" />{" "}
                {/* //TODO: Add background image */}
                <div className="relative z-20 flex items-center text-lg font-medium">
                    <Logo />
                </div>
                <div className="relative z-20 mt-auto">
                    <blockquote className="space-y-2">
                        <p className="text-lg">
                            Los mejores productos frescos, directo a tu puerta.
                        </p>
                    </blockquote>
                </div>
            </div>
            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <PasswordResetForm />
                </div>
            </div>
        </div>
    );
};

export default PasswordResetPage;
