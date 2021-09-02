  
import React from 'react';
import { View, Text } from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

function Configs() {
  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />

      <View style={styles.container2}>
        <Text>Configs</Text>
      </View>
    </View>
  );
}

export default Configs;