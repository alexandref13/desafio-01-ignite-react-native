import { View } from 'react-native';

import { styles } from './styles';
import { Tabs } from './Tabs';

interface TabBar {
  created: number;
  finished: number;
}

export function TabBar({ created, finished }: TabBar) {
  return (
    <>
      <View style={styles.tabBar}>
        <Tabs title="Criadas" number={created} />
        <Tabs
          title="Concluidas"
          style={{ color: '#8284FA' }}
          number={finished}
        />
      </View>
      <View style={styles.divider}></View>
    </>
  );
}
