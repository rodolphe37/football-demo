import { StyleSheet, Text, TouchableOpacity } from "react-native";

const ButtonComponent = ({ bottomSheet }) => {
  return (
    <TouchableOpacity
      onPress={() => bottomSheet.current.show()}
      style={styles.button}
    >
      <Text style={styles.buttonText}>View Players</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

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
