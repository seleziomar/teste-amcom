import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

import ProductNavigator from './ProductNavigator';
import CartNavigator from './CartNavigator';

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Produtos" component={ProductNavigator}  
                options={{tabBarIcon: ({ color, size }) => (
                <Icon name="md-basket" color={color} size={30} />
              )}}/>
              <Tab.Screen name="Carrinho" component={CartNavigator}  
                options={{tabBarIcon: ({ color, size }) => (
                <Icon name="md-cart" color={color} size={30} />
              )}}/>
        </Tab.Navigator>
    </NavigationContainer>
  );
}