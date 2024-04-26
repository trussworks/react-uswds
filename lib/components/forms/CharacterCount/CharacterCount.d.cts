import { TextareaProps } from '../Textarea/Textarea.js';
import { TextInputProps } from '../TextInput/TextInput.js';
import { default as React } from 'react';

export type BaseCharacterCountProps = {
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
export type CharacterCountProps = TextInputCharacterCountProps | TextareaCharacterCountProps;
declare const CharacterCount: ({ id, name, className, maxLength, value, defaultValue, isTextArea, getCharacterCount, getMessage, ...remainingProps }: CharacterCountProps) => React.ReactElement;
export default CharacterCount;
