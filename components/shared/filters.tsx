'use client';
import React from 'react';

import { FilterCheckbox } from '@/components/shared/filter-checkbox';
import { Input } from '@/components/ui/input';
import { CheckboxFiltersGroup } from '@/components/shared/checkbox-filters-group'
import { Title } from './title';
import { RangeSlider } from '../ui/range-slider';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';
import { useSet } from 'react-use';

interface Props {
    className?: string;
}

interface PriceProps {
    priceFrom: number
    priceTo: number
}

export const Filters: React.FC<Props> = ({ className }) => {

    const { ingredients, loading, selectedIds, onAddId } = useFilterIngredients()

    const [sizes, {toggle: toggleSizes}] = useSet(new Set<string>([]))

    const [price, setPrice] = React.useState<PriceProps>({ priceFrom: 0, priceTo: 1000 })

    const items = ingredients.map((ingredient) => ({
        text: ingredient.name,
        value: ingredient.id.toString(),
    }))

    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrice({ ...price, [name]: value })
    }

    return (
        <div className={className}>
            <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

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