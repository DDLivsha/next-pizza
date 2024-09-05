import { cn } from '@/lib/utils'
import React from 'react'
/**
 * A container component that centers content horizontally and limits the
 * width to a maximum of 1280px.
 *
 * @param {React.ComponentPropsWithoutRef<'div'> & { className?: string }} props
 * @returns {React.ReactElement}
 */
export default function Container({
    className,
    children,
}: React.ComponentPropsWithoutRef<'div'> & { className?: string }): React.ReactElement {
    return (
        <div className={cn('mx-auto max-w-[1280px]', className)}>
            {children}
        </div>
    );
}
