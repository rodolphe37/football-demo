import { StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const FieldPlayer = ({ position, player }) => {
  return (
    <View style={styles.container}>
      <FontAwesome5
        name="tshirt"
        size={24}
        color={player ? "#d170db" : "#5c5c5cbb"}
      />
      <Text style={styles.playerText}>{position}</Text>
    </View>
  );
};

export default FieldPlayer;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  playerText: {
    backgroundColor: "#333333bb",
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
    padding: 2,
    paddingHorizontal: 7,
  },
});
