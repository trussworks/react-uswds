import React from '../../../../node_modules/react';
type FooterProps = {
    size?: 'big' | 'medium' | 'slim';
    /**
     * Component for "return to top" button/handling
     */
    returnToTop?: React.ReactNode;
    /**
     * Content in upper footer section, e.g. navigation, searchbar, signup form
     */
    primary: React.ReactNode;
    /**
     * Content in lower footer section, e.g. contact information
     */
    secondary: React.ReactNode;
};
export declare const Footer: ({ size, returnToTop, primary, secondary, ...footerAttributes }: FooterProps & React.HTMLAttributes<HTMLElement>) => React.ReactElement;
export {};
