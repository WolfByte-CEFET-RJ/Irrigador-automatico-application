import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import React, { useState, useContext } from 'react';
import { View, Text, Image, Pressable, TouchableOpacity} from 'react-native';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import ErrorComponent from '../../components/Error/ErrorComponent';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import AuthContext from '../../contexts/auth';

const LogIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const [error, setError] = useState('');
  const { signed, signIn } = useContext(AuthContext);

  console.log(signed);

  function handleSign() {
    console.log(signIn);
  }

  const handleSubmit = async () => {

    //* Dados de input do usuário 
    const data = {
    email,
    password,
  }

    //* Verifica se os inputs foram preenchidos
    if(email === '' || password === '') {
      setError("Preencha todos os campos");
      setTimeout(() => {
        setError('');
      }, 3000);
    } 
    else {
      try {
        //* Envia os dados a API e caso esteja cadastrado irá ser redirecionado a tela de Home
        const response = await axios.post('http://localhost:5000/login', data);
        console.log(response);
        const token = response.data.token;
        navigation.navigate("Home")
      }
      catch (error) {
        //* Verifica o erro e printa na tela para o usuário
        
        console.error(error);
        setError(error.response.data.message);
        setTimeout(() => {
          setError('');
        }, 3000);
        // if (error.response) {
        //   console.error('Dados do erro:', error.response.data.message);
        //   console.error('Status do erro:', error.response.status);
        // }
      }
    }
  }

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <View style={styles.login_container}>
      <StatusBar/>
      <View style={styles.slogan_container}>
        <Text style={styles.app_name}>SmartGarden</Text>
        <Text style={styles.app_slogan}>Cadastre-se para automatizar sua horta</Text>
      </View>
      <Image style={styles.logo} source={require('../../../assets/android-chrome-512x512.png')}/>
      <View style={styles.input_container}>
        <Input placeHolder="Insira o seu email" value={email} onChangeText={text=>setEmail(text)} isLogin={true} isEmail={true}/>
        <Input placeHolder="Insira sua senha" value={password} onChangeText={text=>setPassword(text)} isPassword={true} isLogin={true} isEmail={false}/>
      </View>
      <View style={styles.remember_forgot}>
        <Text style={styles.forgot_text}>Esqueceu a senha?</Text>
      </View>
      <Button title="Acessar" onPress={()=>handleSign()} />
      <View style={styles.cadastrar_container}>
        <Text style={styles.cadastrar_text}>Não possui conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.cadastrar_navegacao}> Cadastre-se</Text>
        </TouchableOpacity>
      </View>
      <ErrorComponent message={error} />
    </View>
  );
};

export default LogIn;
