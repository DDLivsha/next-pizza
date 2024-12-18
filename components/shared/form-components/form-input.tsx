import React from 'react'
import { RequiredSymbol } from '../required-symbol'
import { Input } from '@/components/ui/input'
import { ErrorText } from '../error-text'
import { ClearButton } from '../clear-button'

interface Props {
    name: string
    label?: string
    required?: boolean
    className?: string
    placeholder?: string
}

export const FormInput: React.FC<Props> = ({ className, label, required, name, placeholder, ...props }) => {

    // const {} = useForm

    return (
        <div className={className}>
            {label && <p className="font-medium mb-2">{label} {required && <RequiredSymbol />}</p>}

            <div className='relative'>
                <Input className='h-12 text-md' {...props} placeholder={placeholder} />
                
                <ClearButton />
            </div>
            <ErrorText className='mt-2' text={'Поле обов’язкове для заповнення'} />
        </div>
    )
}