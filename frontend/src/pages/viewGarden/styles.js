import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    barra: {
        height: 200,
        width: 20,
        margin: 10,
      },

    view_container: {
        flex: 1,
        backgroundColor: '#EDF1D6',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '100vh',
    },

    view_title_container:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '12%',
        marginBottom: '10%'
    },

    view_title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#40513B',
    },

    bottomBar_container: {
        backgroundColor: '#EDF1D6',
        position: 'absolute',
        width: '100%',
        height: 95,
        bottom: 0,
    },

    return_btn: {
        position: 'absolute',
        // top: 5,
        left: 8,
    },

    contentContainer:{
        flexGrow: 1, // isso que faz o scrollview funcionar 
    },

    view_description: {
        backgroundColor: '#D8E4C2',
        borderRadius: 8,
        alignSelf: 'center',
        marginBottom: '10%',
        width: '80%',
    },

    descriptionText:{
        color: '#40513B',
        fontWeight: 'bold',
        padding: 14
    },

    config_Text: {
        color: '#40513B',
        fontSize: 16,
        alignSelf: 'center',
        marginBottom: '10%',
    },

    view_bars: {
        display: 'flex',
        flexDirection: 'row',
    }
});