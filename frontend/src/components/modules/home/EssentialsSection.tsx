import { CalendarClock, MapPinCheck, UserRoundCheck } from "lucide-react";
import CardContent from "../../ui/CardContent";

const EssentialsSection = () => {
    return (
        <section className="container py-12 md:py-24 lg:py-12">
            <div className="container px-4 space-y-8 md:px-6">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Lo Esencial
                    </h2>
                    <p className="text-muted-foreground md:text-xl">
                        Información fundamental para entender cómo, dónde y
                        cuándo.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <CardContent Icon={MapPinCheck} title="Donde">
                        Nuestro servicio está disponible exclusivamente en Viña
                        del Mar, Valparaíso y Quilpué. Asegúrate de que tu
                        ubicación esté dentro de estas ciudades para disfrutar
                        de nuestras entregas rápidas y frescas.
                    </CardContent>
                    <CardContent Icon={UserRoundCheck} title="Como">
                        Navega por nuestro catálogo, añade tus productos
                        favoritos al carrito y procede al pago de manera segura.
                        Regístrate o inicia sesión para gestionar tus pedidos
                        fácilmente y disfruta de un proceso de compra rápido y
                        sencillo.
                    </CardContent>
                    <CardContent Icon={CalendarClock} title="Cuando">
                        Realizamos entregas únicamente los miércoles y viernes.
                        Asegúrate de realizar tu pedido con anticipación para
                        recibir tus productos frescos en estos días.
                    </CardContent>
                </div>
            </div>
        </section>
    );
};

export default EssentialsSection;
