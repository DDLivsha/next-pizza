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
    items?: any[]
    onClickAdd?: VoidFunction
}
export const ChooseProductForm: React.FC<Props> = ({ className, imageUrl, name,  items, onClickAdd }) => {

    const textDetails = '30см, традиційне тісто'
    const totalPrice = 500

    return (
        <div className={cn(className, 'flex flex-1')}>
            <div className='flex items-center justify-center flex-1 relative w-full'>
                <img src={imageUrl} alt={name} className='relative left-2 top-2 transition-all z-10 duration-300 w-[400px] h-[400px]' />
            </div>


            <div className='w-[490px] bg-[#f7f6f5] p-7'>
                <Title text={name} size='md' className='font-extrabold mb-1' />

                <p className='text-gray-400'>{textDetails}</p>

                <Button
                    // loading={loading}
                    // onClick={handleClick}
                    className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'>
                    Додати до корзини за {totalPrice}₴
                </Button>
            </div>
        </div>
    )
}