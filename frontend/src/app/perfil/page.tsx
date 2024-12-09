import ProfileForm from "@/components/feature/profile/ProfileForm";

const ProfilePage = () => {
    return (
        <div className="container max-w-2xl py-8">
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold">Perfil</h1>
                    <p className="text-muted-foreground">
                        Administra tu información personal y preferencias
                    </p>
                </div>
                <ProfileForm />
            </div>
        </div>
    );
};

export default ProfilePage; 