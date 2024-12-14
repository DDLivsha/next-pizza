'use client'
import { cn } from '@/shared/lib/utils';
import { Plus } from 'lucide-react';
import React from 'react'
import { Title } from './title';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Ingredient } from '@prisma/client';

export interface ProductCardProps {
    name: string;
    price: number;
    count?: number;
    imageUrl: string;
    className?: string;
    id: number;
    ingredients: Ingredient[]
}

export const ProductCard: React.FC<ProductCardProps> = ({ name, id, price, count, imageUrl, className, ingredients }) => {
    return (
        <div className={cn(className)}>
            <div className="flex justify-center p-6 rounded-lg h-[260px] ">
                <img className=" h-fit w-fit" src={imageUrl} alt={name} />
            </div>
            <Link href={`/product/${id}`}>
                <Title text={name} size='sm' className="mb-1 mt-3 font-bold" />
                <p className="text-sm text-gray-400">
                    {ingredients.map((item, i) => item.name).join(', ')}
                </p>
            </Link>
            <div className="flex justify-between mt-4 items-center">
                <span className='text-[20px]'>
                    від <b>{price}₴</b>
                </span>
                <Link href={`/product/${id}`}>
                    <Button variant='secondary' className='text=base font-bold'>
                        <Plus className='w-5 h-5 mr-1' />
                        Додати
                    </Button>
                </Link>
            </div>
        </div>
    );
}
