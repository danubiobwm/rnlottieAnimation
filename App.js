import React from 'react';
import {SafeAreaView} from 'react-native';
import Lottie from 'lottie-react-native';
import halloweenGhost from './happy-halloween.json';

export default function App() {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Lottie resizeMode="contain" source={halloweenGhost} autoPlay loop />
    </SafeAreaView>
  );
}
