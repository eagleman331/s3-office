import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex:1,
   justifyContent: "center",
   alignItems: "center",
  },
  title: {
  fontSize:28,
  fontWeight: "800",
  color: "black",
  alignSelf: "center",
  marginBottom: 16
  },
  colorSelect: {
    width: 30,
    height: 30,
    borderRadius:4,
  },
  create: {
    marginTop:24,
    height: 50,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  }

});

export default styles;