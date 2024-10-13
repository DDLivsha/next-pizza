'use client';
import React from 'react';
import { useSet } from 'react-use';
import { FilterCheckbox, FilterChecboxProps } from './filter-checkbox';
import { Input } from '../ui/input';
import { Skeleton } from '../ui/skeleton';
import { log } from 'console';

type item = FilterChecboxProps

interface Props {
    className?: string;
    title?: string;
    items: item[];
    defaultItems?: item[];
    limit?: number;
    loading?: boolean;
    searchInputPlaceholder?: string;
    defaultValue?: string[];
    OnClickCheckbox?: (id: string) => void;
    selected?: Set<string>;
    name?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({ className, title, items, defaultItems, loading, limit = 5, searchInputPlaceholder = 'Search...', defaultValue, OnClickCheckbox, selected, name }) => {

    const [showAll, setShowAll] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');

    const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    if (loading) {
        return <div className={className}>
            <p className="font-bold mb-3">{title}</p>
            {Array.from({ length: limit }).map((_, i) => <Skeleton key={i} className='h-6 mb-5' />)}
        </div>
    }

    const list = showAll ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLocaleLowerCase())) : (defaultItems || items)?.slice(0, limit);

    return (
        <div className={className}>
            <p className="font-bold mb-3">{title}</p>

            {showAll && (
                <div className="mb-5">
                    <Input placeholder={searchInputPlaceholder} className="bg-gray-50 border-none"
                        onChange={onChangeSearchInput}
                    />
                </div>
            )}

            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
                {list && list.map((item, index) => (
                    <FilterCheckbox
                        key={index}
                        text={item.text}
                        value={item.value}
                        endAdornment={item.endAdornment}
                        checked={selected?.has(item.value)}
                        onCheckedChange={() => OnClickCheckbox?.(item.value)}
                        name={name}
                    />
                ))}
            </div>

            {items.length > limit && (
                <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
                    <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
                        {showAll ? 'Скрыть' : '+ Показать все'}
                    </button>
                </div>
            )}
        </div>
    );
};