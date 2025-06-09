import React, { ReactNode } from 'react';

interface TitleProps {
    children: ReactNode;
    className?: string;
}

export default function Title({ children, className = '' }: TitleProps) {
    return (
        <h1 className={`text-3xl font-bold mb-6 ${className}`}>
            {children}
        </h1>
    );
}