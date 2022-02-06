import { useState } from "react";
import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";
import { RecoilRoot } from "recoil";
import AppStart from "./AppStart";
import HomePage from "./HomePage";

export default function App() {
  return (
    <RecoilRoot>
      <AppStart />
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({});
