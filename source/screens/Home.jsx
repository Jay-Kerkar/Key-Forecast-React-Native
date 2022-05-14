import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native'
import * as Location from 'expo-location'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useColorScheme } from 'react-native'

const Home = () => {
    const [weatherData, setWeatherData] = useState()
    const [status, setStatus] = useState()
    const [loading, setLoading] = useState(true)
    const theme = useColorScheme()

    const weather = async (userLocation) => {
        const latitude = userLocation.coords.latitude
        const longitude = userLocation.coords.longitude

        const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=7e6608c5b9056461bbf1f7463c1caf92`
        const response = await fetch(api)
        const data = await response.json()

        if (data.weather[0].main) {
            switch (data.weather[0].main) {
                case "Clouds":
                    setStatus(require("../../assets/cloud.png"))
                    break
                case "Haze":
                    setStatus(require("../../assets/haze.png"))
                    break
                case "Clear":
                    setStatus(require("../../assets/clear.png"))
                    break
                case "Mist":
                    setStatus(require("../../assets/haze.png"))
                    break
                case "Rain":
                    setStatus(require("../../assets/rain.png"))
                    break
                case "Storm":
                    setStatus(require("../../assets/storm.png"))
                    break
                default:
                    setStatus(require("../../assets/clear.png"))
                    break
            }
        }

        setWeatherData(data)
        setLoading(false)
    }

    const location = async () => {
        let userLocation = await Location.getCurrentPositionAsync({})
        weather(userLocation)
    }

    useEffect(() => {
        location()
    }, [])
    return (
        <View style={theme == 'light' ? styles.container_light : styles.container_dark}>
            {
                loading ? (<View style={styles.loader}><ActivityIndicator size="large" color="#1E88E5" /></View>) : (
                    <View>
                        <View style={theme == 'light' ? styles.wrapper_light : styles.wrapper_dark}>
                            <View style={styles.header}>
                                <Text style={theme == 'light' ? styles.headerText_light : styles.headerText_dark}>Key Forecast</Text>
                            </View>
                            <View style={styles.weatherPart}>
                                <Image style={styles.image} source={status} resizeMode="contain" />
                                <View style={styles.temp}>
                                    <Text style={theme == 'light' ? styles.tempValue_light : styles.tempValue_dark}>{Math.round(weatherData.main.temp - 273.15)}°C</Text>
                                </View>
                                <View style={styles.weather}>
                                    <Text style={theme == 'light' ? styles.weatherText_light : styles.weatherText_dark}>{weatherData.weather[0].main}</Text>
                                </View>
                                <View style={styles.location}>
                                    <Ionicons name="location" color={"#07A350"} size={22} style={{ marginRight: 5, marginTop: 4 }} />
                                    <Text style={theme == 'light' ? styles.locationText_light : styles.locationText_dark}>{weatherData.name}, India</Text>
                                </View>
                                <View style={styles.bottomDetails}>
                                    <View style={[styles.column, styles.feels]}>
                                        <Ionicons name="thermometer" size={22} style={styles.columnIcon} />
                                        <View style={styles.details}>
                                            <View style={styles.feelTemp}>
                                                <Text style={theme == 'light' ? styles.feelTempValue_light : styles.feelTempValue_dark}>{Math.round(weatherData.main.feels_like - 273.15)}°C</Text>
                                            </View>
                                            <Text style={theme == 'light' ? styles.feelsLike_light : styles.feelsLike_dark}>Feels like</Text>
                                        </View>
                                    </View>
                                    <View style={[styles.column, styles.humidity]}>
                                        <Ionicons name="water" size={22} style={styles.columnIcon} />
                                        <View style={styles.details}>
                                            <Text style={theme == 'light' ? styles.humidityValue_light : styles.humidityValue_dark}>{weatherData.main.humidity}%</Text>
                                            <Text style={theme == 'light' ? styles.humidityText_light : styles.humidityText_dark}>Humidity</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                )
            }
        </View >
    )
}

const styles = StyleSheet.create({
    container_dark: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0D1117",
        width: "100%",
        height: "100%"
    },
    container_light: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ECEFF1",
        width: "100%",
        height: "100%"
    },
    loader: {
        minHeight: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    wrapper_dark: {
        backgroundColor: "#263238",
        borderRadius: 7,
        shadowColor: "rgba(0, 0, 0, 0.05)",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        width: 350,
        height: 540
    },
    wrapper_light: {
        backgroundColor: "#FFFFFF",
        borderRadius: 7,
        shadowColor: "rgba(0, 0, 0, 0.05)",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        width: 350,
        height: 540
    },
    header: {
        display: "flex",
        fontSize: 21,
        fontWeight: "500",
        paddingVertical: 16,
        paddingHorizontal: 15,
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#37474F"
    },
    headerText_dark: {
        color: "#90A4AE",
        fontSize: 19
    },
    headerText_light: {
        color: "#455A64",
        fontSize: 19
    },
    weatherPart: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        margin: 30
    },
    image: {
        width: "50%",
        height: undefined,
        aspectRatio: 1
    },
    temp: {
        display: "flex",
        marginVertical: 10
    },
    tempValue_dark: {
        fontWeight: "600",
        fontSize: 60,
        color: "#CFD8DC"
    },
    tempValue_light: {
        fontWeight: "600",
        fontSize: 60,
        color: "#263238"
    },
    weather: {
        textAlign: "center"
    },
    weatherText_dark: {
        fontSize: 21,
        marginLeft: 5,
        color: "#CFD8DC"
    },
    weatherText_light: {
        fontSize: 21,
        marginLeft: 5,
        color: "#263238"
    },
    location: {
        display: "flex",
        paddingHorizontal: 20,
        textAlign: "center",
        marginTop: 15,
        flexDirection: "row"
    },
    locationText_dark: {
        fontSize: 19,
        color: "#CFD8DC"
    },
    locationText_light: {
        fontSize: 19,
        color: "#263238"
    },
    bottomDetails: {
        display: "flex",
        width: "120%",
        justifyContent: "space-between",
        flexDirection: "row",
        borderTopWidth: 1,
        borderTopColor: "#37474F",
        marginVertical: 20,
        marginLeft: 0
    },
    column: {
        display: "flex",
        width: "50%",
        paddingVertical: 15,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    details: {
        marginLeft: 3
    },
    feelTemp: {
        fontWeight: "500",
        marginTop: -3
    },
    feelTempValue_dark: {
        fontWeight: "500",
        fontSize: 18,
        color: "#CFD8DC"
    },
    feelTempValue_light: {
        fontWeight: "500",
        fontSize: 18,
        color: "#263238"
    },
    feelsLike_dark: {
        fontSize: 14,
        marginTop: -6,
        color: "#CFD8DC"
    },
    feelsLike_light: {
        fontSize: 14,
        marginTop: -6,
        color: "#263238"
    },
    humidity: {
        borderLeftWidth: 1,
        borderLeftColor: "#37474F"
    },
    humidityValue_dark: {
        fontWeight: "500",
        marginTop: -3,
        fontSize: 18,
        color: "#CFD8DC"
    },
    humidityValue_light: {
        fontWeight: "500",
        marginTop: -3,
        fontSize: 18,
        color: "#263238"
    },
    humidityText_dark: {
        fontSize: 14,
        marginTop: -6,
        color: "#CFD8DC"
    },
    humidityText_light: {
        fontSize: 14,
        marginTop: -6,
        color: "#263238"
    },
    locationIcon: {
        marginTop: 4,
        marginRight: 5
    },
    columnIcon: {
        color: "#5DBBFF",
        fontSize: 40
    }
})

export default Home