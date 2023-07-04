import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

const Home = () => {
  return (
    <SafeAreaView>
      <View className="flex justify-center items-center">
        <Text>Home</Text>
        <Entypo name="home" size={35} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
