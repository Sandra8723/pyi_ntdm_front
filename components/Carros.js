import { View } from "react-native";
import { useState } from "react";
import { styles } from "../assets/styles/allstyles";
import { TextInput, Button, Checkbox, Text,} from "react-native-paper";


export default function Carros() {
    const [placa, setPlaca] = useState("");
    const [marca, setMarca] = useState("");
    const [checked, setChecked] = useState(false);


    return (
        <View style={styles.container}>
         <Text style={{ fontSize:36,
          fontWeight: 'bold',
          marginTop:"5%",
          color: '#2f4f4f',

        }}>CARROS</Text>
          <TextInput
           style={{
            padding:10,
            width:'80%',
            height:30,
            marginTop:20,
            borderRadius:30,
            backgroundColor:'white',
            paddingStart:30,
            color:'gray',
          } }
            label="Ingrese la placa del vehiculo"
            onChangeText={(placa) => setPlaca(placa)}
            right={<TextInput.Icon icon="text" />}
            value={placa}

          />
          <TextInput
            style={{
                padding:10,
                width:'80%',
                height:30,
                marginTop:20,
                borderRadius:30,
                backgroundColor:'white',
                paddingStart:30,
                color:'gray',
              } }
            label="Ingrese la marca del vehiculo"
            onChangeText={(marca) => setMarca(marca)}
            right={<TextInput.Icon icon="text" />}
            value={marca}
          />
    
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
            <Text>Vehiculo Disponible</Text>
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
          </View>
    
          <Button
            style={{ 
                marginTop:30,
                borderRadius:30,
                width:200,
                height:50, 
                backgroundColor:'#f0e68c' }}
            icon="content-save"
            mode="outlined"
            //onPress={registrarCarro}
            labelStyle={{ color: "black" }}
          >
            Guardar vehiculo
          </Button>
          </View>
  );
}
    