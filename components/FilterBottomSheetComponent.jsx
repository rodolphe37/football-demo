import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BottomSheet from "react-native-gesture-bottom-sheet";
import uuid from "react-native-uuid";
import { useEffect } from "react/cjs/react.development";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentPositionAtom } from "../states/atoms/currentPositionAtom";
import { positionFilterStateAtom } from "../states/atoms/positionFilterStateAtom";
import { filteredPlayerSelector } from "../states/selectors/filteredPlayerSelector";
import PlayerListItem from "./PlayerListItem";

const FilterBottomSheetComponent = ({ filterBottomSheet }) => {
  const [positionFilter] = useRecoilState(positionFilterStateAtom);
  const [currentPosition, setCurrentPosition] =
    useRecoilState(currentPositionAtom);
  const [players] = useRecoilValue(filteredPlayerSelector);

  const onFilterPress = (position) => {
    setCurrentPosition((currentPosition) => {
      if (currentPosition.includes(position)) {
        return currentPosition.filter((pos) => pos !== position);
      } else {
        return [...currentPosition, position];
      }
    });
  };

  const isSelected = (position) => {
    return currentPosition.includes(position);
  };
  useEffect(() => {
    console.log(currentPosition);
    console.log(players);
  }, [currentPosition, players]);

  return (
    <BottomSheet
      draggable={true}
      hasDraggableIcon
      ref={filterBottomSheet}
      height={450}
    >
      <View style={styles.container}>
        {Object.keys(positionFilter).map((res) => (
          <TouchableOpacity
            style={[
              styles.buttonPosition,
              { backgroundColor: isSelected(res) ? "purple" : "#ddd" },
            ]}
            onPress={() => onFilterPress(res)}
            key={uuid.v4()}
          >
            <View style={styles.textContainer}>
              <Text style={styles.text}>{res}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View>
        {players ? (
          currentPosition ? (
            <PlayerListItem player={players} />
          ) : null
        ) : undefined}
      </View>
    </BottomSheet>
  );
};

export default FilterBottomSheetComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    padding: 10,
  },
  buttonPosition: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {},
  text: { fontWeight: "600" },
});
