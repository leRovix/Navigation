import APage from '../screens/somePage1'
import APage2 from "../screens/somePage2";

import {createNativeStackNavigator} from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function TabNavigator(){
    return(
        <Stack.Navigator
            initialRouteName="APage"
            screenOptions={{headerShown : false,}}>

            <Stack.Screen
                initialParams={{
                    screen : 'APage',
                }}
                options = {{
                    unmountOnBlur : true
                }}
                name = "APage"
                component={APage}
                />
            <Stack.Screen
                initialParams={{
                    screen : 'APage2',
                }}
                options = {{
                    unmountOnBlur : true
                }}
                name = "APage2"
                component={APage2}
            />
        </Stack.Navigator>
    )
}