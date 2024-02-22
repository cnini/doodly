import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer, useTheme } from "@react-navigation/native"
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons'
import { useDispatch } from "react-redux"

import { Home } from "../Home/Home"
import { Login } from "../Authentication/Login"
import { Registry } from "../Authentication/Registry"
import { Profile } from "../Profile/Profile"
import { Cart } from "../Cart/Cart"
import { useEffect } from "react"
import { setCurrentUser } from "../Slices/CurrentUserSlice"
import { getUserByUid } from "../Repository/UserRepository"
import { auth } from "../../firebase"

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
            
            <Tab.Screen 
                name="Profile" 
                component={Profile}
                options={{ title: "Mon compte" }}
            />
        </Tab.Navigator>
    )
}

export const Navigation = () => {
    const theme = useTheme()
    theme.colors.secondaryContainer = "transparent"

    const dispatch = useDispatch()

    useEffect(() => {
        if (auth.currentUser) {
            dispatch(setCurrentUser(getUserByUid(auth.currentUser.uid).then(res => res)))
        } else {
            dispatch(setCurrentUser({}))
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
                        tabBarActiveTintColor: "#d2bbf3",
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
                        tabBarActiveTintColor: "#d2bbf3",
                        tabBarInactiveTintColor: "gray"
                    }}
                />

                <Tab.Screen 
                    name="Authentication" 
                    component={AuthenticationTabs}
                    options={{
                        title: 'Mon compte',
                        tabBarLabel: 'Mon compte',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome name="user-circle" color={color} size={18} />
                        ),
                        tabBarActiveTintColor: "#d2bbf3",
                        tabBarInactiveTintColor: "gray",
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}