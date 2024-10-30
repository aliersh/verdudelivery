"use client";

import { CalendarClock, MapPinCheck, UserRoundCheck } from 'lucide-react';
import { FC } from 'react';

import IconBlock from '@/components/layout/hero/IconBlock';

const IconsSection: FC = () => {
    return (
        <>
            <div className="container py-24 lg:py-32">
                <div className="max-w-2xl mx-auto">
                    {/* Grid */}
                    <div className="grid gap-12">
                        <div className="space-y-6 lg:space-y-10">
                            <IconBlock
                                icon={
                                    <MapPinCheck className="flex-shrink-0 w-6 h-6 mt-2" />
                                }
                                title="Dónde"
                                description="Nuestro servicio está disponible exclusivamente en Viña del Mar, Valparaíso y Quilpué. Asegúrate de que tu ubicación esté dentro de estas ciudades para disfrutar de nuestras entregas rápidas y frescas."
                            />
                            <IconBlock
                                icon={
                                    <CalendarClock className="flex-shrink-0 w-6 h-6 mt-2" />
                                }
                                title="Cuándo"
                                description="Realizamos entregas únicamente los miércoles y viernes. Asegúrate de realizar tu pedido con anticipación para recibir tus productos frescos en estos días."
                            />
                            <IconBlock
                                icon={
                                    <UserRoundCheck className="flex-shrink-0 w-6 h-6 mt-2" />
                                }
                                title="Cómo"
                                description="Navega por nuestro catálogo, añade tus productos favoritos al carrito y procede al pago de manera segura. Regístrate o inicia sesión para gestionar tus pedidos fácilmente y disfruta de un proceso de compra rápido y sencillo."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default IconsSection;
