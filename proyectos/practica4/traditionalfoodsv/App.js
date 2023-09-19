import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,  Image, ScrollView } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';

const DATA = [
  {
    id: '1',
    title: 'Pupusas',
    description: 'Lorem ipsum asasasasas',
    src:require('./src/img/pupusas.jpg')
  },
  {
    id: '2',
    title: 'Riguas',
    description: 'Lorem ipsum asasasasas',
    src:require('./src/img/riguas.jpg')
  },
  {
    id: '3',
    title: 'Chilate',
    description: 'Lorem ipsum asasasasas',
    src:require('./src/img/chilate.jpg')
  },
];

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
          <Text style={styles.titlemain}>Comidas Tipicas El Salvador</Text>
      </View>
          {DATA.map((d, i) => {
            return (
                <View style={styles.datacontainer}>
                  <Card key={i} style={styles.data}>
                    <Card.Title style={styles.titledata}>{d.title}</Card.Title>
                    <Text style={styles.descdata}>{d.description}</Text>
                    <Card.Image style={styles.imgdata} source={d.src}/>
                  </Card>
                </View>
            );
          })}
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'grey',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titlemain: {
    marginTop: 30,
    fontSize: 28,
    backgroundColor: 'darkgrey',
    color: 'black',
    borderRadius: 5
  },
  datacontainer: {

  },
  data: {
    
  },
  titledata: {
    fontSize: 25,
    justifyContent: 'space-between',
    paddingLeft: 60,
  },
  imgdata: {
    width: 125,
    height: 125,
    borderRadius: 400/2,
    justifyContent: 'space-between'
  },
});
