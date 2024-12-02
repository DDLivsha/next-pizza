import { cn } from '@/shared/lib/utils'
import { Ingredient, Product, ProductItem } from '@prisma/client'
import React from 'react'
import { ProductImage } from './product-image'
import { Title } from './title'
import { Button } from '../ui/button'
import { GroupVariants } from './group-variants'
import { mapPizzaType, PizzaSize, pizzaSizes, PizzaType, pizzaTypes } from '@/shared/constants/pizza'
import { IngredientItem } from './ingredient'
import { calcTotalPizzaPrice } from '@/shared/lib/calc-pizza-prices'
import { usePizzaOptions } from '@/shared/hooks/use-pizza-options'

interface Props {
    className?: string
    imageUrl: string
    name: string
    loading?: boolean
    ingredients: Ingredient[]
    items: ProductItem[]
    onSubmit: (itemId: number, ingredients: number[]) => void
}
export const ChoosePizzaForm: React.FC<Props> = ({ className, loading, imageUrl, name, ingredients, items, onSubmit }) => {

    const { size, type, setSize, setType, availableSizes, selectedIngredients, addIngredient, currentItemId } = usePizzaOptions(items)

    const totalPrice = calcTotalPizzaPrice(type, size, items, ingredients, selectedIngredients)

    const textDetails = `${size} см, ${mapPizzaType[type]} тісто`

    const handleClickAdd = () => {
        if (currentItemId) {
            onSubmit(currentItemId, Array.from(selectedIngredients))
        }
    }

    return (
        <div className={cn(className, 'flex flex-1')}>
            <ProductImage imageUrl={imageUrl} size={size} />

            <div className='w-[490px] bg-[#f7f6f5] p-7'>
                <Title text={name} size='md' className='font-extrabold mb-1' />

                <p className='text-gray-400'>{textDetails}</p>

                <div className='flex flex-col gap-5 my-5'>
                    <GroupVariants items={availableSizes} value={String(size)} onClick={value => setSize(Number(value) as PizzaSize)} />
                    <GroupVariants items={pizzaTypes} value={String(type)} onClick={value => setType(Number(value) as PizzaType)} />
                </div>

                <div className='bg-gray-50 p-5 rounded-md h-[220px] overflow-auto scrollbar'>
                    <div className="grid grid-cols-3 gap-3">
                        {ingredients.map((ingredient) => (
                            <IngredientItem
                                key={ingredient.id}
                                imageUrl={ingredient.imageUrl}
                                name={ingredient.name}
                                price={ingredient.price}
                                active={selectedIngredients.has(ingredient.id)}
                                onClick={() => addIngredient(ingredient.id)}
                            />
                        ))}
                    </div>
                </div>
                <Button
                    loading={loading}
                    onClick={handleClickAdd}
                    className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'>
                    Додати до корзини за {totalPrice}₴
                </Button>
            </div>
        </div>
    )
}