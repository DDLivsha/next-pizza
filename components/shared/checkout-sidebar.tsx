import React from 'react'
import { WhiteBlock } from './white-block'
import { CheckoutItemDetails } from './checkout-item-details'
import { ArrowRight, Package, Percent, Truck } from 'lucide-react'
import { Button } from '../ui/button'
import { Skeleton } from '../ui/skeleton'

interface Props {
    className?: string
    totalAmount: number
    loading?: boolean
}

const VAT = 15
const DELIVERY_PRICE = 250
export const CheckoutSidebar: React.FC<Props> = ({ totalAmount, loading }) => {

    const vatPrice = ((totalAmount * VAT) / 100)
    const totalPrice = totalAmount + vatPrice + DELIVERY_PRICE

    return (
        <WhiteBlock className='p-6 sticky top-4'>
            <div className='flex flex-col gap-1'>
                <span className='text-xl'>Загальна сума:</span>
                {loading
                    ?
                    <Skeleton className='h-10 w-32' />
                    :
                    <span className='text-4xl font-extrabold'>{totalPrice.toFixed(2)} ₴</span>}
            </div>

            <CheckoutItemDetails title={
                <div className='flex items-center'>
                    <Package size={18} className='mr-2 text-gray-400' />
                    Вартість товарів
                </div>
            } value={`${totalAmount.toFixed(2)}`} />
            <CheckoutItemDetails title={
                <div className='flex items-center'>
                    <Percent size={18} className='mr-2 text-gray-400' />
                    Податки
                </div>
            } value={`${vatPrice.toFixed(2)}`} />
            <CheckoutItemDetails title={
                <div className='flex items-center'>
                    <Truck size={18} className='mr-2 text-gray-400' />
                    Вартість доставки
                </div>
            } value={`${DELIVERY_PRICE.toFixed(2)}`} />

            <Button type='submit' className='w-full h-14 rounded-2xl mt-6 text-base font-bold'>
                Перейти до оплати
                <ArrowRight className='w-5 ml-2' />
            </Button>
        </WhiteBlock>
    )
}