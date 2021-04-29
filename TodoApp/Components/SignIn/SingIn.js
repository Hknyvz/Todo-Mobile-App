import color from 'color';
import React from 'react';
import { View, StyleSheet, Text } from "react-native";
import { Header, Input, Button, Icon } from "react-native-elements";
import style from "./SignInStyle"

export default function SingIn() {
    return (
        <>
            <Header
                style={style.header}
                leftComponent={<Button icon={<Icon name="menu" color="#fff" />} />}
                centerComponent={<View><Text style={{ color: "#fff", fontSize: 20 }}>Sign In</Text></View>}
                rightComponent={<Button icon={<Icon name="home" color="#fff" />} />}
            />
            <View style={style.body}>
                <View style={style.brand}><Text style={style.brandText}>ToDo APP</Text></View>
                <Input label="Email" keyboardType="email-address">
                </Input>
                <Input label="Password">
                </Input>
                <View style={style.container}>
                    <Button title="Sign In" containerStyle={{ width: 120 }} buttonStyle={{ backgroundColor: "green" }} />
                    <Button title="Sign Up" containerStyle={{ width: 120 }} type="outline" />
                </View>
            </View>

        </>
    )
}

