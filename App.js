import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  let [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    const configureNewGameHandler = () => {
      // Reset game state
      setGuessRounds(0);
      setUserNumber(null);
    };

    const startGameHandler = (selectedNumber) => {
      setUserNumber(selectedNumber);
      setGuessRounds(0);
    };

    const gameOverHandler = numOfRounds => {
      setGuessRounds(numOfRounds);
    };

    let content = <StartGameScreen onStartGame={startGameHandler} />;

    if (userNumber && guessRounds <= 0) {
      content = (
        <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
      );
    } else if (guessRounds > 0) {
      content = (
        <GameOverScreen
          roundsNumber={guessRounds}
          userNumber={userNumber}
          onRestart={configureNewGameHandler}
        />
      );
    }

    return (
      <SafeAreaView style={styles.screen}>
        <Header title="Guess a Number" />
        {content}
      </SafeAreaView>
    );
  } 
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
