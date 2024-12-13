import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";

const AddressInfo = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Dirección de entrega</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="street">Calle</Label>
                    <Input id="street" placeholder="Ej: Av. Principal 123" />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="city">Ciudad</Label>
                        <Input id="city" placeholder="Ej: Santiago" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="region">Región</Label>
                        <Select>
                            <SelectTrigger id="region">
                                <SelectValue placeholder="Selecciona una región" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="metropolitana">
                                    Metropolitana
                                </SelectItem>
                                <SelectItem value="valparaiso">
                                    Valparaíso
                                </SelectItem>
                                <SelectItem value="biobio">Bío Bío</SelectItem>
                                {/* Add other regions as needed */}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <Button>Guardar dirección</Button>
            </CardContent>
        </Card>
    );
};

export default AddressInfo;
