/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NewTransactionInputValues = {
    Name?: string;
    Balance?: number;
};
export declare type NewTransactionValidationValues = {
    Name?: ValidationFunction<string>;
    Balance?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewTransactionOverridesProps = {
    NewTransactionGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Balance?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NewTransactionProps = React.PropsWithChildren<{
    overrides?: NewTransactionOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NewTransactionInputValues) => NewTransactionInputValues;
    onSuccess?: (fields: NewTransactionInputValues) => void;
    onError?: (fields: NewTransactionInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: NewTransactionInputValues) => NewTransactionInputValues;
    onValidate?: NewTransactionValidationValues;
} & React.CSSProperties>;
export default function NewTransaction(props: NewTransactionProps): React.ReactElement;
