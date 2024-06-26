import { Hero } from '@homework-task/components/Hero';
import { Layout } from '@homework-task/components/Layout';
import { ComponentNotFound } from '@homework-task/components/page-generator/ComponentNotFound';
import { PanelShowcase } from '@homework-task/components/PanelShowcase';
import { TrustBar } from '@homework-task/components/TrustBar';

type ComponentProps = {
    [key: string]: any;
};

type ComponentConfig = {
    type: string;
    props: ComponentProps;
};

type SectionConfig = {
    type: string;
    props: ComponentProps;
    components: ComponentConfig[];
};

type PageGeneratorProps = {
    data: SectionConfig[];
};

const componentMapping: { [key: string]: React.FC<any> } = {
    componentHero: Hero,
    componentPanelShowcase: PanelShowcase,
    componentTrustBar: TrustBar,
};

const PageGenerator: React.FC<PageGeneratorProps> = ({ data }) => {
    return (
        <div className="page-generator">
            {data.map((section, i) => {
                const layoutProps = section.props || {};

                return (
                    <Layout
                        key={`page-layout-${i}`}
                        background="bg-white"
                        {...layoutProps}
                    >
                        {section.components.map((component, componentIndex) => {
                            const Component = componentMapping[component.type];
                            const componentProps = component.props || {};

                            if (!Component) {
                                return (
                                    <ComponentNotFound
                                        key={componentIndex}
                                        componentType={component.type}
                                    />
                                );
                            }

                            return (
                                <Component
                                    key={componentIndex}
                                    {...componentProps}
                                />
                            );
                        })}
                    </Layout>
                );
            })}
        </div>
    );
};

export default PageGenerator;
