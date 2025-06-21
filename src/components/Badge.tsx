import React from 'react';

export type BadgeVariant = 'default' | 'success' | 'danger' | 'warning' | 'info' | 'inactive';

interface BadgeProps {
    children: React.ReactNode;
    variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
    default: 'bg-amber-400 text-amber-900',
    success: 'bg-green-400 text-green-900',
    danger: 'bg-red-400 text-red-900',
    warning: 'bg-yellow-400 text-yellow-900',
    info: 'bg-blue-400 text-blue-900',
    inactive: 'bg-gray-400 text-gray-900'
};

export default function Badge({ children, variant = 'default' }: BadgeProps) {
    return (
        <span className={`px-[20px] py-[2px] rounded-[50px] flex items-center gap-2 flex-nowrap ${variantClasses[variant]}`}>
            {children}
        </span>
    );
}