import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
// import AsyncStorage from '@react-native-async-storage/async-storage'

const History = async () => {
    // const SearchHistory = await AsyncStorage.getItem("SearchHistory")
    const SearchHistory = ["dombivli", "mumbai", "thane", "navi mumbai"]
    return (
        <View style={styles.container}>
            <FlatList data={SearchHistory} renderItem={
                <View style={styles.wrapper}>
                    <Text style={styles.text}>Dombivli</Text>
                </View>
            } />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "#43AFFC",
        width: "100%",
        height: "100%"
    },
    wrapper: {
        backgroundColor: "#fff",
        borderRadius: 7,
        shadowColor: "rgba(0, 0, 0, 0.05)",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        width: 370,
        height: 70,
        marginTop: 20
    },
    text: {
        fontSize: 18,
        marginLeft: 25,
        marginTop: 20
    }
})

export default History
