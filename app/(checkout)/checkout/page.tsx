'use client'
import React from 'react'
import { CheckoutItem } from '@/components/shared/checkout-item';
import { CheckoutItemDetails } from '@/components/shared/checkout-item-details';
import { CheckoutItemSkeleton } from '@/components/shared/checkout-item-skeleton';
import { CheckoutSidebar } from '@/components/shared/checkout-sidebar';
import Container from '@/components/shared/container';
import { FormInput } from '@/components/shared/form/form-input';
import { Title } from '@/components/shared/title';
import { WhiteBlock } from '@/components/shared/white-block';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PizzaSize, PizzaType } from '@/shared/constants/pizza';
import { useCart } from '@/shared/hooks/use-cart';
import { getCartItemDetails } from '@/shared/lib/get-cart-item-details';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckoutCart } from '@/components/shared/checkout/checkout-cart';
import { CheckoutPersonalForm } from '@/components/shared/checkout/checkout-personal-form';
import { CheckoutAddressForm } from '@/components/shared/checkout/checkout-address-form';
import { checkoutFormSchema, CheckoutFormValues } from '@/components/shared/checkout/schemas/checkout-form-schema';
import { log } from 'console';

interface Props {
    className?: string
}

export default function CheckoutPage({ className }: Props) {

    const { items, totalAmount, updateItemQuantity, removeCartItem, loading } = useCart()

    const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
        const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
        updateItemQuantity(id, newQuantity);
    }

    const form = useForm<CheckoutFormValues>({
        resolver: zodResolver(checkoutFormSchema),
        defaultValues: {
            email: '',
            firstName: '',
            lastName: '',
            phone: '',
            address: '',
            comment: ''
        }
    })

    const onSubmit: SubmitHandler<CheckoutFormValues> = (data) => {
        console.log(data)
    }

    return (
        <Container className='mt-8'>
                <Title text="Оформлення замовлення" className='font-extrabold mb-8 text-[36px]' />
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className='flex gap-10'>
                        <div className='flex flex-col gap-10 flex-1 mb-20'>
                            <CheckoutCart items={items} onClickCountButton={onClickCountButton} removeCartItem={removeCartItem} loading={loading} />
                            <CheckoutPersonalForm />
                            <CheckoutAddressForm />
                        </div>
                        <div className='w-[450px]'>
                            <CheckoutSidebar totalAmount={totalAmount} loading={loading} />
                        </div>
                    </div>
                </form>
            </FormProvider>
        </Container>
    );
}
