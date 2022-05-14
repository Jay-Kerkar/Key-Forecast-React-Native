import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useColorScheme } from 'react-native'

const About = () => {
    const theme = useColorScheme()
    return (
        <View style={theme == 'light' ? styles.container_light : styles.container_dark}>
            <Text style={theme == 'light' ? styles.header_light : styles.header_dark}>Jay Kerkar</Text>
            <Text style={theme == 'light' ? styles.description_light : styles.description_dark}>A React-Native Developer</Text>
            <View>
                <Image style={styles.image} source={{ uri: "https://us.123rf.com/450wm/djvstock/djvstock1508/djvstock150806893/44095667-web-developer-design-vector-illustration-eps-10-.jpg" }} />
            </View>
            <View style={theme == 'light' ? styles.about_light : styles.about_dark}>
                <Text style={theme == 'light' ? styles.subHeader_light : styles.subHeader_dark}>About Me</Text>
                <Text style={theme == 'light' ? styles.description_light : styles.description_dark}>I have a work experience of 2 years, worked in different technologies and have built efficient app for many clients</Text>
            </View>
            <Text style={[theme == 'light' ? styles.header_light : styles.header_dark, { paddingBottom: 10 }]}>Follow Me On Social Newtwork</Text>
            <View style={styles.menu}>
                <TouchableOpacity onPress={() => Linking.openURL("https://www.instagram.com/")} style={styles.button}>
                    <Ionicons name="logo-instagram" size={40} color={"#1E88E5"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com/")} style={styles.button}>
                    <Ionicons name="logo-facebook" size={40} color={"#1E88E5"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL("https://www.twitter.com/")} style={styles.button}>
                    <Ionicons name="logo-twitter" size={40} color={"#1E88E5"} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container_dark: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#0D1117"
    },
    container_light: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#ECEFF1"
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    header_dark: {
        fontSize: 18,
        color: "#CFD8DC",
        textTransform: "uppercase",
        fontWeight: "500",
        marginTop: 40,
        marginBottom: 10
    },
    header_light: {
        fontSize: 18,
        color: "#455A64",
        textTransform: "uppercase",
        fontWeight: "500",
        marginTop: 40,
        marginBottom: 10
    },
    description_dark: {
        fontSize: 18,
        color: "#CFD8DC",
        paddingBottom: 30
    },
    description_light: {
        fontSize: 18,
        color: "#263238",
        paddingBottom: 30
    },
    about_dark: {
        backgroundColor: "#221E2C",
        paddingHorizontal: 30,
        marginTop: 20
    },
    about_light: {
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 30,
        marginTop: 20
    },
    subHeader_dark: {
        fontSize: 18,
        color: "#CFD8DC",
        textTransform: "uppercase",
        fontWeight: "500",
        marginVertical: 15,
        alignSelf: "center"
    },
    subHeader_light: {
        fontSize: 18,
        color: "#263238",
        textTransform: "uppercase",
        fontWeight: "500",
        marginVertical: 15,
        alignSelf: "center"
    },
    aboutDescription_dark: {
        color: "#CFD8DC",
        fontSize: 18,
        lineHeight: 26,
        paddingVertical: 10
    },
    aboutDescription_light: {
        color: "#263238",
        fontSize: 18,
        lineHeight: 26,
        paddingVertical: 10
    },
    menu: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginBottom: 10
    },
    socialIcons: {
        width: "100%",
        height: 50,
        aspectRatio: 1,
        marginTop: 10,
        padding: 33,
        borderRadius: 50
    }
})

export default About