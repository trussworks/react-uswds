import React from '../../../../node_modules/react';
type AddressProps = {
    size?: 'big' | 'medium' | 'slim';
    items: React.ReactNode[];
};
export declare const Address: ({ size, className, items, }: AddressProps & React.HTMLAttributes<HTMLElement>) => React.ReactElement;
export {};
