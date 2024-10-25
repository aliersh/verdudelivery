"use client";

import { FC } from "react";
import { CalendarClock, MapPinCheck, UserRoundCheck } from "lucide-react";
import IconBlock from "@/components/ui/IconBlock";

const IconsSection: FC = () => {
    return (
        <>
            {/* Icon Blocks */}
            <div className="container py-24 lg:py-32">
                <div className="max-w-2xl mx-auto">
                    {/* Grid */}
                    <div className="grid gap-12">
                        <div className="space-y-6 lg:space-y-10">
                            {/* Icon Block */}
                            <IconBlock
                                icon={<MapPinCheck className="flex-shrink-0 mt-2 h-6 w-6" />}
                                title="Dónde"
                                description="Nuestro servicio está disponible exclusivamente en Viña del Mar, Valparaíso y Quilpué. Asegúrate de que tu ubicación esté dentro de estas ciudades para disfrutar de nuestras entregas rápidas y frescas."
                            />
                            {/* End Icon Block */}
                            {/* Icon Block */}
                            <IconBlock
                                icon={<CalendarClock className="flex-shrink-0 mt-2 h-6 w-6" />}
                                title="Cuándo"
                                description="Realizamos entregas únicamente los miércoles y viernes. Asegúrate de realizar tu pedido con anticipación para recibir tus productos frescos en estos días."
                            />
                            {/* End Icon Block */}
                            {/* Icon Block */}
                            <IconBlock
                                icon={<UserRoundCheck className="flex-shrink-0 mt-2 h-6 w-6" />}
                                title="Cómo"
                                description="Navega por nuestro catálogo, añade tus productos favoritos al carrito y procede al pago de manera segura. Regístrate o inicia sesión para gestionar tus pedidos fácilmente y disfruta de un proceso de compra rápido y sencillo."
                            />
                            {/* End Icon Block */}
                        </div>
                    </div>
                    {/* End Grid */}
                </div>
            </div>
            {/* End Icon Blocks */}
        </>
    );
};

export default IconsSection;
