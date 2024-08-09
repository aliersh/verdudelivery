import { Card } from "@/components/ui/card";
import {
    CalendarClock,
    MapPinCheck,
    UserRoundCheck,
} from "lucide-react";

export default function Essentials() {
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
                    <Card>
                        <div className="flex flex-col items-center gap-4 p-6">
                            <div className="flex items-center justify-center p-3 rounded-full bg-primary">
                                <MapPinCheck />
                            </div>
                            <h3 className="text-xl font-bold">Donde</h3>
                            <p className="text-muted-foreground">
                                Nuestro servicio está disponible exclusivamente
                                en Viña del Mar, Valparaíso y Quilpué. Asegúrate
                                de que tu ubicación esté dentro de estas
                                ciudades para disfrutar de nuestras entregas
                                rápidas y frescas.
                            </p>
                        </div>
                    </Card>
                    <Card>
                        <div className="flex flex-col items-center gap-4 p-6">
                            <div className="flex items-center justify-center p-3 rounded-full bg-primary">
                                {/* <FilePenIcon className="w-6 h-6 text-primary-foreground" /> */}
                                <UserRoundCheck />
                            </div>
                            <h3 className="text-xl font-bold">Como</h3>
                            <p className="text-muted-foreground">
                                Navega por nuestro catálogo, añade tus productos
                                favoritos al carrito y procede al pago de manera
                                segura. Regístrate o inicia sesión para
                                gestionar tus pedidos fácilmente y disfruta de
                                un proceso de compra rápido y sencillo.
                            </p>
                        </div>
                    </Card>
                    <Card>
                        <div className="flex flex-col items-center gap-4 p-6">
                            <div className="flex items-center justify-center p-3 rounded-full bg-primary">
                                {/* <ClockIcon className="w-6 h-6 text-primary-foreground" /> */}
                                <CalendarClock />
                            </div>
                            <h3 className="text-xl font-bold">Cuando</h3>
                            <p className="text-muted-foreground">
                                Realizamos entregas únicamente los miércoles y
                                viernes. Asegúrate de realizar tu pedido con
                                anticipación para recibir tus productos frescos
                                en estos días.
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}

