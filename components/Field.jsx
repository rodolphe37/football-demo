import { ImageBackground, StyleSheet, View, Text } from "react-native";
import Background from "../assets/field.jpg";
import FieldPlayer from "./FieldPlayer";
import uuid from "react-native-uuid";
import { positionFilterStateAtom } from "../states/atoms/positionFilterStateAtom";
import { useRecoilState } from "recoil";

const Field = () => {
  const [positionFilter] = useRecoilState(positionFilterStateAtom);
  return (
    <ImageBackground
      source={Background}
      resizeMode="contain"
      style={styles.imgBackground}
    >
      {Object.keys(positionFilter).map((position) => (
        <View key={position} style={styles.playersPosition}>
          {positionFilter[position].map((player) => (
            <FieldPlayer key={uuid.v4()} position={position} player={player} />
          ))}
        </View>
      ))}
    </ImageBackground>
  );
};

export default Field;

const styles = StyleSheet.create({
  imgBackground: {
    width: "100%",
    aspectRatio: 2 / 3,
    justifyContent: "space-around",
    alignItems: "center",
  },
  playersPosition: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});
