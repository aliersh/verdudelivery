import { Card } from '../shadcnui/card';
import CardIcon from './CardIcon';

const CardContent = ({
    Icon,
    title,
    children,
}: {
    Icon: React.ElementType;
    title: string;
    children: React.ReactNode;
}) => (
    <Card className='p-6 shadow-md'>
        <div className="flex flex-col items-center gap-4 p-6">
            <CardIcon Icon={Icon} />
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-muted-foreground">{children}</p>
        </div>
    </Card>
);

export default CardContent;
