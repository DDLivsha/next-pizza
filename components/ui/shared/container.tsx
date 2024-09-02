import { cn } from '@/lib/utils'
import React from 'react'
//@ts-ignore
export default function Container({ className, children }) {
    return (
        <div className={cn('mx-auto max-w-[1280px]', className)}>
            {children}
        </div>
    )
}
