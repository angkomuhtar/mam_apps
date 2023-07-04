import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text, Platform} from 'react-native';
import NavButton from '../component/navigation/NavButton';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#D4211A',
        tabBarStyle: {
          height: Platform.OS == 'ios' ? 90 : 80,
          borderTopEndRadius: 30,
          borderTopStartRadius: 30,
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return <NavButton color={color} text="home" icon="ios-home" />;
          },
        }}
      />
      <Tab.Screen
        name="history"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return <NavButton color={color} text="history" icon="today" />;
          },
        }}
      />
      <Tab.Screen
        name="Absen"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View className="relative flex flex-col items-center ">
                <View
                  style={{backgroundColor: '#D4211A'}}
                  className="flex flex-row items-center p-2 rounded-full -top-5 border-4 border-white">
                  <Icon name={'ios-barcode-outline'} size={33} color="#fff" />
                </View>
                <Text
                  style={{color: color}}
                  className="bottom-4 text-xs font-semibold">
                  check in
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="account"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return <NavButton color={color} text="account" icon="ios-person" />;
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return <NavButton color={color} text="account" icon="settings" />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="HomeBase"
          options={{headerShown: false}}
          component={MyTabs}
        />
        {/* add your another screen here using -> Stack.Screen */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
