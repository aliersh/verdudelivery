import { Button } from '../shadcnui/button';

const HeroContent = () => (
    <div className="relative z-10 max-w-2xl px-4 text-center">
        <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl md:text-6xl">
            Verdudelivery en Viña
        </h1>
        <p className="mt-4 text-lg font-medium text-muted sm:text-xl">
            Accede a una selección exclusiva de frutas y verduras frescas, con
            la comodidad de la compra online.
        </p>
        <div className="flex items-center justify-center gap-4 mt-8">
            <Button className="h-10 px-6" variant="destructive">
                Registrate
            </Button>
            <Button className="h-10 px-6">Ver Productos</Button>
        </div>
    </div>
);

export default HeroContent;
