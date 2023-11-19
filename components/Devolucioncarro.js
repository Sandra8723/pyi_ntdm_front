import { View, Picker } from "react-native";
import { useState } from "react";
import { TextInput, Button, Text } from "react-native-paper";
import { styles } from "../assets/styles/allstyles";


export default function Devolucion() {
    const [renturnnumber, setRenturnNumber] = useState("");
    const [rentnumber, setRentNumber] = useState("");
    const [returndate, setRentDate] = useState("");
    const [datarentnumber, setDatarentNumber] = useState([""]);
    const [datarenturnnumber, setDatarenturnNumber] = useState([]);
  
  
    return (
     <View style={styles.container}>
    
      <Text style={{
        fontSize:36,
        fontWeight: 'bold',
        marginTop:"10%",
        color: '#2f4f4f',
        textAlign: 'center',
      }}>
        DEVOLUCIÓN DE CARROS
      </Text>
        
      <Picker
      style={{    width: '80%',
      height: 50,
      marginTop: 20,
      borderRadius: 30,
      backgroundColor: 'white',
      color: 'gray',
  
      }}
      selectedValue={renturnnumber}
      onValueChange={renturnnumber=>setRenturnNumber(renturnnumber)}
      >
      {datarenturnnumber.map(item=>(
      <Picker.Item label= {item} value={item}/>
      ))}
      
      </Picker>
      <Picker
      style={{
        width: '80%',
        height: 50,
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: 'white',
        color: 'gray',
      }}
      selectedValue={rentnumber}
      onValueChange={rentnumber=>setRentNumber(rentnumber)}
      >
      {datarentnumber.map(item=>(
      <Picker.Item label= {item} value={item}/>
      ))}
      
  
      </Picker>
      
       <TextInput
          style={{
            padding:10,
            width:'80%',
            height:40,
            marginTop:20,
            borderRadius:30,  
            backgroundColor:'white',
            paddingStart:30,
            color:'gray',
          }}
          label="Ingrese la fecha devolución"
          onChangeText={(returndate) => setRentDate(fecha)}
          right={<TextInput.Icon icon="calendar-range" />}
          value={returndate}
        />
      
        <Button style={{
         marginTop:30,
         borderRadius:30,
         width:200,
         height:50, 
       backgroundColor:'#f0e68c' 
         
           // flex:1 
        }}
        //onPress={}
        icon="content-save"
        mode="outlined"
        labelStyle={{ color: "black" }}
        > GUARDAR </Button> 
        <Button style={{
          marginTop:30,
          borderRadius:30,
          width:200,
          height:50, 
        
          
            // flex:1
        }}
         //onPress={}
         labelStyle={{ color: "black" }}
         > Cerrar sesión </Button> 
        
        
        
        
  
      
          
      </View>
  );
  
}