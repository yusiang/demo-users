import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const UserScreen = props => {
    const user = props.navigation.getParam('item');
    return (
        <View style={{ flex: 1, justifyContent: 'left', alignItems: 'left' }}>
            <Text>name: {user.name}</Text>
            <Text>username: {user.username}</Text>
            <Text>email: {user.email}</Text>
            <Text>address: {user.address.city}</Text>
            <Text>phone: {user.phone}</Text>
            <Text>website: {user.website}</Text>
            <Text>company: {user.company.name}</Text>
            <Text>profile picture:</Text>
            <Image style={styles.tinyLogo}
                source={{
                uri: 'https://i.pravatar.cc/'+Math.floor(Math.random() * 100),
            }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

UserScreen.navigationOptions = {
    title: 'User Details'
};

export default UserScreen;