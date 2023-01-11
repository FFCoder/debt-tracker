/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TransactionsCreateFormInputValues = {
    DateTime?: string;
    Adjustment?: string;
    Amount?: number;
};
export declare type TransactionsCreateFormValidationValues = {
    DateTime?: ValidationFunction<string>;
    Adjustment?: ValidationFunction<string>;
    Amount?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TransactionsCreateFormOverridesProps = {
    TransactionsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    DateTime?: PrimitiveOverrideProps<TextFieldProps>;
    Adjustment?: PrimitiveOverrideProps<SelectFieldProps>;
    Amount?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TransactionsCreateFormProps = React.PropsWithChildren<{
    overrides?: TransactionsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TransactionsCreateFormInputValues) => TransactionsCreateFormInputValues;
    onSuccess?: (fields: TransactionsCreateFormInputValues) => void;
    onError?: (fields: TransactionsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TransactionsCreateFormInputValues) => TransactionsCreateFormInputValues;
    onValidate?: TransactionsCreateFormValidationValues;
} & React.CSSProperties>;
export default function TransactionsCreateForm(props: TransactionsCreateFormProps): React.ReactElement;
