import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/Cripto/Home';
import CriptoDetails from '../components/Cripto/CriptoDetails';

const Stack = createNativeStackNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: Platform.OS === 'ios' ? 'white' : 'transparent'
    },
};

const Navigation = () => {
    return (
        <NavigationContainer
            theme={MyTheme}
        >
            <Stack.Navigator>
                <Stack.Screen name="Criptos" component={Home} />
                <Stack.Screen name="CriptoDetails" component={CriptoDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation;