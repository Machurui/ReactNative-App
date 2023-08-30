import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://estiamqcm.davilat.com/api/quizzes')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Erreur de récupération des données:', error));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              navigation.navigate('Questionnaire');
            }}
          >
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <Text style={styles.cardText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f9fc',
  },
  card: {
    shadowColor: '#c5d0db',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    flex: 1,
    margin: 10,
    padding: 14,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#d8e1e8',
  },
  cardImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
  },
  cardText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#344356',
  },
});


export default HomeScreen;
