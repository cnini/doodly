import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer, useTheme } from "@react-navigation/native"
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons'

import { Home } from "../Home/Home"
import { Login } from "../Authentication/Login"
import { Registry } from "../Authentication/Registry"
import { Cart } from "../Cart/Cart"

const Tab = createBottomTabNavigator()

export const Navigation = () => {
    const theme = useTheme()
    theme.colors.secondaryContainer = "transparent"

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="HomeNavigation"
                activeColor='white'
                inactiveColor='gray'
                barStyle={{
                    backgroundColor: 'black',
                    height: 70,
                }}
            >

                <Tab.Screen 
                    name="Home" 
                    component={Home}
                    options={{
                        title: "Accueil",
                        tabBarLabel: 'Accueil',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome6 name="house" color={color} size={18} />
                        ),
                        tabBarActiveTintColor: "purple",
                        tabBarInactiveTintColor: "gray"
                    }}
                />

                <Tab.Screen 
                    name="Cart" 
                    component={Cart}
                    options={{
                        title: "Panier",
                        tabBarLabel: 'Panier',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome name="shopping-basket" color={color} size={18} />
                        ),
                        tabBarActiveTintColor: "purple",
                        tabBarInactiveTintColor: "gray"
                    }}
                />

                <Tab.Screen 
                    name="Login" 
                    component={Login}
                    options={{
                        title: "Connexion",
                        tabBarLabel: 'Connexion',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome name="user-circle" color={color} size={18} />
                        ),
                        tabBarActiveTintColor: "purple",
                        tabBarInactiveTintColor: "gray"
                    }}
                />

                <Tab.Screen 
                    name="Registry" 
                    component={Registry}
                    options={{
                        title: "Inscription",
                        tabBarLabel: 'Inscription',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome name="user-circle" color={color} size={18} />
                        ),
                        tabBarActiveTintColor: "purple",
                        tabBarInactiveTintColor: "gray"
                    }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    )
}