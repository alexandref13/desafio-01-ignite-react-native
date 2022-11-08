import { Pressable, Text, View } from 'react-native';
import { Trash, Check } from 'phosphor-react-native';

import { styles } from './styles';

import { TasksProps } from '../../screens/Home';

interface TaskProps {
  data: TasksProps;
  handleFinishedTask: (value: string) => void;
  handleDeleteTask: (value: string) => void;
}

export function Task({
  data,
  handleFinishedTask,
  handleDeleteTask,
}: TaskProps) {
  return (
    <View style={styles.container}>
      <Pressable
        style={data.isFinished ? styles.checkboxActive : styles.checkbox}
        onPress={() => handleFinishedTask(data.id)}
      >
        {data.isFinished ? <Check color="#fff" /> : null}
      </Pressable>
      <Text
        style={
          data.isFinished
            ? [
                styles.title,
                { textDecorationLine: 'line-through', color: '#808080' },
              ]
            : styles.title
        }
      >
        {data.title}
      </Text>
      <Pressable onPress={() => handleDeleteTask(data.id)}>
        <Trash color="#808080" size={24} />
      </Pressable>
    </View>
  );
}
