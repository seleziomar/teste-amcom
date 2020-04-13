import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from '../screens/Home';
import Products from '../screens/Products';
import Product from '../screens/Product';

function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Produtos" component={Products} />
        <Stack.Screen name="Produto" component={Product} />
      </Stack.Navigator>
  );
}

export default App;