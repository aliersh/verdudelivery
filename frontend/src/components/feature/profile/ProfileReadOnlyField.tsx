interface ProfileReadOnlyFieldProps {
    label: string;
    value: string;
}

const ProfileReadOnlyField = ({ label, value }: ProfileReadOnlyFieldProps) => {
    return (
        <div className="grid gap-1.5">
            <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {label}
            </span>
            <span className="text-sm text-muted-foreground">
                {value || "—"}
            </span>
        </div>
    );
};

export default ProfileReadOnlyField; 