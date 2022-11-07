import React from 'react';
import { View, Text } from 'react-native';

//React Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Inicio from './views/Inicio';
import Nosotros from './views/Nosotros';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Inicio'
        screenOptions={{ 
          headerStyle: { backgroundColor: '#F4511E' },
          headerTintColor: '#FFF',
          headerTitleStyle: { fontWeight: 'bold' },
          headerTitleAlign: 'center'
        }}
      >
        <Stack.Screen
          name='Inicio'
          component={ Inicio }
          options={{ 
            title: 'Componente Principal',
            // headerStyle: { backgroundColor: '#F4511E' },
            // headerTintColor: '#FFF',
            // headerTitleStyle: { fontWeight: 'bold' },
            // headerTitleAlign: 'center'
          }}
        />

        <Stack.Screen
          name='Nosotros'
          component={ Nosotros }
          // options={{ title: 'Sobre Nosotros' }}
          options={ ({ route, navigation }) => ({
            title: route.params.clientId.toString()
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )   
}

export default App;
