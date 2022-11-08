import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 64,
    width: 340,

    backgroundColor: '#262626',

    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 8,

    marginTop: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 999,

    borderWidth: 2,
    borderColor: '#4EA8DE',
  },

  checkboxActive: {
    borderRadius: 999,

    borderWidth: 2,
    borderColor: '#4EA8DE',
    backgroundColor: '#5E60CE',

    zIndex: 10,
  },
  title: {
    maxWidth: 250,

    textAlign: 'justify',

    color: '#F2F2F2',

    fontFamily: 'Inter_400Regular',
    fontSize: 14,
  },
});
