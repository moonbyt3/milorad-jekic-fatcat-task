import {
    FieldError,
    FieldErrorsImpl,
    FieldValues,
    Merge,
    UseFormRegister,
} from 'react-hook-form';

type FormFieldProps = {
    type: string;
    placeholder: string;
    name: ValidFieldNames;
    register: UseFormRegister<FieldValues>;
    error:
        | FieldError
        | Merge<FieldError, FieldErrorsImpl<FieldValues>>
        | undefined;
    valueAsNumber?: boolean;
};

type ValidFieldNames = 'title' | 'body';

const FormField: React.FC<FormFieldProps> = ({
    type,
    placeholder,
    name,
    register,
    error,
    valueAsNumber,
}) => (
    <>
        {type === 'text' && (
            <input
                type={type}
                placeholder={placeholder}
                className="block mb-2 p-1 w-full max-w-md border-solid border-cream rounded border-2"
                {...register(name, { valueAsNumber })}
            />
        )}

        {type === 'textarea' && (
            <textarea
                placeholder={placeholder}
                className="block mb-2 p-1 w-full max-w-md border-solid border-cream rounded border-2"
                {...register(name, { valueAsNumber })}
            />
        )}

        {error && typeof error.message === 'string' && (
            <p className="text-mainRed mb-4">{error.message}</p>
        )}
    </>
);
export default FormField;
