import {Button, View} from "react-native";
import {Text} from "react-native";
import {useNavigation} from "@react-navigation/native";
export default function APage2(){
    const navigation = useNavigation();
    return (
        <View>
            <Text> Woohoo, a second page!</Text>
            <Button title="to page 1" onPress = {() => navigation.navigate('APage')} />
        </View>
    );
}