import React from 'react'
import { WhiteBlock } from '../white-block'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { FormTextarea } from '../form/form-textarea'
import { FormInput } from '../form/form-input'

interface Props {
    className?: string
}
export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
    return (
        <WhiteBlock title='3. Доставка'>
            <div className='flex flex-col gap-5'>
                <FormInput name='address' className='text-base' placeholder='Адреса доставки' />
                <FormTextarea name='comment' rows={5} className='text-base' placeholder='Коментарі' />
            </div>
        </WhiteBlock>
    )
}