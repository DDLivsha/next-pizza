import { cn } from '@/lib/utils';
import { Link } from 'lucide-react';
import React from 'react'
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
            <Link href={`/product/${id}`}>
                <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
                    <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
                </div>
            </Link>
        </div>
    );
}
