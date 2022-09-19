import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import { auth } from "../Authentication";
import { useNavigation } from '@react-navigation/native';

export default function Logout({...otherProps}) {
    const newPage = useNavigation();
    const handleSignOut = () => {
        auth.signOut()
        .then(()=>{
            newPage.reset("Login")
        })
        .catch(error => alert(error.message))
    }

    return(
        <TouchableOpacity style={styles.button} onPress={handleSignOut} {...otherProps}>
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
        padding: "2%",
    },
    text: {
        color: colors.white,
        fontSize: 15,
        padding: "1%",
        textTransform: "uppercase",
        fontWeight: "bold",
    },
})