import { useSearchParams, useRouter } from "next/navigation"
import { useSet } from "react-use";
import React from "react";


interface PriceProps {
    priceFrom?: number
    priceTo?: number
}

export interface QueryFilters extends PriceProps {
    pizzaTypes: string
    sizes: string
    ingredients: string

}

export interface Filters {
    sizes: Set<string>
    pizzaTypes: Set<string>
    selectedIngredients: Set<string>
    price: PriceProps
}

interface ReturnProps extends Filters {
    setPizzaTypes: (value: string) => void
    setSizes: (value: string) => void
    setSelectedIngredients: (value: string) => void
    setPrice: (name: keyof PriceProps, value: number) => void
}


export const useFilters = (): ReturnProps => {

    const router = useRouter()
    const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>

    const [selectedIngredients, { toggle: toggleIngredients }] = useSet(new Set<string>(searchParams.get('ingredients')?.split(',')))

    const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>(searchParams.get('sizes')?.split(',') || []))

    const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>(searchParams.get('pizzaTypes')?.split(',') || []))

    const [price, setPrice] = React.useState<PriceProps>(
        {
            priceFrom: Number(searchParams.get('priceFrom')) || undefined,
            priceTo: Number(searchParams.get('priceTo')) || undefined
        }
    )

    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrice(prev => ({ ...prev, [name]: value }))
    }

    return {
        sizes,
        pizzaTypes,
        price,
        selectedIngredients,
        setPrice: updatePrice,
        setPizzaTypes: togglePizzaTypes,
        setSizes: toggleSizes,
        setSelectedIngredients: toggleIngredients
    }
}