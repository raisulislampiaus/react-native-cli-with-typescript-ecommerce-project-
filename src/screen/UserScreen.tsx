import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {TextInput as PaperInput, Button,} from 'react-native-paper';

const UserScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };
  return (
    <View style={styles.container}>
      <PaperInput
        label="Name"
        value={name}
        onChangeText={text => setName(text)}
        mode="outlined"
        style={{marginBottom: 20}}
      />

      <PaperInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        mode="outlined"
        style={{marginBottom: 20}}
      />

      <PaperInput
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        mode="outlined"
        secureTextEntry
        style={{marginBottom: 20}}
      />

      <Button mode="contained" onPress={handleSignup} >SiGNUP</Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
   
  }
})
export default UserScreen;
