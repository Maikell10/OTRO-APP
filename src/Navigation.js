import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import "react-native-gesture-handler";

import CustomDrawer from "./navigation/CustomDrawer";
import {
    OnBoarding,
    SignIn,
    SignUp,
    ForgotPassword,
    Otp,
    ItemDetail,
    MyCart,
    Checkout,
    Success,
    DeliveryStatus,
    Map,
} from "./screens";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "../stores/rootReducer";
import { setUserG } from "../stores/constants/constActions";

import MyCard from "./screens/Card/MyCard";
import AddCard from "./screens/Card/AddCard";

import { firebase } from "../db/firebase.config";
import { setSelectedTab } from "../stores/tab/tabActions";

const Stack = createStackNavigator();

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function Navigation() {
    const [initializing, setInitializing] = React.useState(true);
    const [user, setUser] = React.useState();

    //Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        store.dispatch(setSelectedTab("OTRO Delivery"));
        store.dispatch(setUserG(user));
        if (initializing) setInitializing(false);
    }

    React.useEffect(() => {
        const subscriber = firebase
            .auth()
            .onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    if (initializing) return null;

    if (!user) {
        return (
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerShown: false,
                        }}
                        initialRouteName={"OnBoarding"}
                    >
                        <Stack.Screen
                            name="OnBoarding"
                            component={OnBoarding}
                        />

                        <Stack.Screen name="SignIn" component={SignIn} />

                        <Stack.Screen name="SignUp" component={SignUp} />

                        <Stack.Screen
                            name="ForgotPassword"
                            component={ForgotPassword}
                        />

                        <Stack.Screen name="Otp" component={Otp} />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        );
    }

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                    initialRouteName={"Home"}
                >
                    {/* <Stack.Screen name="OnBoarding" component={OnBoarding} />

                    <Stack.Screen name="SignIn" component={SignIn} />

                    <Stack.Screen name="SignUp" component={SignUp} />

                    <Stack.Screen
                        name="ForgotPassword"
                        component={ForgotPassword}
                    />

                    <Stack.Screen name="Otp" component={Otp} /> */}

                    <Stack.Screen name="Home" component={CustomDrawer} />

                    <Stack.Screen name="ItemDetail" component={ItemDetail} />

                    <Stack.Screen name="MyCart" component={MyCart} />
                    <Stack.Screen name="Checkout" component={Checkout} />
                    <Stack.Screen
                        name="Success"
                        component={Success}
                        options={{ gestureEnabled: false }}
                    />
                    <Stack.Screen name="MyCard" component={MyCard} />
                    <Stack.Screen name="AddCard" component={AddCard} />

                    <Stack.Screen
                        name="DeliveryStatus"
                        component={DeliveryStatus}
                    />
                    <Stack.Screen name="Map" component={Map} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
