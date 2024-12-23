import React from 'react'
import { WhiteBlock } from '../white-block'
import { Input } from '@/components/ui/input'
import { FormInput } from '../form/form-input'

interface Props {
    className?: string
}
export const CheckoutPersonalForm: React.FC<Props> = ({ className }) => {
    return (
        <WhiteBlock title='1. Персональні дані'>
            <div className='grid grid-cols-2 gap-5'>
                <FormInput name='firstName' className='text-base' placeholder='Ім’я' />
                <FormInput name='lastName' className='text-base' placeholder='Прізвище' />
                <FormInput name='email' className='text-base' placeholder='Емейл' />
                <FormInput name='phone' className='text-base' placeholder='Телефон' />
            </div>
        </WhiteBlock>
    )
}