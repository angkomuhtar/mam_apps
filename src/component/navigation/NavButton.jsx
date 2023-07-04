import {View, Text, Platform} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const NavButton = ({color, text, icon}) => {
  return (
    <View
      className={`flex flex-col items-center justify-center ${
        Platform.OS == 'ios' && 'mt-2'
      }`}>
      <Icon name={icon} size={20} color={color} />
      <Text className="text-xs font-semibold" style={{color: color}}>
        {text}
      </Text>
    </View>
  );
};

export default NavButton;
