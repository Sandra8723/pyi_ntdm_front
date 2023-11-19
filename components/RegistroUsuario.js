import { View,Picker, Image} from "react-native";
import { useState } from "react";
import { styles } from "../assets/styles/allstyles";
import { TextInput, Button, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";



export default function RegistroUsuario() {
  
  const navigation = useNavigation();
  const [usuario, setUsuario] = useState("");
  const [palabrareservada, setPalabrareservada] = useState("");
  const [nombre, setNombre] = useState("");
  const [rol, setRol] = useState("");
  const [showPass, setShowPass] = useState(false);


  return (
  
<View style={styles.container}>

<Image
    style={{
      width:'70%',
      height:'40%',
      position:"absolute",
      borderRadius:"60%",
      flex:1,
      marginBottom:360
      }}
      size={100}
      source={require('../assets/img/logousuario.png')} />
  <Text 
       style={{
        fontSize:36,
        fontWeight: 'bold',
        marginTop:350,
        color: '#2f4f4f',
        textAlign: 'center'
      }}>REGISTRO DE USUARIO</Text>
      
      <TextInput
      style={{ padding:10,
        width:'80%',
        height:30,
        marginTop:20,
        borderRadius:30,
        backgroundColor:'white',
        paddingStart:30,
        color:'gray', }}
        label="Usuario"
        onChangeText={(userName) => setUsuario(userName)}
        right={<TextInput.Icon icon="text" />}
      />
      <TextInput
        style={{ padding:10,
          width:'80%',
          height:30,
          marginTop:20,
          borderRadius:30,
          backgroundColor:'white',
          paddingStart:30,
          color:'gray', }}
        label="Nombre completo"
        onChangeText={(nombre) => setNombre(nombre)}
        right={<TextInput.Icon icon="text" />}
      />
        <Picker
        style={{ width: '80%',
        height: 30,
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: 'white',
        color: 'gray',}}
        selectedValue={rol}
        onValueChange={rol=>setRol(rol)}
        
      >
        <Picker.Item label="Admin" value="true" />
        <Picker.Item label="User" value="false" />
    


      </Picker>  
      
      <TextInput
        style={{padding:10,
          width:'80%',
          height:30,
          marginTop:20,
          borderRadius:30,
          backgroundColor:'white',
          paddingStart:30,
          color:'gray', }}
        label="Palabra reservada"
        onChangeText={(palabrareservada) => setPalabrareservada(palabrareservada)}
        secureTextEntry={!showPass}
        right={
          <TextInput.Icon
            icon={showPass ? "eye" : "eye-off"}
            onPress={() => setShowPass(!showPass)}
          />
        }
      />

      <Button
        style={{  marginTop:25,
          borderRadius:30,
          width:200,
          height:50, 
        backgroundColor:'#f0e68c' }}
        icon="account"
        mode="outlined"
        //onPress={registrarUsuario}
        labelStyle={{ color: "black" }}
      >
        Registrar
      </Button>


      
    </View>
  );
}