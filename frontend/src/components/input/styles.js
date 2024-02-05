import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    // borderColor: 'red',
    // borderWidth: 2,
  },
  label_container:{
    display: 'flex',
    alignItems: 'flex-start',
    width: '77%',
  },  
  label: {
    fontSize: 12,
    marginBottom: 8,
    color: '#609966',
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Bold', 
  },
  writeTaskWrapper:{
    
  },
  inputLogin: {
    height: 40,
    backgroundColor: '#EDF1D6',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingLeft: 60,
    width: '77%',
    height: 60,
    padding: 10,
    color: 'rgba(64,81,59,0.6)',
    borderColor: "#609966",
    borderWidth: 2,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Bold'
  },
  inputCadastro: {
    height: 40,
    backgroundColor: '#EDF1D6',
    borderRadius: 8,
    paddingHorizontal: 8,
    width: '77%',
    height: 60,
    padding: 10,
    color: 'rgba(64,81,59,0.6)',
    fontWeight: 'bold',
    alignItems: 'center',
    fontFamily: 'Montserrat-Bold'
  },
  iconCadastro:{
    position: 'absolute',
    right: '15%',
    //top: '50%',
    bottom: '22%',
  },
  iconLogin:{
    position: 'absolute',
    left: '14%',
    bottom: '25%',
  },
});