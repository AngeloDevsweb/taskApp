import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";

import appFirebase from '../credenciales'
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoct} from 'firebase/firestore'
import { useEffect, useState } from "react";
import {ListItem, Avatar} from '@rneui/themed'
import { Alert } from "react-native";

const db = getFirestore(appFirebase)

export default function Tareas(props) {

  const [lista, setLista] = useState([])

  // logica para llamara la lista de documentos 
  useEffect(() => {
    const getLista = async()=>{
        try {
            const querySnapshot = await getDocs(collection(db, 'notas'))
            const docs = []
            querySnapshot.forEach((doc)=>{
                const {titulo, detalle, fecha, hora} = doc.data()
                docs.push({
                    id:doc.id,
                    titulo,
                    detalle,
                    fecha,
                    hora
                })
            })
            setLista(docs);
        } catch (error) {
            console.log(error);
        }
    }
    getLista()
}, [lista])

  return (
    <ScrollView>
      <View>
        <TouchableOpacity style={styles.boton} onPress={()=>props.navigation.navigate('Crear')} >
          <Text style={styles.textoBoton}>Agregar una nueva nota</Text>
        </TouchableOpacity>
      </View>


    <View style={styles.contenedor}>
      {lista.map((not)=>(
        <ListItem bottomDivider key={not.id} onPress={()=>{props.navigation.navigate('Detail', {
          notaId:not.id,
        })}} >
          <ListItem.Chevron/>

          <ListItem.Content >
            <ListItem.Title style={styles.titulo}>{not.titulo}</ListItem.Title>
            <ListItem.Subtitle>{not.fecha}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
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
    },
    contenedor:{
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
    titulo:{
      fontWeight:'bold'
    }
});
