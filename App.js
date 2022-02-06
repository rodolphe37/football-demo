import { useState } from "react";
import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";
import { RecoilRoot } from "recoil";
import HomePage from "./HomePage";

export default function App() {
  return (
    <RecoilRoot>
      <HomePage />
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({});
