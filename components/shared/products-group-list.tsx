'use client'
import React from 'react';
import { Title } from './title';
import { ProductCard } from './product-card';
import { useIntersection } from 'react-use'
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';

interface Props {
    title: string;
    items: any[];
    className?: string;
    categoryId: number;
    listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({ title, items, className, categoryId, listClassName }) => {

    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
    const intersectionRef = React.useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    })

    React.useEffect(() => {
        if (intersection && intersection.isIntersecting) {
            setActiveCategoryId(categoryId)
        }
    }, [intersection?.isIntersecting])

    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size='lg' className='font-extrabold mb-5' />
            <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {items.map((item, i) => (
                    <ProductCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        imageUrl={item.imageUrl}
                        price={item.items[0]?.price}
                    // count={i % 2}
                    />
                ))}
            </div>
        </div>
    );
};