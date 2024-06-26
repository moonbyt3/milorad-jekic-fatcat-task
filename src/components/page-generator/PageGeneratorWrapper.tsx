import PageGenerator from '@homework-task/components/page-generator/PageGenerator';

const data = [
    {
        type: 'layoutSection',
        props: { className: 'section-hero' },
        components: [
            {
                type: 'componentHero',
                props: {
                    title: 'Welcome',
                    image: 'https://via.placeholder.com/635x1080',
                },
            },
        ],
    },
    {
        type: 'layoutSection',
        props: { className: 'section-items-showcase' },
        components: [
            {
                type: 'componentPanelShowcase',
                props: {
                    className: 'fooo',
                    items: [
                        {
                            title: 'Lorem Ipsum',
                            description:
                                'Lorem ipsum dolor sit amet consecetatur adipiscis est.',
                            image: 'https://via.placeholder.com/50x50',
                        },
                        {
                            title: 'Lorem Ipsum',
                            description:
                                'Lorem ipsum dolor sit amet consecetatur adipiscis est.',
                            image: 'https://via.placeholder.com/50x50',
                        },
                        {
                            title: 'Lorem Ipsum',
                            description:
                                'Lorem ipsum dolor sit amet consecetatur adipiscis est.',
                            image: 'https://via.placeholder.com/50x50',
                        },
                    ],
                },
            },
            {
                type: 'componentTrustBar',
                props: {
                    images: [
                        'https://via.placeholder.com/100x100',
                        'https://via.placeholder.com/100x100',
                        'https://via.placeholder.com/100x100',
                        'https://via.placeholder.com/100x100',
                        'https://via.placeholder.com/100x100',
                        'https://via.placeholder.com/100x100',
                        'https://via.placeholder.com/100x100',
                        'https://via.placeholder.com/100x100',
                        'https://via.placeholder.com/100x100',
                        'https://via.placeholder.com/100x100',
                        'https://via.placeholder.com/100x100',
                        'https://via.placeholder.com/100x100',
                    ],
                },
            },
        ],
    },
];

const PageGeneratorWrapper = () => {
    return (
        <>
            <h2 className="py-8 text-black text-3xl xl:text-5xl leading-normal font-medium text-center">
                Page Generator component
            </h2>
            <PageGenerator data={data} />
        </>
    );
};

export default PageGeneratorWrapper;
