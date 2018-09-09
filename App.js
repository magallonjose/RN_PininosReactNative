import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, Image, ScrollView, Button, WebView } from 'react-native';

export default class App extends React.Component {
  constructor(props, env){
    super(props, env);

    this.state= {
      colorFondo: 'white',
      direccion: 'https://www.google.es/'
    }
  }

  cambiarColor(){
    this.setState({colorFondo: this.state.text})
    /*
    if(this.state.colorFondo == 'white'){
      this.setState({colorFondo: '#ccccff'});
    }else if(this.state.colorFondo == '#ccccff'){
      this.setState({colorFondo: 'white'});
    }
    */
  }

  cambiarPagina(){
    this.setState({direccion: this.state.text})
  }
  
  render() {
    return (
      <ScrollView> 
        <View style={{
          flex: 1,
          backgroundColor: this.state.colorFondo,
          alignItems: 'center',
          justifyContent: 'center',
          }}>

          {/*Imagen local*/}
          <Image
            style={{width: 50, height: 50}}
            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
          />

          {/*Texto básico*/}
          <Text style={{margin: 15}}>Primeros pasos con React Native!</Text>

          {/*Texto de entrada*/}
          <TextInput
            placeholder= 'Ejemplo: blue o http://www.utp.ac.pa'
            style={styles.textoEntrada}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />

          {/*Boton para cambiar el color de fondo*/}
          <TouchableOpacity 
            style={styles.boton} 
            onPress={this.cambiarColor.bind(this)}>
            <Text style={styles.textoBoton} >Cambiar color de fondo!</Text>
          </TouchableOpacity>

          {/*Boton para cambiar la página*/}
          <TouchableOpacity 
            style={styles.boton} 
            onPress={this.cambiarPagina.bind(this)}>
            <Text style={styles.textoBoton} >Cambiar página!</Text>
          </TouchableOpacity>

          {/*Imagen local*/}
          <Text style={{margin: 15}}>Imagen Local</Text>
          <Image
            style={{width: '75%', height: 200}}
            source={{uri: 'http://www.comercioexterior.ub.edu/correccion/15-16/panama/img/panama.gif'}}
          />

          {/*WebView que enlace a un URL*/}
          <Text style={{margin: 15}}>WebView con enlace a un URL</Text>
          <WebView
            source={{uri: this.state.direccion}}
            style={{margin:15, width: Dimensions.get('window').width, height: 600}}
          />

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boton: {
    margin: 10,
    backgroundColor: '#ff1a1a',
    width: 300,
    height: 30,
    borderColor: '#ff1a1a',
    borderWidth: 1,
    borderRadius: 25,
    flexDirection: 'row'
  },
  textoBoton: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    flex: 1
  },
  textoEntrada: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    width: (Dimensions.get('window').width * 80 / 100), 
    margin: 10,
    textAlign: 'center',
    borderRadius: 1
  }
});
