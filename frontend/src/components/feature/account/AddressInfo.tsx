import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { cities } from "@/lib/data/cities";

// TODO: Add address api call and management

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
                        <Select>
                            <SelectTrigger id="city">
                                <SelectValue placeholder="Selecciona una ciudad" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="placeholder" disabled>
                                    Selecciona una ciudad
                                </SelectItem>
                                {cities.map((city) => (
                                    <SelectItem key={city.id} value={city.value}>
                                        {city.name}
                                    </SelectItem>
                                ))}
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
