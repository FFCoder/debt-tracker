/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Transactions } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TransactionsUpdateFormInputValues = {
    DateTime?: string;
    Adjustment?: string;
    Amount?: number;
};
export declare type TransactionsUpdateFormValidationValues = {
    DateTime?: ValidationFunction<string>;
    Adjustment?: ValidationFunction<string>;
    Amount?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TransactionsUpdateFormOverridesProps = {
    TransactionsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    DateTime?: PrimitiveOverrideProps<TextFieldProps>;
    Adjustment?: PrimitiveOverrideProps<SelectFieldProps>;
    Amount?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TransactionsUpdateFormProps = React.PropsWithChildren<{
    overrides?: TransactionsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    transactions?: Transactions;
    onSubmit?: (fields: TransactionsUpdateFormInputValues) => TransactionsUpdateFormInputValues;
    onSuccess?: (fields: TransactionsUpdateFormInputValues) => void;
    onError?: (fields: TransactionsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TransactionsUpdateFormInputValues) => TransactionsUpdateFormInputValues;
    onValidate?: TransactionsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TransactionsUpdateForm(props: TransactionsUpdateFormProps): React.ReactElement;
