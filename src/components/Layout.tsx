import clsx from 'clsx';

type LayoutProps = {
    children: React.ReactNode;
    background: string;
};

export const Layout: React.FC<LayoutProps> = ({ children, background }) => {
    return <section className={clsx('py-20', background)}>{children}</section>;
};
