'use client';
import React, { useEffect } from 'react';

import { FilterCheckbox } from '@/components/shared/filter-checkbox';
import { Input } from '@/components/ui/input';
import { CheckboxFiltersGroup } from '@/components/shared/checkbox-filters-group'
import { Title } from './title';
import { RangeSlider } from '../ui/range-slider';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';
import { useSet } from 'react-use';
import qs from 'qs';
import { useRouter, useSearchParams } from 'next/navigation';

interface Props {
    className?: string;
}

interface PriceProps {
    priceFrom: number
    priceTo: number
}

interface QueryFilters extends PriceProps {
    pizzaTypes: string
    sizes: string
    ingredients: string
}

export const Filters: React.FC<Props> = ({ className }) => {
    const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>

    // @ts-ignore
    const { ingredients, loading, selectedIds, onAddId } = useFilterIngredients(searchParams.get('ingredients')?.split(','))
    const router = useRouter()



    const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>(searchParams.get('sizes')?.split(',') || []))

    const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>(searchParams.get('pizzaTypes')?.split(',') || []))

    const [price, setPrice] = React.useState<PriceProps>(
        {
            priceFrom: Number(searchParams.get('priceFrom')) || 0,
            priceTo: Number(searchParams.get('priceTo')) || 1000
        }
    )

    const items = ingredients.map((ingredient) => ({
        text: ingredient.name,
        value: ingredient.id.toString(),
    }))

    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrice({ ...price, [name]: value })
    }

    useEffect(() => {
        const filters = {
            pizzaTypes: Array.from(pizzaTypes),
            sizes: Array.from(sizes),
            ingredients: Array.from(selectedIds)
        }

        if (price.priceFrom !== 0 || price.priceTo !== 1000) {
            // @ts-ignore
            filters.priceFrom = price.priceFrom
            // @ts-ignore
            filters.priceTo = price.priceTo
        }

        const query = qs.stringify(filters, { arrayFormat: 'comma' })
        router.push(`?${query}`, { scroll: false })
    }, [price, pizzaTypes, sizes, selectedIds]);

    useEffect(() => {

        if (price.priceFrom > 990) {
            updatePrice('priceFrom', 990)
        }

        if (price.priceTo < 10) {
            updatePrice('priceTo', 10)
        }
    }, [price]);

    return (
        <div className={className}>
            <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

            <CheckboxFiltersGroup
                className="mb-5"
                title="Тип тіста"
                items={[
                    { text: 'Тонке', value: '1' },
                    { text: 'Традиційне', value: '2' },
                ]}
                OnClickCheckbox={togglePizzaTypes}
                selected={pizzaTypes}
                name="sizes"
            />

            <CheckboxFiltersGroup
                className="mb-5"
                title="Розміри"
                items={[
                    { text: '20см', value: '20' },
                    { text: '30см', value: '30' },
                    { text: '40см', value: '40' },
                ]}
                OnClickCheckbox={toggleSizes}
                selected={sizes}
                name="sizes"
            />

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до:</p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" placeholder="0" min={0} max={30000} value={String(price.priceFrom)} onChange={(e) => updatePrice('priceFrom', Number(e.target.value))} />
                    <Input type="number" min={100} max={30000} placeholder="30000" value={String(price.priceTo)} onChange={(e) => updatePrice('priceTo', Number(e.target.value))} />
                </div>
                <RangeSlider min={0} max={1000} step={10} value={[price.priceFrom, price.priceTo]} onValueChange={(value) => setPrice({ priceFrom: value[0], priceTo: value[1] })} />
            </div>

            <CheckboxFiltersGroup
                className="mt-5"
                title="Ингредиенты"
                limit={6}
                loading={loading}
                defaultItems={items.slice(0, 6)}
                items={items}
                OnClickCheckbox={onAddId}
                selected={selectedIds}
                name="ingredients"
            />
        </div>
    );
};