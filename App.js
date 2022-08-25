import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [guessedNumber, setGuessedNumber] = useState();
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  const handleChange = () => {};

  return (
    <View style={styles.container}>
      <Text>Guess a number between 1-100</Text>
      <TextInput
        onChange={(e) => {
          setGuessedNumber(e.target.value);
        }}
        value={guessedNumber}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
  },
});
