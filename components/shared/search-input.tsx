'use client';

import { cn } from '@/lib/utils';
import { Api } from '@/services/api-client';
import { Search } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useClickAway, useDebounce } from 'react-use';

export const SearchInput = ({ className }: { className?: string }) => {

    const [focused, setFocused] = React.useState(false);
    const [products, setProducts] = React.useState([]);
    const [searchQuery, setSearchQuery] = React.useState('');
    const ref = React.useRef<HTMLInputElement>(null);

    useClickAway(ref, () => setFocused(false));

    useDebounce(() => {
        Api.products.search(searchQuery).then(items => {
            // @ts-ignore
            setProducts(items)
        })

    }, 1000, [searchQuery])

    const onClickItem = () => {
        setFocused(false)
        setSearchQuery('')
        setProducts([])
    }

    return (
        <>
            {focused && <div className='fixed top-0 left-0 right-0 bottom-0 z-50 bg-black/50'></div>}

            <div ref={ref} className={cn("flex rounded-2xl flex-1 justify-between relative h-11 z-50", className)}>
                <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
                <input
                    className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
                    type="text"
                    placeholder="Найти пиццу..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setFocused(true)}
                />

                <div className={cn("absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-50", focused && 'visible opacity-100 top-12')}>
                    {/* @ts-ignore */}
                    {products && products.map((product) => (<Link key={product.id} onClick={onClickItem} className='px-3 py-2 hover:bg-primary/10 w-full flex items-center gap-3' href={`/product/${product.id}`}>
                        {/* @ts-ignore */}
                        <img src={product.imageUrl} alt='pizza' width={32} height={32} className='rounded-sm h-8 w-8' />
                        <div >
                        {/* @ts-ignore */}
                            {product.name}
                        </div>
                    </Link>))}
                </div>
            </div>
        </>
    );
};