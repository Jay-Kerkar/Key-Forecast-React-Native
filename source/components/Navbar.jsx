import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from '../screens/Home'
import Search from '../screens/Search'
import About from '../screens/About'
import { useColorScheme } from 'react-native'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const Navbar = () => {
    const theme = useColorScheme()
    let backgroundColor
    let color
    let tintColor

    if (theme === "light") {
        backgroundColor = "#FFFFFF",
            color = "black",
            tintColor = "black"
    } else {
        backgroundColor = "#161B22",
            color = "white",
            tintColor = "#CFD8DC"
    }
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let icon
                        let routeName = route.name

                        if (routeName === "Home") {
                            icon = focused ? 'home' : 'home-outline'

                        } else if (routeName === "Search") {
                            icon = focused ? 'search' : 'search-outline'

                        } else if (routeName === "About") {
                            icon = focused ? 'information-circle' : 'information-circle-outline'
                        }
                        return <Ionicons name={icon} size={size} color={color} />
                    },
                    tabBarActiveTintColor: '#1E88E5',
                    tabBarInactiveTintColor: `${tintColor}`,
                    tabBarLabelStyle: { fontSize: 11 },
                    tabBarStyle: {
                        padding: 10,
                        height: 60,
                        backgroundColor: `${backgroundColor}`,
                        paddingBottom: 5
                    }
                })
                }
            >
                <Tab.Screen name="Home" component={Home} options={{ headerStyle: { backgroundColor: `${backgroundColor}` }, headerTintColor: `${color}`, headerTitleStyle: { marginLeft: 10 }, headerTitle: "Home" }} />
                <Tab.Screen name="Search" component={Search} options={{ headerStyle: { backgroundColor: `${backgroundColor}` }, headerTintColor: `${color}`, headerTitleStyle: { marginLeft: 10 }, headerTitle: "Search" }} />
                <Tab.Screen name="About" component={About} options={{ headerStyle: { backgroundColor: `${backgroundColor}` }, headerTintColor: `${color}`, headerTitleStyle: { marginLeft: 10 }, headerTitle: "About Us" }} />

            </Tab.Navigator>
        </NavigationContainer >
    )
}

export default Navbar