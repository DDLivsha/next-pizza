import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetTrigger, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'

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
                {/* items */}

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