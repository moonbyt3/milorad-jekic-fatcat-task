import { useMutation } from '@tanstack/react-query';

import FormField from '@homework-task/components/form-generator/FormField';
import FormGenerator from '@homework-task/components/form-generator/FormGenerator';
import { validationSchema } from '@homework-task/components/form-generator/FormSchema';

type PostType = {
    title: string;
    body: string;
};

const useCreateNewPost = () => {
    return useMutation({
        mutationFn: async (data: PostType) => {
            const { title, body } = data;

            const response = await fetch(
                'https://jsonplaceholder.typicode.com/posts',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        title,
                        body,
                    }),
                }
            );
            if (!response.ok) {
                return Promise.reject(new Error('Network response was not ok'));
            }
            return response.json();
        },
    });
};

const FormWrapper: React.FC = () => {
    const mutation = useCreateNewPost();

    return (
        <div className="col-span-full flex flex-col gap-4 p-4 bg-white py-6 px-4 rounded-2xl">
            <h2 className="col-span-full text-black text-3xl xl:text-5xl leading-normal font-medium mb-4">
                Form Generator
            </h2>
            <FormGenerator<PostType, PostType, Error, PostType, unknown>
                mutation={mutation}
                validationSchema={validationSchema}
                successMessage="Successfully created post"
                renderForm={({ register, formState: { errors } }) => (
                    <>
                        <FormField
                            type="text"
                            placeholder="Enter your post title..."
                            name="title"
                            register={register}
                            error={errors?.title}
                        />
                        <FormField
                            type="textarea"
                            placeholder="Enter your post body text..."
                            name="body"
                            register={register}
                            error={errors?.body}
                        />
                    </>
                )}
            />
        </div>
    );
};

export default FormWrapper;
