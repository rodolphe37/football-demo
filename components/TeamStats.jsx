import { StyleSheet, Text, View } from "react-native";

const TeamStats = () => {
  return (
    <View style={styles.container}>
      <View style={styles.teamContainer}>
        <View style={styles.teamSection}>
          <Text style={styles.label}>Players</Text>
          <Text style={styles.value}>0 / 15</Text>
        </View>
        <View>
          <Text style={styles.label}>Remaining</Text>
          <Text style={styles.value}>$100m</Text>
        </View>
      </View>
    </View>
  );
};

export default TeamStats;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    width: "90%",
    marginTop: 20,
    borderWidth: 4,
    borderColor: "#38abd1",
    borderRadius: 10,
    flexDirection: "row",
    marginLeft: 10,
    padding: 10,
  },
  label: { fontWeight: "bold", color: "#555555" },
  value: { fontWeight: "bold", fontSize: 20 },
  teamContainer: {
    flexDirection: "row",
    marginLeft: 10,
  },
  teamSection: {
    marginRight: 10,
  },
});
