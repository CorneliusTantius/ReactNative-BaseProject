import React from 'react'
import {View, SafeAreaView, Text, StyleSheet} from 'react-native'
const AboutScreen = () => {
    return (
        <SafeAreaView style={[styles.fill]}>
            <View style={[styles.fill, styles.center]}>
                <Text style={[styles.defatultTitle]}>React Native Base Project</Text>
                <Text style={[styles.defaultText]}>This is basically a base project for react native</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    fill:{
        flex:1
    },
    center:{
        justifyContent:"center",
        alignItems:"center"
    },
    defatultTitle:{
        margin:8,
        fontSize:24
    },
    defaultText:{
        margin:2,
        fontSize:16
    }
})

export default AboutScreen