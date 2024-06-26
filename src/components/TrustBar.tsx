import Marquee from 'react-fast-marquee';

type TrustBarProps = {
    images: string[];
};

export const TrustBar: React.FC<TrustBarProps> = ({ images }) => {
    return (
        <Marquee>
            {images.map((image, i) => (
                <img
                    width={100}
                    key={`trustbar-image-${i}`}
                    src={image}
                    className="mx-10"
                />
            ))}
        </Marquee>
    );
};
