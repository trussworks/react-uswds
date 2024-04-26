import { default as React } from 'react';

export type ValidationChecklistProps = {
    id: string;
    children: React.ReactNode;
} & JSX.IntrinsicElements['ul'];
declare const ValidationChecklist: ({ children, className, ...ulProps }: ValidationChecklistProps) => React.ReactElement;
export default ValidationChecklist;
