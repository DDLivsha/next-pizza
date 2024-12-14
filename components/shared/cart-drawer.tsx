import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetTrigger, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'
import { CartDrawerItem } from './cart-drawer-item'
import { getCartItemDetails } from '@/shared/lib/get-cart-item-details'
import { useCartStore } from '@/shared/store/cart'
import { PizzaType, PizzaSize } from '@/shared/constants/pizza'
import Image from 'next/image'
import { Title } from './title'
import { cn } from '@/shared/lib/utils'

interface Props {
    className?: string
}
export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({ children, className }) => {

    const cartState = useCartStore((state) => state);

    const { items, totalAmount, fetchCartItems, updateItemQuantity, removeCartItem } = cartState;

    React.useEffect(() => {
        fetchCartItems();
    }, []);

    const onCLickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
        const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
        updateItemQuantity(id, newQuantity);
    }

    return (
        <Sheet>
            <SheetTrigger asChild>{children}</SheetTrigger>
            <SheetContent className='flex flex-col justify-between pb-0 bg-[#f4f1ee]'>
                <div className={cn('flex flex-col h-full', !totalAmount && 'justify-center')}>
                    {totalAmount > 0 && <SheetHeader>
                        <SheetTitle>
                            В корзині <span className='font-bold'>{items.length} {items.length === 1 ? 'товар' : items.length === 2 || items.length === 3 || items.length === 4 ? 'товари' : 'товарів'}</span>
                        </SheetTitle>
                    </SheetHeader>}
    
    
                    {!totalAmount && <div className="flex flex-col items-center justify-center w-72 mx-auto">
                    <Image src="/assets/images/empty-box.png" alt="cart" width={120} height={120} />
                    <Title size='sm' text='Ваша корзина порожня' className='font-bold text-center my-2' />
                    <p className='text-center text-neutral-500 mb-5'>
                        Додайте хоча б один товар в корзину щоб зробити замовлення
                    </p>
                    <SheetClose>
                        <Button className='w-56 h-12 text-base' size='lg'>
                            <ArrowLeft className='w-5 mr-2' />
                            Повернутися
                        </Button>
                    </SheetClose>
                    </div>}
                    {totalAmount > 0 && <>
                        <div className='-mx-6 mt-5 overflow-auto flex-1 scrollbar flex flex-col gap-2'>
                            {items.map((item) => (
                                <CartDrawerItem key={item.id} id={item.id} imageUrl={item.imageUrl} disabled={item.disabled} details={item.pizzaSize ? getCartItemDetails(item.ingredients, item.pizzaType as PizzaType, item.pizzaSize as PizzaSize) : ''} name={item.name} price={item.price} quantity={item.quantity} className='' onCLickCountButton={(type) => {
                                    onCLickCountButton(item.id, item.quantity, type)
                                }} onClickRemove={() => removeCartItem(item.id)} />
                            ))}
                        </div>
    
    
                        <SheetFooter className='-mx-6 bg-white p-8'>
                            <div className="w-full">
                                <div className="flex mb-4">
                                    <span className="flex flex-1 text-lg text-neutral-500">Всього:
                                        <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2"></div>
                                    </span>
                                    <span className="font-bold text-lg">{totalAmount} ₴</span>
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
                    </>}
                </div>
            </SheetContent>
        </Sheet>
    )
}