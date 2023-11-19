import {  View } from "react-native";
import { useState } from "react";
import { styles } from "../assets/styles/allstyles";
import { TextInput, Button, Text } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";


export default function CambioContraseña() {
  const navigation = useNavigation();
  const [usuario, setUsuario] = useState("");
  const [palabrareservada, setPalabrareservada] = useState("");
  const [nuevacontraseña, setNuevacontraseña] = useState("")
  const [showPass,setShowPass]=useState(false);



return (
  
    <View style={styles.container}>
        <Text 
       style={{
          fontSize:36,
          fontWeight: 'bold',
          marginTop:"5%",
          color: '#2f4f4f',
          textAlign: 'center'
      }}>¿OLVIDASTE LA CONTRASEÑA?</Text>
      
      <TextInput
      style={{padding:10,
        width:'80%',
        height:50,
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
        style={{padding:10,
          width:'80%',
          height:50,
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
            //onPress={() => setShowPass(!showPass)}
          />
        }
      />
      
      <TextInput
        style={{padding:10,
          width:'80%',
          height:50,
          marginTop:20,
          borderRadius:30,
          backgroundColor:'white',
          paddingStart:30,
          color:'gray', }}
        label="Nueva contraseña"
        onChangeText={(nuevacontraseña) => setNuevacontraseña(nuevacontraseña)}
        secureTextEntry={!showPass}
        right={
          <TextInput.Icon
            icon={showPass ? "eye" : "eye-off"}
            //onPress={() => setShowPass(!showPass)}
          />
        }
        />


      <Button
        style={{  marginTop:30,
          borderRadius:30,
          width:200,
          height:50, 
        backgroundColor:'#f0e68c' }}
        icon="account"
        mode="outlined"
        //onPress={registrarUsuario}
        labelStyle={{ color: "black" }}
      >
        REGISTRAR
      </Button>
      <Button
        style={{ 
          marginTop:30,
          borderRadius:30,
          width:200,
          height:50, 
                
            // flex:1
          }}
        icon="login"
        
        //onPress={validarUsuario}
        labelStyle={{ color: "black" }}
      >
        Iniciar sesión
      </Button>
    </View>
  );
      }