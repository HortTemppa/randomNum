import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function App() {
  const [typedNumber, setTypedNumber] = useState("");

  const [guessedNumber, setGuessedNumber] = useState("");
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);

  const [randomNumber, setRandomNumber] = useState(null);

  const [isWrong, setIsWrong] = useState(false);

  console.log(randomNumber);

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  }, []);

  const handleChange = (e) => {
    setTypedNumber(e.target.value);
  };

  const handleWrongNumber = () => {
    setIsWrong(true);
    setTimeout(() => {
      setIsWrong(false);
    }, 3000);
  };

  const handleSubmit = () => {
    setNumberOfGuesses(numberOfGuesses + 1);
    setGuessedNumber(typedNumber);
    setTypedNumber("");
    if (parseInt(typedNumber) != randomNumber) {
      handleWrongNumber();
    }
  };

  console.log("Guesses", numberOfGuesses);

  if (parseInt(guessedNumber) == randomNumber) {
    return (
      <View styles={styles.container}>
        <Text>
          You guessed the right number! It took {numberOfGuesses} guesses. The
          number was {randomNumber}
        </Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>Guess a number between 1-100</Text>
        <TextInput
          style={styles.input}
          type="text"
          onChange={handleChange}
          value={typedNumber}
        />
        <Button
          onPress={handleSubmit}
          type="button"
          title="Make a Guess"
        ></Button>
        {guessedNumber < randomNumber && guessedNumber ? (
          <Text borderColor="red">The guess was too low.</Text>
        ) : null}
        {guessedNumber > randomNumber && guessedNumber ? (
          <Text borderColor="red">The guess was too low.</Text>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  input: {
    margin: 10,
    height: 30,
    width: 180,
    borderColor: "black",
    borderWidth: 1,
  },
});
