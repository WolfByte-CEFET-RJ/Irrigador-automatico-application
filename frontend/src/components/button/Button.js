import React from 'react';
import { styles } from './styles'
import { Pressable, Text } from 'react-native';

const Button = ({ onPress, title }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default Button;
