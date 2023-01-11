/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function NewNavBar(props) {
  const { isAuth = false, overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="1024px"
      height="124px"
      justifyContent="space-between"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="10px 100px 10px 100px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NewNavBar")}
      {...rest}
    >
      <Text
        fontFamily="Inconsolata"
        fontSize="32px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="33.56800079345703px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Debt Tracker"
        {...getOverrideProps(overrides, "Debt Tracker")}
      ></Text>
      <Text
        fontFamily="Inconsolata"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="20.979999542236328px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Home"
        {...getOverrideProps(overrides, "Home")}
      ></Text>
      <Text
        fontFamily="Inconsolata"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="20.979999542236328px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Accounts"
        {...getOverrideProps(overrides, "Accounts")}
      ></Text>
      <Text
        fontFamily="Inconsolata"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="20.979999542236328px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Transactions"
        {...getOverrideProps(overrides, "Transactions")}
      ></Text>
      <Button
        shrink="0"
        size="default"
        isDisabled={true}
        variation="primary"
        children={isAuth && isAuth == true ? "Sign Out" : "Sign In"}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
