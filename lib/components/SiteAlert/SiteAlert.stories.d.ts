import { default as React } from 'react';

declare const _default: {
    title: string;
    component: ({ variant, children, heading, showIcon, slim, className, ...sectionProps }: import('./SiteAlert').SiteAlertProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
    argTypes: {
        slim: {
            control: {
                type: string;
            };
        };
        showIcon: {
            control: {
                type: string;
            };
        };
        variant: {
            options: string[];
            control: {
                type: string;
            };
        };
    };
    args: {
        variant: string;
    };
};
export default _default;
type StorybookArguments = {
    slim: boolean;
    showIcon: boolean;
    variant: 'info' | 'emergency';
};
export declare const StandardInformationalSiteAlert: () => React.ReactElement;
export declare const StandardEmergencySiteAlert: () => React.ReactElement;
export declare const InformationalAlertWithNoHeader: () => React.ReactElement;
export declare const EmergencyAlertWithNoHeader: () => React.ReactElement;
export declare const InformationalAlertWithList: () => React.ReactElement;
export declare const EmergencyAlertWithList: () => React.ReactElement;
export declare const SlimEmergencyAlert: () => React.ReactElement;
export declare const EmergencyAlertNoIcon: () => React.ReactElement;
export declare const AlertWithCustomControls: {
    render: (argTypes: StorybookArguments) => React.ReactElement;
};
export declare const AlertWithStringContent: () => React.ReactElement;
export declare const AlertWithMultipleChildContent: () => React.ReactElement;
