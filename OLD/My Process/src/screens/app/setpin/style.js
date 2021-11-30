import { StyleSheet } from 'react-native';
import { Colors } from '../../../theme';
export default StyleSheet.create({
  Container: {
    flex: 1
  },
  bgContainer: {
    flexGrow: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 60,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 10,
    backgroundColor: 'white',
  },
  closeIcon: {
    marginTop: 20,
    marginHorizontal: 20,
    alignSelf: 'flex-end',
    color: 'rgba(0,0,0,0.5)',
    fontSize: 26
  },
  titleText: {
    paddingTop: 20,
    paddingHorizontal: 30,
    color: "rgba(0,0,0,0.8)",
    fontSize: 18,
  },
  pinContent: {
    marginHorizontal: 30,
    marginVertical: 50
  },
  iconInfo: {
    fontSize: 36,
    color: "#000",
  },
});
