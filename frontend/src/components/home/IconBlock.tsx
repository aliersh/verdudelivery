import { FC } from 'react';

import { IconBlockProps } from '@/types/ui';

const IconBlock: FC<IconBlockProps> = ({ icon, title, description }) => {
    return (
        <article className="flex" aria-label={title} role="article">
            {icon}
            <div className="ms-5">
                <h3 className="text-base font-semibold">{title}</h3>
                <p className="mt-1 text-muted-foreground">{description}</p>
            </div>
        </article>
    );
};

export default IconBlock;
