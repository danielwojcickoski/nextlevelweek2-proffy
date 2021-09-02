  
import React from 'react';
import { View, Text } from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

function Favorites() {
  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />

      <View style={styles.container2}>
        <Text>Matches</Text>
      </View>
    </View>
  );
}

export default Favorites;