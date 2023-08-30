import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileImageContainer}>
        <Image
          source={{ uri: 'https://cdn.discordapp.com/attachments/893593100889497647/1146381463185543219/image.png' }}
          style={styles.profileImage}
        />
      </View>
      <Text style={styles.label}>Nom : Serra</Text>
      <Text style={styles.label}>Prénom : François</Text>
      <Text style={styles.label}>E-mail : franfran@gmail.com</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f9fc',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
    color: '#344356',
  },
  profileImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  }
});

export default ProfileScreen;
