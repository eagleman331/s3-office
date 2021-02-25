import { StyleSheet } from 'react-native';
import colors from "./../../Colors";


const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: "#fff",
   padding: 30,
   alignItems: "center",
   justifyContent: "center",
  },
  divider: {
    backgroundColor: colors.lightBlue,
    height: 1,
    flex: 1,
    alignSelf: "center",
  },
  title: {
    
    fontSize: 38,
    fontWeight: "800",
    color: "#2D3436",
    paddingHorizontal: 64,
  },
  addList: {
    borderWidth:2,
    borderColor: "#A7CBD9",
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  add: {
    color: "#24A6D9",
    fontWeight: "600",
    fontSize: 14,
    marginTop: 8,
  }
});

export default styles;