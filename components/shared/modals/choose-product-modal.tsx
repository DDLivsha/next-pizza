'use client'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import React from 'react'
import { cn } from '@/shared/lib/utils'
import { useRouter } from 'next/navigation'
import { ProductWithRelations } from '@/@types/prisma'

import { ProductForm } from '../product-form'

interface Props {
    className?: string
    product: ProductWithRelations
}
export const ChooseProductModal: React.FC<Props> = ({ className, product }) => {
    const router = useRouter()

    return (
        <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
            <DialogContent className={cn(className, 'p-0 w-[1060px] max-w-[1060px] max-h-[600px] bg-white overflow-hidden')}>
                <ProductForm product={product} onSubmit={() => router.back()}/>
            </DialogContent>
        </Dialog>
    )
}