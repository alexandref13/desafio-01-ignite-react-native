import { Image, Text, View } from 'react-native';

import Clipboard from '../../assets/clipboard.png';

import { styles } from './styles';

export function EmptyList() {
  return (
    <View>
      <Image style={styles.clipboard} source={Clipboard} />
      <Text style={styles.text}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={[styles.text, { fontFamily: 'Inter_400Regular' }]}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
