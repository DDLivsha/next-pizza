import { cn } from '@/shared/lib/utils'
import React from 'react'

interface Props {
    className?: string
    title?: React.ReactNode
    value?: string
}
export const CheckoutItemDetails: React.FC<Props> = ({ className, title, value }) => {
    return (
        <div className={cn('flex my-4', className)}>
            <span className='flex flex-1 text-lg text-neutral-500'>{title}:
                <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2'></div>
            </span>
            <span className='text-lg font-bold'>{value} ₴</span>
        </div>
    )
}