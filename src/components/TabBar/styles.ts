import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',

    width: '100%',

    alignItems: 'stretch',
    justifyContent: 'space-between',

    paddingHorizontal: 24,
    marginTop: 32,
  },
  divider: {
    height: 1,

    alignSelf: 'stretch',

    paddingHorizontal: 24,
    marginHorizontal: 24,

    marginTop: 20,

    backgroundColor: '#333333',
  },
});
