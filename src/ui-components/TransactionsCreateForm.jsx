/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Transactions } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function TransactionsCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    DateTime: "",
    Adjustment: undefined,
    Amount: "",
  };
  const [DateTime, setDateTime] = React.useState(initialValues.DateTime);
  const [Adjustment, setAdjustment] = React.useState(initialValues.Adjustment);
  const [Amount, setAmount] = React.useState(initialValues.Amount);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setDateTime(initialValues.DateTime);
    setAdjustment(initialValues.Adjustment);
    setAmount(initialValues.Amount);
    setErrors({});
  };
  const validations = {
    DateTime: [],
    Adjustment: [],
    Amount: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hour12: false,
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          DateTime,
          Adjustment,
          Amount,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Transactions(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "TransactionsCreateForm")}
      {...rest}
    >
      <TextField
        label="Date time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={DateTime && convertToLocal(new Date(DateTime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              DateTime: value,
              Adjustment,
              Amount,
            };
            const result = onChange(modelFields);
            value = result?.DateTime ?? value;
          }
          if (errors.DateTime?.hasError) {
            runValidationTasks("DateTime", value);
          }
          setDateTime(value);
        }}
        onBlur={() => runValidationTasks("DateTime", DateTime)}
        errorMessage={errors.DateTime?.errorMessage}
        hasError={errors.DateTime?.hasError}
        {...getOverrideProps(overrides, "DateTime")}
      ></TextField>
      <SelectField
        label="Adjustment"
        placeholder="Please select an option"
        isDisabled={false}
        value={Adjustment}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              DateTime,
              Adjustment: value,
              Amount,
            };
            const result = onChange(modelFields);
            value = result?.Adjustment ?? value;
          }
          if (errors.Adjustment?.hasError) {
            runValidationTasks("Adjustment", value);
          }
          setAdjustment(value);
        }}
        onBlur={() => runValidationTasks("Adjustment", Adjustment)}
        errorMessage={errors.Adjustment?.errorMessage}
        hasError={errors.Adjustment?.hasError}
        {...getOverrideProps(overrides, "Adjustment")}
      >
        <option
          children="Positive"
          value="POSITIVE"
          {...getOverrideProps(overrides, "Adjustmentoption0")}
        ></option>
        <option
          children="Negative"
          value="NEGATIVE"
          {...getOverrideProps(overrides, "Adjustmentoption1")}
        ></option>
      </SelectField>
      <TextField
        label="Amount"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Amount}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              DateTime,
              Adjustment,
              Amount: value,
            };
            const result = onChange(modelFields);
            value = result?.Amount ?? value;
          }
          if (errors.Amount?.hasError) {
            runValidationTasks("Amount", value);
          }
          setAmount(value);
        }}
        onBlur={() => runValidationTasks("Amount", Amount)}
        errorMessage={errors.Amount?.errorMessage}
        hasError={errors.Amount?.hasError}
        {...getOverrideProps(overrides, "Amount")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
