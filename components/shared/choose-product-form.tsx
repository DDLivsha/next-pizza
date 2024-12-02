import { cn } from '@/shared/lib/utils'
import { Product } from '@prisma/client'
import React from 'react'
import { ProductImage } from './product-image'
import { Title } from './title'
import { Button } from '../ui/button'

interface Props {
    className?: string
    imageUrl: string
    name: string
    loading?: boolean
    price: number
    items?: any[]
    onSubmit?: VoidFunction
}
export const ChooseProductForm: React.FC<Props> = ({ className, imageUrl, name, items, price, loading, onSubmit }) => {

    return (
        <div className={cn(className, 'flex flex-1')}>
            <div className='flex items-center justify-center flex-1 relative w-full'>
                <img src={imageUrl} alt={name} className='relative left-2 top-2 transition-all z-10 duration-300 w-[400px] h-[400px]' />
            </div>


            <div className='w-[490px] bg-[#f7f6f5] p-7'>
                <Title text={name} size='md' className='font-extrabold mb-1' />

                <Button
                    loading={loading}
                    onClick={onSubmit}
                    className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'>
                    Додати до корзини за {price}₴
                </Button>
            </div>
        </div>
    )
}