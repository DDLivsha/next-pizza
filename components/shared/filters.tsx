'use client';
import React from 'react';
import { Input } from '@/components/ui/input';
import { CheckboxFiltersGroup } from '@/components/shared/checkbox-filters-group'
import { Title } from './title';
import { RangeSlider } from '../ui/range-slider';
import { useQueryFilters, useFilters, useIngredients } from '@/hooks';

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {

    const { ingredients, loading } = useIngredients()
    const filters = useFilters()

    useQueryFilters(filters)

    const items = ingredients.map((ingredient) => ({
        text: ingredient.name,
        value: ingredient.id.toString(),
    }))

    const updatePrices = (prices: number[]) => {
        filters.setPrice('priceFrom', prices[0])
        filters.setPrice('priceTo', prices[1])
    }

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
                OnClickCheckbox={filters.setPizzaTypes}
                selected={filters.pizzaTypes}
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
                OnClickCheckbox={filters.setSizes}
                selected={filters.sizes}
                name="sizes"
            />

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до:</p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" placeholder="0" min={0} max={30000} value={String(filters.price.priceFrom)} onChange={(e) => filters.setPrice('priceFrom', Number(e.target.value))} />
                    <Input type="number"
                        min={100}
                        max={30000}
                        placeholder="1000"
                        value={String(filters.price.priceTo)}
                        onChange={(e) => filters.setPrice('priceTo', Number(e.target.value))} />
                </div>

                <RangeSlider min={0} max={1000} step={10} value={[filters.price.priceFrom || 0, filters.price.priceTo || 1000]} onValueChange={updatePrices} />
            </div>

            <CheckboxFiltersGroup
                className="mt-5"
                title="Ингредиенты"
                limit={6}
                loading={loading}
                defaultItems={items.slice(0, 6)}
                items={items}
                OnClickCheckbox={filters.setSelectedIngredients}
                selected={filters.selectedIngredients}
                name="ingredients"
            />
        </div>
    );
};