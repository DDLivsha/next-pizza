'use client'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import React from 'react'
import { cn } from '@/shared/lib/utils'
import { useRouter } from 'next/navigation'
import { ChooseProductForm } from '../choose-product-form'
import { ProductWithRelations } from '@/@types/prisma'
import { ChoosePizzaForm } from '../choose-pizza-form'

interface Props {
    className?: string
    product: ProductWithRelations
}
export const ChooseProductModal: React.FC<Props> = ({ className, product }) => {

    const router = useRouter()
    const isPizzaForm = Boolean(product.items[0].pizzaType)

    return (
        <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
            <DialogContent className={cn(className, 'p-0 w-[1060px] max-w-[1060px] max-h-[600px] bg-white overflow-hidden')}>
                {isPizzaForm
                    ?
                    <ChoosePizzaForm
                        imageUrl={product.imageUrl}
                        name={product.name}
                        ingredients={product.ingredients}
                        items={product.items}
                    />
                    :
                    <ChooseProductForm
                        imageUrl={product.imageUrl}
                        name={product.name}
                    />}
            </DialogContent>
        </Dialog>
    )
}