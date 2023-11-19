import { StatusBar } from 'expo-status-bar';
import {  Text,  TextInput, Button } from 'react-native-paper';
import {  Image, View } from 'react-native';
import { styles } from '../assets/styles/allstyles';

export default function Login() {

    return (
      <View style={styles.container}>
       <Image
                style={{
                  width:'70%',
                  height:'35%',
                  position:"absolute",
                  borderRadius:"60%",
                  flex:1,  
                  marginBottom:360
                }}
                size={100}
                source={require('../assets/img/logo.jpeg')} />
        
      <Text style={{ fontSize:36,
      fontWeight: 'bold',
      marginTop:"70%",
      color: '#2f4f4f',

        }}>INICIO DE SESIÓN</Text>
        
        <TextInput
        placeholder='Correo Electrónico'
        style={{ padding:10,
          width:'80%',
          height:30,
          marginTop:10,
          borderRadius:30,
          backgroundColor:'white',
          paddingStart:30,
          color:'gray',}}
        />
        <TextInput
        placeholder='Contraseña'
        style={{
          padding:10,
          width:'80%',
          height:30,
          marginTop:10,
          borderRadius:30,
          backgroundColor:'white',
          paddingStart:30,
          color:'gray',
        }}
        />

    <Button
        style={{  marginTop:10,
            borderRadius:30,
            width:250,
            height:50, 
          backgroundColor:'#f0e68c' }}
        icon="account"
        mode="outlined"
        //onPress={registrarUsuario}
        labelStyle={{ color: "black" }}
      >
        INICIAR SESIÓN
      </Button>
      <Button
        style={{  marginTop:20,
            borderRadius:30,
            width:250,
            height:50, 
          }}
    
        //onPress={registrarUsuario}
        labelStyle={{ color: "black" }}
      >
        Registrese AQUÍ
      </Button>
      <Button
        style={{  marginTop:10,
            borderRadius:30,
            width:250,
            height:50, 
          }}
      
        //onPress={registrarUsuario}
        labelStyle={{ color: "black" }}
      >
        ¿Olvidaste la contraseña?
      </Button>

     



      </View>
    );
  }
  
 