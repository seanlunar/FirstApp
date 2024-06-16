import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function Button ({ label }){
    return (
        <View style={StyleSheet.buttonContainer}>
            <Pressable style={StyleSheet.button} onPress={() => alert(' you have pressed a button')}>
                <Text style={StyleSheet.buttonLabel}>
                    {label}
                </Text>
            </Pressable>
        </View>
    )
}