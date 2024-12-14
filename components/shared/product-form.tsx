'use client'
import { ProductWithRelations } from '@/@types/prisma'
import { useCartStore } from '@/shared/store/cart'
import React from 'react'
import toast from 'react-hot-toast'
import { ChoosePizzaForm } from './choose-pizza-form'
import { ChooseProductForm } from './choose-product-form'

interface Props {
    className?: string
    product: ProductWithRelations
    onSubmit?: VoidFunction
}
export const ProductForm: React.FC<Props> = ({ onSubmit: _onSubmit, product }) => {

    const { addCartItem, loading } = useCartStore()
    const firstItem = product.items[0]
    const isPizzaForm = Boolean(firstItem.pizzaType)

    const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
        try {
            if (isPizzaForm) {
                await addCartItem({
                    productItemId,
                    ingredients
                })
            } else {
                await addCartItem({
                    productItemId: firstItem.id,
                })
            }
            toast.success('Added to cart')
            _onSubmit?.()
        } catch (error) {
            console.error(error)
            toast.error('Something went wrong')
        }
    }


    if (isPizzaForm) {
        return (
            <ChoosePizzaForm
                imageUrl={product.imageUrl}
                name={product.name}
                ingredients={product.ingredients}
                items={product.items}
                onSubmit={onSubmit}
                loading={loading}
            />
        )
    }
    return <ChooseProductForm
        imageUrl={product.imageUrl}
        name={product.name}
        onSubmit={onSubmit}
        price={firstItem.price}
        loading={loading}
    />
}