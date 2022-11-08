import { StyleProp, Text, TextStyle, View } from 'react-native';

import { styles } from './styles';

interface TabsProps {
  title: string;
  style?: StyleProp<TextStyle>;
  number: number;
}

export function Tabs({ title, style, number }: TabsProps) {
  return (
    <View style={styles.tabs}>
      <Text style={style ? [styles.tabsValue, style] : styles.tabsValue}>
        {title}
      </Text>
      <Text style={styles.number}>{number.toString()}</Text>
    </View>
  );
}
