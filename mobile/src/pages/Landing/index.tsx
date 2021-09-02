import React from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'

import styles from './styles';

function Landing() {
  const { navigate } = useNavigation();

  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses')
  }

  function handleNavigateToStudyPages() {
    navigate('Study')
  }

  return (
    <View style={styles.container}>
      <RectButton
        onPress={handleNavigateToStudyPages}
        style={[styles.button, styles.buttonPrimary]}
      >
        <Ionicons name="flame-outline" size={40} color='#FFFFFF'/>
      </RectButton>
    </View>
  );
}

export default Landing;