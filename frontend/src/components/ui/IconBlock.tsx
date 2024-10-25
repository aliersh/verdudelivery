// components/section/IconBlock.js
"use client";

const IconBlock = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
    return (
        <div className="flex">
            {icon}
            <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
                <p className="mt-1 text-muted-foreground">{description}</p>
            </div>
        </div>
    );
};

export default IconBlock;