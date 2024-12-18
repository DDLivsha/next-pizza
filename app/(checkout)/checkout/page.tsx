'use client'
import { CheckoutItem } from '@/components/shared/checkout-item';
import { CheckoutItemDetails } from '@/components/shared/checkout-item-details';
import { CheckoutItemSkeleton } from '@/components/shared/checkout-item-skeleton';
import { CheckoutSidebar } from '@/components/shared/checkout-sidebar';
import Container from '@/components/shared/container';
import { FormInput } from '@/components/shared/form-components/form-input';
import { Title } from '@/components/shared/title';
import { WhiteBlock } from '@/components/shared/white-block';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PizzaSize, PizzaType } from '@/shared/constants/pizza';
import { useCart } from '@/shared/hooks/use-cart';
import { getCartItemDetails } from '@/shared/lib/get-cart-item-details';
import { ArrowRight, Package, Percent, Truck } from 'lucide-react';
import React from 'react'

interface Props {
    className?: string
}
const VAT = 15
const DELIVERY_PRICE = 250
export default function CheckoutPage({ className }: Props) {

    const { items, totalAmount, updateItemQuantity, removeCartItem } = useCart()
    const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
        const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
        updateItemQuantity(id, newQuantity);
    }

    const vatPrice = ((totalAmount * VAT) / 100)
    const totalPrice = totalAmount + vatPrice + DELIVERY_PRICE

    return (
        <Container className='mt-8'>
            <Title text="Оформлення замовлення" className='font-extrabold mb-8 text-[36px]' />
            <div className='flex gap-10'>
                <div className='flex flex-col gap-10 flex-1 mb-20'>
                    <WhiteBlock title='1. Корзина'>
                        <div className='flex flex-col gap-5'>
                            {items.map(item =>
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

                    <WhiteBlock title='1. Персональні дані'>
                        <div className='grid grid-cols-2 gap-5'>
                            <Input name='firstName' className='text-base' placeholder='Ім’я' />
                            <Input name='lastName' className='text-base' placeholder='Прізвище' />
                            <Input name='email' className='text-base' placeholder='Емейл' />
                            <FormInput name='phone' className='text-base' placeholder='Телефон' />
                        </div>
                    </WhiteBlock>

                    <WhiteBlock title='3. Доставка'>
                        <div className='flex flex-col gap-5'>
                            <Input name='address' className='text-base' placeholder='Адреса доставки' />
                            <Textarea rows={5} className='text-base' placeholder='Коментарі' />
                        </div>
                    </WhiteBlock>
                </div>
                <div className='w-[450px]'>
                    <CheckoutSidebar DELIVERY_PRICE={DELIVERY_PRICE} totalPrice={totalPrice} totalAmount={totalAmount} vatPrice={vatPrice}/>
                </div>
            </div>
        </Container>
    );
}
