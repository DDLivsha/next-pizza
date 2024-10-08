'use client'
import { cn } from '@/lib/utils';
import { Link, Plus } from 'lucide-react';
import React from 'react'
import { Title } from './title';
import { Button } from '../ui/button';
/**
 * A component that displays a product card.
 *
 * @returns A React component for displaying a product card.
 */
export interface ProductCardProps {
    name: string;
    price: number;
    count?: number;
    imageUrl: string;
    className?: string;
    id: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ name, id, price, count, imageUrl, className }) => {
    return (
        <div className={cn(className)}>
            {/* <Link href={`/product/${id}`}> */}
                <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
                    <img className=" h-fit w-fit" src={imageUrl} alt={name} />
                </div>

                <Title text={name} size='sm' className="mb-1 mt-3 font-bold" />

                <p className="text-sm text-gray-400">
                    Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок
                </p>

                <div className="flex justify-between mt-4 items-center">
                    <span className='text-[20px]'>
                        від <b>{price}₴</b>
                    </span>
                        <Button variant='secondary' className='text=base font-bold'>
                            <Plus className='w-5 h-5 mr-1' />
                            Додати
                        </Button>
                </div>
            {/* </Link> */}
        </div>
    );
}
