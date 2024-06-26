type ComponentNotFoundProps = {
    componentType: string;
};

export const ComponentNotFound: React.FC<ComponentNotFoundProps> = ({
    componentType,
}) => {
    return (
        <div className="text-center my-6">
            <span className="text-black text-mainRed">
                Component type <strong>{`"${componentType}"`}</strong> is not
                defined.
            </span>
        </div>
    );
};
