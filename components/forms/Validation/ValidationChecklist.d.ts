import React from 'react';
type ValidationChecklistProps = {
    id: string;
    children: React.ReactNode;
};
export declare const ValidationChecklist: ({ children, className, ...ulProps }: ValidationChecklistProps & JSX.IntrinsicElements['ul']) => React.ReactElement;
export default ValidationChecklist;
