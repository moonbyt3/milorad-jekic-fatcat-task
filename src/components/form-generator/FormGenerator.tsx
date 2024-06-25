import { zodResolver } from '@hookform/resolvers/zod';
import { UseMutationResult } from '@tanstack/react-query';
import {
    useForm,
    SubmitHandler,
    UseFormReturn,
    FieldValues,
} from 'react-hook-form';
import { ZodSchema } from 'zod';

type FormGeneratorProps<T, TData, TError, TVariables, TContext> = {
    mutation: UseMutationResult<TData, TError, TVariables, TContext>;
    validationSchema: ZodSchema<T>;
    successMessage: string;
    renderForm: (formMethods: UseFormReturn<FieldValues>) => React.ReactNode;
};

const FormGenerator = <T, TData, TError, TVariables, TContext>({
    mutation,
    validationSchema,
    successMessage,
    renderForm,
}: FormGeneratorProps<T, TData, TError, TVariables, TContext>) => {
    const formMethods = useForm({
        resolver: zodResolver(validationSchema),
    });

    const { handleSubmit } = formMethods;

    const onSubmitHandler: SubmitHandler<FieldValues> = (data) => {
        mutation.mutate(
            {
                title: data.title as string,
                body: data.body as string,
            } as TVariables,
            {
                onSuccess: () => {
                    alert(successMessage);
                },
                onError: (error) => {
                    alert(error);
                },
            }
        );
    };

    return (
        <form onSubmit={(event) => void handleSubmit(onSubmitHandler)(event)}>
            {renderForm(formMethods)}
            <input
                className="bg-mainGreen hover:bg-mainYellow text-white font-bold mt-4 py-2 px-4 rounded cursor-pointer"
                type="submit"
            />
        </form>
    );
};

export default FormGenerator;
