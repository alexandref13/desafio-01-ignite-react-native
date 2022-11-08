import { Image, View } from 'react-native';

import { styles } from './styles';

import Logo from '../../assets/logo.png';

export function Header() {
  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={Logo} resizeMode={'contain'} />
    </View>
  );
}
