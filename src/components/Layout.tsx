import clsx from 'clsx';

type LayoutProps = {
    children: React.ReactNode;
    background: string;
    className?: string;
    [key: string]: any;
};

export const Layout: React.FC<LayoutProps> = ({
    children,
    background,
    className,
    ...props
}) => {
    return (
        <section className={clsx('py-20', background, className)} {...props}>
            {children}
        </section>
    );
};
