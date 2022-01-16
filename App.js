import React, {useEffect} from 'react';
import {StyleSheet, View, StatusBar, LogBox, Text} from 'react-native';
// import Navigation from "./src/navigation";
// import store from './src/appRedux/store/configureStore';
import {SafeAreaView} from 'react-native-safe-area-context';
// import {Provider} from 'react-redux';

const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.container}>
        <StatusBar backgroundColor="#c7c7c7" barStyle="dark-content" />
        <Text style={Styles.text}>APP_PAGE</Text>
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c7c7c7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: '#070707'},
});

export default App;
