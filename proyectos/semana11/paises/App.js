import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import Formulario from "./src/components/Formulario";
import Pais from "./src/components/Pais";

export default function App() {
  const [busqueda, guardarbusqueda] = useState({ pais: "", });

  const [consultar, guardarConsultar] = useState(false);

  const [resultado, guardarResultado] = useState({});

  useEffect(() => {
    const { pais } = busqueda;
    const consultarPais = async () => {
      if (consultar) {
        const url = `https://servicodados.ibge.gov.br/api/v1/paises/${pais}`;
        try {
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          guardarResultado(resultado);
          guardarConsultar(false);
        } catch (error) {
          mostrarAlerta();
        }
      }
    };
    consultarPais();
  }, [consultar]);
  const mostrarAlerta = () => {
    Alert.alert("Error", "No hay resultado intenta con otra ciudad o país"),
      [{ Text: "Ok" }];
  };

  return (
    <View style={styles.app}>
      <View style={styles.contenido}>
        <Formulario
          busqueda={busqueda}
          guardarbusqueda={guardarbusqueda}
          guardarConsultar={guardarConsultar}
        />
        <Pais resultado={resultado} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "rgb(71,149,212)",
    justifyContent: "center",
  },
  contenido: {
    margin: "2.5%",
  },
});
