import React from "react";
import { StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import colors from "../config/colors";
import { auth } from "../Authentication";
import { useNavigation } from '@react-navigation/native';

export default function Logout({style,...otherProps}) {
    const newPage = useNavigation();

    const user = auth.currentUser; //gets current user's information

    const handleSignOut = () => {
        auth.signOut()
        .then(()=>{
            newPage.reset({index: 0, routes: [{name: "Login"}]})
        })
        .catch(error => alert(error.message))
    }

    return(
        <TouchableOpacity style={[styles.button, style]} onPress={()=>Alert.alert("Log out",`Are you sure you want to log out?`,
        [{text:'Yes', onPress: ()=>handleSignOut()}, {text: 'No'}])} {...otherProps}>
            <Text style={styles.text} {...otherProps}>Log out</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.lightblue,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: "4%",
    },
    text: {
        color: colors.white,
        fontSize: 14,
        padding: "3%",
        textTransform: "uppercase",
        fontWeight: "bold",
    },
})