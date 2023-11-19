import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Picker } from 'react-native';
import {  Text,  TextInput, Button } from 'react-native-paper';
 // Import Picker directly from 'react-native'

export default function Rentar() {
  const [renturnnumber, setRenturnNumber] = useState("");
  const datarenturnnumber = ["Opción 1", "Opción 2", "Opción 3"];

  return (
    <View style={styles.container}>
      
     
      <Text style={styles.subtitulo}>RENTAR</Text>
        <Picker
        selectedValue={renturnnumber}
        onValueChange={(itemValue) => setRenturnNumber(itemValue)}
        style={styles.picker}
      >
        {datarenturnnumber.map((item, index) => (
          <Picker.Item label={item} value={item} key={index} />
        ))}         
      </Picker>
      <TextInput
        placeholder='Fecha Inicial'
        style={styles.TextInput}
      /> 
    
      <TextInput
        placeholder='Fecha Final'
        style={styles.TextInput}
      />
      
      <TextInput
        placeholder='Número de Renta'
        style={styles.TextInput}
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
        GUARDAR
      </Button>
      <Button
        style={{  marginTop:30,
            borderRadius:30,
            width:250,
            height:50, 
          }}
      
        //onPress={registrarUsuario}
        labelStyle={{ color: "black" }}
      >
        Listar Vehiculos Disponibles
      </Button>

      <Button
        style={{  marginTop:5,
            borderRadius:30,
            width:250,
            height:50, 
          }}
    
        //onPress={registrarUsuario}
        labelStyle={{ color: "black" }}
      >
       Cerrar Sesión
      </Button>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:  '#5f9ea0',
    fontFamily: "Roboto"
  },
  
  subtitulo:{
    fontSize:36,
      fontWeight: 'bold',
      marginTop:"10%",
      color: '#2f4f4f',
  },
  TextInput:{
    padding:10,
    width:'80%',
    height:30,
    marginTop:20,
    borderRadius:30,  
    backgroundColor:'white',
    paddingStart:30,
    color:'gray',
  },
 
  
  button:{
    marginTop:50,
    borderRadius:30,
    width:200,
    height:50, 
  backgroundColor:'#f0e68c' 
    // flex:1
  },


  picker: {
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: 'white',
    color: 'gray',
  },
});