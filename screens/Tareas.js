import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";

export default function Tareas(props) {
  return (
    <ScrollView>
      <View>
        <TouchableOpacity style={styles.boton} onPress={()=>props.navigation.navigate('Crear')} >
          <Text style={styles.textoBoton}>Agregar una nueva nota</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    boton:{
        backgroundColor: '#B71375',
        borderColor: '#FC4F00',
        borderWidth:3,
        borderRadius: 20,
        marginLeft: 20,
        marginRight:20,
        marginTop:20       
    },
    textoBoton:{
        textAlign:'center',
        padding:10,
        color:'white',
        fontSize:16
    }
});
