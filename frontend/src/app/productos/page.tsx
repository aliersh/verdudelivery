import Category from "@/components/features/products/components/Category";

const Productos = () => {
    return (
        <div className="max-w-4xl px-4 mx-auto">
            <Category params={{ handle: "verduras" }} />
            <Category params={{ handle: "frutas" }} />
            <Category params={{ handle: "legumbres" }} />
            <Category params={{ handle: "otros" }} />
        </div>
    );
};

export default Productos;
