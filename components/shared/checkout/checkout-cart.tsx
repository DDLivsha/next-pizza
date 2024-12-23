import React from 'react'
import { WhiteBlock } from '../white-block'
import { CheckoutItem } from '../checkout-item'
import { getCartItemDetails } from '@/shared/lib/get-cart-item-details'
import { PizzaSize, PizzaType } from '@/shared/constants/pizza'
import { CartStateItem } from '@/shared/lib/get-cart-details'
import { CheckoutItemSkeleton } from '../checkout-item-skeleton'

interface Props {
    className?: string
    items: CartStateItem[]
    onClickCountButton: (id: number, quantity: number, type: 'plus' | 'minus') => void
    removeCartItem: (id: number) => void
    loading?: boolean
}
export const CheckoutCart: React.FC<Props> = ({ className, items, onClickCountButton, removeCartItem, loading }) => {
    return (

        <WhiteBlock title='1. Корзина'>
            <div className='flex flex-col gap-5'>
                {
                    loading && [...Array(4)].map((_, index) => (
                        <CheckoutItemSkeleton key={index} />
                    ))
                }


                {!loading && items.length > 0 && items.map(item =>
                (<CheckoutItem id={item.id}
                    imageUrl={item.imageUrl}
                    details={item.pizzaSize ? getCartItemDetails(item.ingredients, item.pizzaType as PizzaType, item.pizzaSize as PizzaSize) : ''}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    disabled={item.disabled}
                    onClickCountButton={(type) => {
                        onClickCountButton(item.id, item.quantity, type)
                    }}
                    onClickRemove={() => removeCartItem(item.id)} />
                ))}
            </div>
        </WhiteBlock>
    )
}