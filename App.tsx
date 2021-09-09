import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  return (
    <SafeAreaView>
      {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
      <View style={styles.sectionContainer}>
        <Text style={{color: '#fff'}}> ---Test home screen--- </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
