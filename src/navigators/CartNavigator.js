import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Cart from '../screens/Cart';

function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Carrinho" component={Cart} />
      </Stack.Navigator>
  );
}

export default App;