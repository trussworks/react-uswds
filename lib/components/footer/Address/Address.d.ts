import { default as React } from 'react';

export type AddressProps = {
    size?: 'big' | 'medium' | 'slim';
    items: React.ReactNode[];
} & JSX.IntrinsicElements['address'];
declare const Address: ({ size, className, items, ...props }: AddressProps) => React.ReactElement;
export default Address;
