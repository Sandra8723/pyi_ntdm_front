import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistroUsuario from './components/RegistroUsuario'
import CambioContraseña from './components/CambioContraseña'
import Login from './components/Login'
import Devolucioncarro from './components/Devolucioncarro'
import Renta from './components/Renta'
import Carros from './components/Carros'

export default function App() {
  const stack= createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Devolucion carro" 
      >
       <stack.Screen
        name="Inicio de sesión"
        component={Login}
      >
      </stack.Screen>

      <stack.Screen
        name="Registro usuario"
        component={RegistroUsuario}
      >
      </stack.Screen>

      <stack.Screen
        name="Cambio contraseña"
        component={CambioContraseña}
      >
      </stack.Screen>

      <stack.Screen
        name="Devolucion carro"
        component={Devolucioncarro}
      >
      </stack.Screen>

      <stack.Screen
        name="Renta carros"
        component={Renta}
      >
      </stack.Screen>

      <stack.Screen
        name="Carros"
        component={Carros}
      >
      </stack.Screen>
      



      </stack.Navigator>


    </NavigationContainer>
  );
}

