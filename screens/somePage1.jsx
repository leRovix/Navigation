import {View} from "react-native";
import {Text} from "react-native";
import {Button} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {use} from "react";


export default function APage(){
    const navigation = useNavigation();
    return (
        <View>
            <Text> Woohoo, a page!</Text>
            <Button title="to page 2" onPress = {() => navigation.navigate('APage2')} />
        </View>
    )
}