"use client";

import { User } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { MenuItem, UserMenuProps } from "@/lib/types/navigation";

const menuItems: MenuItem[] = [
    {
        label: "Cuenta",
        href: "/cuenta",
    },
    {
        label: "Órdenes anteriores",
        href: "/ordenes",
    },
];

const UserMenu: FC<UserMenuProps> = ({ onLogout }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="relative inline-flex items-center justify-center p-0 transition-colors rounded-lg h-9 w-9 hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <Avatar className="h-7 w-7">
                    <AvatarFallback className="bg-transparent">
                        <User className="w-5 h-5" />
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                {menuItems.map((item) => (
                    <DropdownMenuItem asChild key={item.href}>
                        <Link href={item.href}>{item.label}</Link>
                    </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={onLogout}
                    className="text-destructive hover:text-destructive-foreground focus:text-destructive-foreground"
                >
                    Cerrar sesión
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserMenu;
