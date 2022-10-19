import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native';

export default function App() {
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState();
  let [response, setResponse] = useState();

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoading(false);
          setResponse(result);
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        }
      )
  }, []);

  const getContent = () => {
    if (isLoading) {
      return <ActivityIndicator size='large' />;
    }

    if (error) {
      return<Text>{error}</Text>
    }

    console.log(response)
    return <Image source={{uri: 'https://dog.ceo/api/breeds/image/random'}}/>;
  };

  return (
    <View style={styles.container}>
       {getContent()}
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
