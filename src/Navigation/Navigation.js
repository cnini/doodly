import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer, useTheme } from "@react-navigation/native"
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons'
import { auth } from "../../firebase"
import { useEffect } from "react"

import { Home } from "../Home/Home"
import { Login } from "../Authentication/Login"
import { Registry } from "../Authentication/Registry"
import { Cart } from "../Cart/Cart"
import { useDispatch } from "react-redux"
import { setCurrentUser } from "../Redux/UserSlice"
import { getUserByUid } from "../Repository/UserRepository"

const Tab = createBottomTabNavigator()

const AuthenticationTabs = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { display: 'none' } }}>
            <Tab.Screen 
                name="Login" 
                component={Login}
                options={{ title: "Connexion" }}
            />

            <Tab.Screen 
                name="Registry" 
                component={Registry}
                options={{ title: "Inscription" }}
            />
        </Tab.Navigator>
    )
}

export const Navigation = () => {
    const dispatch = useDispatch()

    const theme = useTheme()
    theme.colors.secondaryContainer = "transparent"

    useEffect(() => {
        if (auth.currentUser) {
            getUserByUid(auth.currentUser.uid)
            .then((res) => {
                console.log('Utilisateur trouvé : ' + res.email)
                dispatch(setCurrentUser(res))
            })
        }
    }, [])

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
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

                {
                    !auth.currentUser ? (
                        <Tab.Screen 
                            name="Authentication" 
                            component={AuthenticationTabs}
                            options={{
                                title: 'Connexion / Inscription',
                                tabBarLabel: 'Connexion / Inscription',
                                tabBarIcon: ({ color }) => (
                                    <FontAwesome name="user-circle" color={color} size={18} />
                                ),
                                tabBarActiveTintColor: "purple",
                                tabBarInactiveTintColor: "gray",
                            }}
                        />
                    ) : (
                        <Tab.Screen 
                            name="HomeToo" 
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
                    )
                }

            </Tab.Navigator>
        </NavigationContainer>
    )
}