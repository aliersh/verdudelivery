const CardIcon = ({ Icon }: { Icon: React.ElementType }) => (
    <div className="flex items-center justify-center p-3 rounded-full bg-primary">
        <Icon />
    </div>
);

export default CardIcon;
