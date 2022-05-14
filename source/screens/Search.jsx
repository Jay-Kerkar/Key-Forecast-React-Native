import React, { useState } from "react"
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native"
import { useColorScheme } from 'react-native'

const Search = ({ navigation }) => {
  const [city, setCity] = useState("")
  const [loading, setLoading] = useState(false)
  const theme = useColorScheme()

  const submit = async () => {
    setLoading(true)
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7e6608c5b9056461bbf1f7463c1caf92`
    const response = await fetch(api)
    const data = await response.json()
    setLoading(false)

    if (!loading) {
      navigation.navigate("SearchResult", { data })
    }
    setCity("")
  }
  return (
    <View style={theme == 'light' ? styles.container_light : styles.container_dark}>
      {
        loading ? (<View style={styles.loader}><ActivityIndicator size="large" color="#1E88E5" /></View>) : (
          <View>
            <View style={theme == 'light' ? styles.wrapper_light : styles.wrapper_dark}>
              <View style={styles.header}>
                <Text style={theme == 'light' ? styles.headerText_light : styles.headerText_dark}>Search by city name</Text>
              </View>
              <View style={styles.inputPart}>
                <View style={styles.content}>
                  <TextInput style={theme == 'light' ? styles.input_light : styles.input_dark} placeholder={"Enter city name"} placeholderTextColor={theme == 'light' ? "#263238" : "#CFD8DC"} onChangeText={(name) => { setCity(name) }} />
                  <View style={styles.separator}>
                  </View>
                  <TouchableOpacity style={styles.button} onPress={() => { submit() }}>
                    <Text style={theme == 'light' ? styles.buttonTxt_light : styles.buttonTxt_dark}>Get Details</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )
      }
    </View>
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
  wrapper_dark: {
    backgroundColor: "#221E2C",
    borderRadius: 7,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    width: 350,
    height: 350
  },
  wrapper_light: {
    backgroundColor: "#FFFFFF",
    borderRadius: 7,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    width: 350,
    height: 350
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
  inputPart: {
    marginHorizontal: 20,
    marginVertical: 60
  },
  input_dark: {
    width: "100%",
    height: 55,
    fontSize: 18,
    borderRadius: 7,
    textAlign: "center",
    paddingVertical: 0,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#37474F",
    color: "#CFD8DC"
  },
  input_light: {
    width: "100%",
    height: 55,
    fontSize: 18,
    borderRadius: 7,
    textAlign: "center",
    paddingVertical: 0,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#37474F",
    color: "#263238"
  },
  button: {
    width: "100%",
    height: 55,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#37474F",
    cursor: "pointer",
    backgroundColor: "#1E88E5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonTxt_dark: {
    fontSize: 19,
    paddingVertical: 0,
    paddingHorizontal: 15,
    color: "#CFD8DC"
  },
  buttonTxt_light: {
    fontSize: 19,
    paddingVertical: 0,
    paddingHorizontal: 15,
    color: "#263238"
  },
  separator: {
    marginVertical: 25
  }
})

export default Search