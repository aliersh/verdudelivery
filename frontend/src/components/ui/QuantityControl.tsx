import { Minus, Plus } from 'lucide-react';

import { Button } from '../shadcnui/button';

const QuantityControl = () => {
    return (
        <div className="flex items-center mt-2 space-x-2">
            <Button variant="destructive" size="icon">
                <Minus className="w-4 h-4" />
            </Button>
            <span className="w-8 text-center">1</span>
            <Button variant="destructive" size="icon">
                <Plus className="w-4 h-4" />
            </Button>
        </div>
    );
};

export default QuantityControl;

// TODO: add quantity control logic