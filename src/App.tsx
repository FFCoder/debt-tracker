import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

import { NewTransaction, NewNavBar } from "./ui-components";

type AppProps = {
  signOut: () => void;
};

function App(props: AppProps) {
  const { signOut } = props;
  return (
    <>
      <NewNavBar isAuth={true} />
      <View className="App">
        <NewTransaction />
        <Button onClick={signOut}>Sign Out</Button>
      </View>
    </>
  );
}

export default withAuthenticator(App);
