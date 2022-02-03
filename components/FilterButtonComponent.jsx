import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const FilterButtonComponent = ({ filterBottomSheet }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity
        onPress={() => filterBottomSheet.current.show()}
        style={styles.button}
      >
        <Text style={styles.buttonText}>filter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FilterButtonComponent;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "orange",
    padding: 10,
    marginVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: "auto",
    width: "90%",
  },
  buttonText: { textAlign: "center", color: "white", fontWeight: "bold" },
});
