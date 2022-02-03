import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const PlayerListItem = ({ player }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={{ marginRight: 10 }}>
          <FontAwesome5 name="info-circle" size={24} color="#1d4e89" />
        </View>
        <Image source={player?.img} style={styles.image} />
        <View style={{ flexGrow: 1 }}>
          <Text style={styles.name}>{player?.name}</Text>
          <Text>{player?.match}</Text>
        </View>
        <View style={styles.colContainer}>
          <Text style={styles.name}>
            $1{(player?.price / 1000000).toFixed(1)}m
          </Text>
          <Text style={{ alignItems: "flex-end" }}>{player?.position}</Text>
        </View>
        <Text style={styles.points}>{player?.totalPoints}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlayerListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 2,
    borderColor: "#ddd",
    alignItems: "center",
  },
  colContainer: {
    marginHorizontal: 15,
    alignItems: "flex-end",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontWeight: "bold",
  },
  points: { fontWeight: "bold", fontSize: 18 },
});
