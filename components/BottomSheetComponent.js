import { View, Text, StyleSheet, ScrollView } from "react-native";
import BottomSheet from "react-native-gesture-bottom-sheet";
import PlayerListItem from "./PlayerListItem";
import { players } from "../assets/data/players";
import FilterButtonComponent from "./FilterButtonComponent";
import { useRecoilState } from "recoil";
import { allPlayersStateAtom } from "../states/atoms/allPlayersStateAtom";
import { useEffect, useLayoutEffect } from "react";

const BottomSheetComponent = ({ bottomSheet, filterBottomSheet }) => {
  const [player, setPlayer] = useRecoilState(allPlayersStateAtom);

  function getPlayers() {
    const play = players;
    setPlayer(play);
  }

  useLayoutEffect(() => {
    getPlayers();
    console.log("player :", player);
  }, [player]);

  return (
    <BottomSheet
      draggable={false}
      hasDraggableIcon
      ref={bottomSheet}
      height={450}
    >
      <View style={{ marginTop: 10 }}>
        <FilterButtonComponent
          filterBottomSheet={filterBottomSheet}
          style={styles.filterButton}
        />
      </View>
      <ScrollView style={styles.contentContainer}>
        {player.map((res) => (
          <PlayerListItem key={res.id} player={res} />
        ))}
      </ScrollView>
    </BottomSheet>
  );
};

export default BottomSheetComponent;

const styles = StyleSheet.create({
  contentContainer: {},
});
