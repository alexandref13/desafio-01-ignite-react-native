import { useState } from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';

import Plus from '../../assets/plus.png';

import { styles } from './styles';

interface FormProps {
  handleAddTask: (value: string) => void;
}

export function Form({ handleAddTask }: FormProps) {
  const [title, setTitle] = useState('');

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        onChangeText={setTitle}
        autoCapitalize="words"
        placeholderTextColor="#808080"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleAddTask(title);
        }}
      >
        <Image source={Plus} />
      </TouchableOpacity>
    </View>
  );
}
