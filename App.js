import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//importar nuestros componentes o screens
import Tareas from './screens/Tareas'
import CreateTask from './screens/CreateTask'

export default function App() {

    const Stack = createStackNavigator();

    function MyStack() {
      return (
        <Stack.Navigator>
          <Stack.Screen
            name="Notas"
            component={Tareas}
            options={{
              title: "NOTAS",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#8B1874" },
              headerTintColor: "white",
            }}
          />

          <Stack.Screen
            name="Crear"
            component={CreateTask}
            options={{
              title: "CREAR NOTA",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#8B1874" },
              headerTintColor: "white",
            }}
          />
        </Stack.Navigator>
      );
    }

  return (
    <NavigationContainer>
    <MyStack/>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
