import React from 'react';
import { TextInputProps } from '../TextInput/TextInput';
import { TextareaProps } from '../Textarea/Textarea';
type BaseCharacterCountProps = {
    id: string;
    name: string;
    maxLength: number;
    value?: string;
    defaultValue?: string;
    className?: string;
    isTextArea?: boolean;
    getCharacterCount?: (text: string) => number;
    getMessage?: (remainingCount: number, max: number) => string;
};
export type TextInputCharacterCountProps = BaseCharacterCountProps & TextInputProps;
export type TextareaCharacterCountProps = BaseCharacterCountProps & TextareaProps & JSX.IntrinsicElements['textarea'];
export declare const CharacterCount: ({ id, name, className, maxLength, value, defaultValue, isTextArea, getCharacterCount, getMessage, ...remainingProps }: TextInputCharacterCountProps | TextareaCharacterCountProps) => React.ReactElement;
export default CharacterCount;
