import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {Home} from './screens/Home';
import { Details } from './screens/Details';

export default function App() {
  return (
    <SafeAreaView>
      <Home/>
      <Details/>
    </SafeAreaView>
  )
}


