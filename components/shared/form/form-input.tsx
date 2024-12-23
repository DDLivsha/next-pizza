import React from 'react'
import { RequiredSymbol } from '../required-symbol'
import { Input } from '@/components/ui/input'
import { ErrorText } from '../error-text'
import { ClearButton } from '../clear-button'
import { useFormContext } from 'react-hook-form'

interface Props {
    name: string
    label?: string
    required?: boolean
    className?: string
    placeholder?: string
}

export const FormInput: React.FC<Props> = ({ className, label, required, name, placeholder, ...props }) => {

    const {
        register, 
        formState: { errors },
        watch,
        setValue
    } = useFormContext()

    const value = watch(name)
    const error = errors[name]?.message as string

    const onClickClear = () => setValue(name, '', { shouldValidate: true })

    return (
        <div className={className}>
            {label && <p className="font-medium mb-2">{label} {required && <RequiredSymbol />}</p>}

            <div className='relative'>
                <Input className='h-12 text-md' {...register(name)} {...props} placeholder={placeholder} />
                
                {value && <ClearButton onClick={onClickClear} />}
            </div>
            {error && <ErrorText className='mt-2' text={error} />}
        </div>
    )
}