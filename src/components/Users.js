import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

const Users = (props) => {
    const [isLoading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const data = useSelector(state => state);
    const users = data.users.users;

    function populateUsers(json) {
	   users.push(...json);
    }

    getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users/')
          .then((response) => response.json())
          .then((json) => populateUsers(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    }
    useEffect(() => {
        setLoading(true);
        getUsers();
    }, []);


  const renderUserList = () => {
    return (
      <FlatList
        data={users}
        keyExtractor={( item,index ) => index.toString()}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() =>
                                props.navigation.navigate('User', {
                                    item: item
                                })
                            }
                        >
                            <View>
                                <Text>{item.name} ({item.email})</Text>
                            </View>
                        </TouchableOpacity>
                    }
      />
    );
  };


  return (
    <View style={{ padding: 20, flex:1 }}>
       <View>
            <ActivityIndicator
               style = {{
                    position: 'absolute',
                    alignItems: 'center',
                    justifyContent: 'center',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
               }}
               animating = {isLoading}
               color = '#bc2b78'
               size = "large"
               style = {styles.activityIndicator}/>
      </View>
      {renderUserList()}
      <TouchableHighlight style={styles.floatingButton}
                                    underlayColor='#ff7043'
                                    onPress={() => props.navigation.navigate('Entry')}>
                    <Text style={{fontSize: 25, color: 'white'}}>+</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
    floatingButton:{
        backgroundColor: '#6B9EFA',
        borderColor: '#6B9EFA',
        height: 55,
        width: 55,
        borderRadius: 55 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 60,
        right: 15,
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
    }
});

export default Users;