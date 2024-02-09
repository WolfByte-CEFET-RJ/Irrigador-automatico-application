import {
  StyleSheet
} from 'react-native';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalContent: {
    width: '90%',
    height: 393,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#EDF1D6',
    borderRadius: 8,
    alignItems: 'center',
  },
  iconHorta: {
    position: 'absolute',
    right: '2%',
    top: "2%",
  },
  information: {
    // borderColor: 'red',
    // borderWidth: 2,
    width: '90%',
    marginTop: '10%',
    gap: 18,
  },
  label: {
    color: '#40513B',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 10,
    fontFamily: 'Montserrat-Bold'
  },
  inputNome: {
    backgroundColor: '#D8E4C2',
    width: '100%',
    height: 40,
    color: '#40513B',
    fontWeight: 'bold',
    fontSize: 12,
    borderRadius: 8,
    paddingLeft: 12, 
    fontFamily: 'Montserrat-Bold'
  },
  inputDescricao: {
    backgroundColor: '#D8E4C2',
    width: '100%',
    height: 80,
    color: '#40513B',
    fontWeight: 'bold',
    fontSize: 12,
    borderRadius: 8,
    paddingLeft: 12, 
    fontFamily: 'Montserrat-Bold'
  },
  informationConfiguration:{
    display: 'flex',
    alignItems: 'center',
  },
  labelConfiguracao: {
    color: '#40513B',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 15,
    fontFamily: 'Montserrat-Bold'
  },
  inputConfiguracao: {
    backgroundColor: '#D8E4C2',
    width: '100%',
    height: 30,
    color: '#40513B',
    fontWeight: 'bold',
    fontSize: 12,
    borderRadius: 8,
    fontFamily: 'Montserrat-Bold'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems:  'center',
    width: '100%',
  },
});