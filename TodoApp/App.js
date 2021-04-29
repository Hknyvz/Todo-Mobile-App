import React from 'react';
import { StyleSheet } from 'react-native';
import SignIn from './Components/SignIn/SingIn';
import { SafeAreaProvider } from "react-native-safe-area-context"

const App = () => {
  return (
   
      <SafeAreaProvider>
        <SignIn></SignIn>
      </SafeAreaProvider>
    
  )
};

const styles = StyleSheet.create({

});

export default App;
