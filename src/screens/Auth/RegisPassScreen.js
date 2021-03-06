import React, {useLayoutEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import MyInputText from '../../components/MyInputText/MyInputText';
import rootColor from '../../constants/rootColor';
import {useNavigation} from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {useRoute} from '@react-navigation/native';

const RegisPassScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {email} = route.params;
  const [password, setPassword] = useState();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 10}}
          onPress={() => navigation.goBack()}>
          <MaterialIcon
            name="arrow-back"
            color={rootColor.whiteColor}
            size={24}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tạo một mật khẩu</Text>
      <View style={styles.inputContainer}>
        <MyInputText
          width="100%"
          isPassword
          value={password}
          setValue={setPassword}
        />
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <TouchableOpacity
          style={styles.btnNext}
          onPress={() =>
            navigation.push('DisplayName', {
              email,
              password,
            })
          }>
          <Text style={styles.btnText}>Tiếp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: rootColor.blackColor,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: rootColor.whiteColor,
    marginTop: 20,
  },
  inputContainer: {
    marginVertical: 10,
  },
  btnNext: {
    paddingHorizontal: 50,
    paddingVertical: 12,
    borderRadius: 25,
    backgroundColor: rootColor.grayColor,
  },
  btnText: {
    color: rootColor.whiteColor,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default RegisPassScreen;
