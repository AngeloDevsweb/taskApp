import { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';



export default function CreateTask(){

    return (
      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
        <View style={styles.contenedor}>
          <TextInput placeholder="Ingresa el titulo" style={styles.textoInput} />

          <TextInput
            placeholder="Ingresa el detalle"
            style={styles.textoInput}
            multiline={true}
            numberOfLines={4}
          />
         
       
  
        </View>
        </View>
      </View>
    );
 
}

const styles = StyleSheet.create({
    contenedorPadre:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    tarjeta:{
        margin:20,
        backgroundColor:'white',
        borderRadius:20,
        width:'90%',
        padding:20,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5
    },
    contenedor:{
        padding:20
    },
    textoInput:{
        borderColor: '#B71375',
        borderWidth:1,
        padding:2,
        marginTop:10,
        borderRadius:8
    }
})
