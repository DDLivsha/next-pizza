import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetTrigger, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'
import { CartDrawerItem } from './cart-drawer-item'
import { getCartItemDetails } from '@/shared/lib/get-cart-item-details'

interface Props {
    className?: string
}
export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({ children, className }) => {

    return (
        <Sheet>
            <SheetTrigger asChild>{children}</SheetTrigger>
            <SheetContent className='flex flex-col justify-between pb-0 bg-[#f4f1ee]'>
                <SheetHeader>
                    <SheetTitle>
                        В корзині <span className='font-bold'>123 товарів</span>
                    </SheetTitle>
                </SheetHeader>

                <div className='-mx-6 mt-5 overflow-auto flex-1 scrollbar flex flex-col gap-2'>
                    <CartDrawerItem id={1} imageUrl='https://r2.erweima.ai/imgcompressed/compressed_2d14dc1c7a196726045314e6adc4ca67.webp' details={getCartItemDetails(2, 30, [{ name: 'Цыпленок' }, { name: 'pipa' }])} name='Chicken' price={123} quantity={1} className='' />
                </div>


                <SheetFooter className='-mx-6 bg-white p-8'>
                    <div className="w-full">
                        <div className="flex mb-4">
                            <span className="flex flex-1 text-lg text-neutral-500">Всього:
                                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2"></div>
                            </span>
                            <span className="font-bold text-lg">{500} ₴</span>
                        </div>
                        <Link href='/cart'>
                            <Button
                                className="w-full h-12 text-base"
                                // loading={loading || redirecting}
                                type='submit'
                            >Оформити замовлення
                                <ArrowRight className='w-5 ml-2' />
                            </Button>
                        </Link>
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}