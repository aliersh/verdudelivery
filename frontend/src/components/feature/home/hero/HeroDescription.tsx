import { FC } from "react";

const HeroDescription: FC = () => {
    return (
        <p
            className="text-xl text-muted-foreground"
            aria-label="Descripción del servicio"
        >
            Accede a una selección exclusiva de frutas y verduras frescas, con la comodidad de la compra online.
        </p>
    );
};

export default HeroDescription;