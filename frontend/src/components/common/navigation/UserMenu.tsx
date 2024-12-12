"use client";

import { User } from "lucide-react";
import Link from "next/link";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { UserMenuProps } from "@/lib/types/navigation";

const UserMenu = ({ onLogout }: UserMenuProps) => {
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
                <DropdownMenuItem asChild>
                    <Link href="/cuenta">Cuenta</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="/ordenes">Órdenes anteriores</Link>
                </DropdownMenuItem>
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
