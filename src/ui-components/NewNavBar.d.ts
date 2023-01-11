/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewNavBarOverridesProps = {
    NewNavBar?: PrimitiveOverrideProps<FlexProps>;
    "Debt Tracker"?: PrimitiveOverrideProps<TextProps>;
    Home?: PrimitiveOverrideProps<TextProps>;
    Accounts?: PrimitiveOverrideProps<TextProps>;
    Transactions?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type NewNavBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    isAuth?: Boolean;
} & {
    overrides?: NewNavBarOverridesProps | undefined | null;
}>;
export default function NewNavBar(props: NewNavBarProps): React.ReactElement;
