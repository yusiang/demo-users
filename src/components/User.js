import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AddUser} from '../actions/userAction/userActions';
import {
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const User = () => {
  const [userValue, setUserValue] = useState('');

  const dispatch = useDispatch();
  const data = useSelector(state => state.users);
  const users = data.users.users;

  const addUser = () => {
      const entry = {id: "4", name: "test1 name", email:"test1 email"};
      dispatch(AddUser(entry));
      setUserValue('');
  };

  return (
    <View>
      <TextInput
        onChangeText={setUserValue}
        placeholder={'Add your user here'}
        value={userValue}
      />
      <Button name="increase" title="Add User" onPress={addUser} />
    </View>
  );
};

export default User;
