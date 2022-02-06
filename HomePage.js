import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";
import ButtonComponent from "./components/ButtonComponent";
import Field from "./components/Field";
import TeamStats from "./components/TeamStats";
import BottomSheetComponent from "./components/BottomSheetComponent";
import FilterBottomSheetComponent from "./components/FilterBottomSheetComponent";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Setting a timer"]);

const HomePage = () => {
  // bottomSheet ref
  const bottomSheet = useRef();
  const filterBottomSheet = useRef();

  return (
    <SafeAreaView style={styles.container}>
      <ExpoStatusBar style="light" backgroundColor="orange" />
      <TeamStats />
      <Field />
      <ButtonComponent bottomSheet={bottomSheet} />
      <BottomSheetComponent
        bottomSheet={bottomSheet}
        filterBottomSheet={filterBottomSheet}
      />
      <FilterBottomSheetComponent filterBottomSheet={filterBottomSheet} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4ccf4d",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
