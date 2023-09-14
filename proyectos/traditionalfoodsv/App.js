import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,  Image, ScrollView } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';

const DATA = [
  {
    id: '1',
    title: 'Pupusas',
    src:require('./src/img/pupusas.jpg')
  },
  {
    id: '2',
    title: 'Riguas',
    src:require('./src/img/riguas.jpg')
  },
  {
    id: '3',
    title: 'Chilate',
    src:require('./src/img/chilate.jpg')
  },
];

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Card>
          <Card.Title style={styles.titlemain}>Comidas Tipicas El Salvador</Card.Title>
          <Card.Divider/>
          {DATA.map((d, i) => {
            return (
                <Card key={i} style={styles.data}>
                <Card.Title style={styles.titledata}>{d.title}</Card.Title>
                <Card.Image style={styles.imgdata} source={d.src}/>
                </Card>
            );
          })}
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titlemain: {
    fontSize: 30,
    backgroundColor: 'grey'
  },
  data: {

  },
  titledata: {
    fontSize: 25,
    justifyContent: 'space-between',
    paddingLeft: 60
  },
  imgdata: {
    width: 125,
    height: 125,
    borderRadius: 400/2,
    justifyContent: 'space-between'
  },

});
