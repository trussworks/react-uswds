import { default as React } from 'react';

export type FilePreviewProps = {
    imageId: string;
    file: File;
} & JSX.IntrinsicElements['div'];
declare const FilePreview: ({ imageId, file, ...props }: FilePreviewProps) => React.ReactElement;
export default FilePreview;
