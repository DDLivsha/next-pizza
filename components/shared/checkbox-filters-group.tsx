'use client';
import React from 'react';
import { useSet } from 'react-use';
import { FilterCheckbox, FilterChecboxProps } from './filter-checkbox';
import { Input } from '../ui/input';

type item = FilterChecboxProps

interface Props {
    className?: string;
    title?: string;
    items: item[];
    defaultItems?: item[];
    limit?: number;
    searchInputPlaceholder?: string;
    defaultValue?: string[];
    onChange?: (values: item[]) => void;

}

export const CheckboxFiltersGroup: React.FC<Props> = ({ className, title, items, defaultItems, limit = 5, searchInputPlaceholder = 'Search...', defaultValue, onChange }) => {

    const [showAll, setShowAll] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');
    const [selected, { add, toggle }] = useSet<string>(new Set([]));

    const onCheckedChange = (value: string) => {
        toggle(value);
    };

    const onChangeSearchInput = (value: string) => {
        setSearchValue(value);
    };

    React.useEffect(() => {
        if (defaultValue) {
            defaultValue.forEach(add);
        }
    }, [defaultValue?.length]);

    React.useEffect(() => {
        //@ts-ignore
        onChange?.(Array.from(selected));
    }, [selected]);

    const list = showAll ? items.filter(item => item.text.toLowerCase().includes(searchValue.toLowerCase())) : defaultItems?.slice(0, limit);

return (
    <div className={className}>
        <p className="font-bold mb-3">{title}</p>

        {showAll && (
            <div className="mb-5">
                <Input placeholder={searchInputPlaceholder} className="bg-gray-50 border-none" onChange={e => onChangeSearchInput(e.target.value)} value={searchValue}
                />
            </div>
        )}

        <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
            {(showAll ? items : defaultItems || items).map((item) => (
                <FilterCheckbox
                    onCheckedChange={() => onCheckedChange(item.value)}
                    checked={selected.has(item.value)}
                    key={String(item.value)}
                    value={item.value}
                    text={item.text}
                    endAdornment={item.endAdornment}
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