import React, {useState, useEffect} from 'react';
import { Text, View, TextInput, Button, Alert, ScrollView  } from "react-native";
import { useForm, Controller } from "react-hook-form";
import {useDispatch, useSelector} from 'react-redux';
import {AddUser} from '../actions/userAction/userActions';
import * as Location from 'expo-location';

const EntryScreen = props => {

  const dispatch = useDispatch();

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const { control, handleSubmit, formState: { errors } } = useForm({
  });

  const onSubmit = data => {
        const entry = [];
        entry.name=data.name;
        entry.username=data.username;
        entry.email=data.email;
        entry.address=[];
        entry.address.street=data.street;
        entry.address.suite=data.suite;
        entry.address.city=data.city;
        entry.address.zipcode=data.zipcode;
        entry.address.geo=[];
        entry.address.geo.lat=data.latitude;
        entry.address.geo.lng=data.longitude;
        entry.phone=data.phone;
        entry.website=data.website;
        entry.company=[];
        entry.company.name=data.company;
        dispatch(AddUser(entry));
        props.navigation.navigate('Home');
        Alert.alert("Submission successful");
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      <Text>name</Text>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{height: 40, borderWidth: 1}}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="name"
      />
      {errors.name && <Text>This is required.</Text>}<Text>{'\n'}</Text>

      <Text>username</Text>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{height: 40, borderWidth: 1}}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="username"
      />
      {errors.username && <Text>This is required.</Text>}<Text>{'\n'}</Text>

      <Text>email</Text>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{height: 40, borderWidth: 1}}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      {errors.email && <Text>This is required.</Text>}<Text>{'\n'}</Text>

      <Text>street</Text>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{height: 40, borderWidth: 1}}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="street"
      />
      {errors.street && <Text>This is required.</Text>}<Text>{'\n'}</Text>

      <Text>city</Text>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{height: 40, borderWidth: 1}}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="city"
      />
      {errors.city && <Text>This is required.</Text>}<Text>{'\n'}</Text>

      <Text>suite</Text>
      <Controller
        control={control}
        rules={{
         required: false,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{height: 40, borderWidth: 1}}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="suite"
      />
      <Text>{'\n'}</Text>

      <Text>zipcode</Text>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{height: 40, borderWidth: 1}}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="zipcode"
      />
      {errors.zipcode && <Text>This is required.</Text>}<Text>{'\n'}</Text>

      <Text>latitude</Text>
      <Controller
        control={control}
        rules={{
         required: false,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            editable={false}
            style={{height: 40, borderWidth: 1}}
            value={location?.coords.latitude.toString()}
          />
        )}
        name="latitude"
      />

      <Text>longitude</Text>
      <Controller
        control={control}
        rules={{
         required: false,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            editable={false}
            style={{height: 40, borderWidth: 1}}
            value={location?.coords.longitude.toString()}
          />
        )}
        name="longitude"
      />

      <Text>phone</Text>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{height: 40, borderWidth: 1}}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="phone"
      />
      {errors.phone && <Text>This is required.</Text>}<Text>{'\n'}</Text>

      <Text>website</Text>
      <Controller
        control={control}
        rules={{
         required: false,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{height: 40, borderWidth: 1}}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="website"
      />

      <Text>company</Text>
      <Controller
        control={control}
        rules={{
         required: false,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{height: 40, borderWidth: 1}}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="company"
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </ScrollView>
  );
};

EntryScreen.navigationOptions = {
    title: 'New User'
};

export default EntryScreen;