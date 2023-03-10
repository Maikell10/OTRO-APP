import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
} from "@react-navigation/drawer";

import { MainLayout } from "../screens";
import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData,
} from "../../constants";
import Animated from "react-native-reanimated";
import { connect } from "react-redux";
import { setSelectedTab } from "../../stores/tab/tabActions";

import { firebase } from "../../db/firebase.config";

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({ label, icon, isFocused, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: "row",
                height: 40,
                marginBottom: SIZES.base,
                alignItems: "center",
                paddingLeft: SIZES.radius,
                borderRadius: SIZES.base,
                backgroundColor: isFocused ? COLORS.transparentBlack1 : null,
            }}
            onPress={onPress}
        >
            <Image
                source={icon}
                style={{ width: 20, height: 20, tintColor: COLORS.white }}
            />

            <Text
                style={{
                    marginLeft: 15,
                    color: COLORS.white,
                    fontSize: SIZES.h3,
                    fontWeight: "600",
                }}
            >
                {label}
            </Text>
        </TouchableOpacity>
    );
};

const CustomDrawerContent = ({
    navigation,
    selectedTab,
    setSelectedTab,
    user,
}) => {
    return (
        <DrawerContentScrollView
            scrollEnabled={true}
            contentContainerStyle={{ flex: 1 }}
        >
            <View style={{ flex: 1, paddingHorizontal: SIZES.radius }}>
                {/* Close Button */}
                <View
                    style={{
                        alignItems: "flex-start",
                        justifyContent: "center",
                    }}
                >
                    <TouchableOpacity
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        onPress={() => navigation.closeDrawer()}
                    >
                        <Image
                            source={icons.cross}
                            style={{
                                height: 35,
                                width: 35,
                                tintColor: COLORS.white,
                            }}
                        />
                    </TouchableOpacity>
                </View>

                {/* Profile */}
                <TouchableOpacity
                    style={{
                        flexDirection: "row",
                        marginTop: SIZES.radius,
                        alignItems: "center",
                    }}
                    onPress={() => console.log("Profile")}
                >
                    <Image
                        source={dummyData.myProfile.profile_image}
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: SIZES.radius,
                        }}
                    />

                    <View style={{ marginLeft: SIZES.radius }}>
                        <Text
                            style={{
                                color: COLORS.white,
                                fontSize: SIZES.h3,
                                lineHeight: 22,
                                fontWeight: "600",
                            }}
                        >
                            {user?.providerData[0].email}
                        </Text>
                        <Text
                            style={{
                                color: COLORS.white,
                                fontSize: SIZES.body4,
                            }}
                        >
                            Ver Perfil
                        </Text>
                    </View>
                </TouchableOpacity>

                {/* Drawer Items */}
                <View style={{ flex: 1, marginTop: SIZES.padding }}>
                    <CustomDrawerItem
                        label={constants.screens.home}
                        icon={icons.home}
                        isFocused={selectedTab == constants.screens.home}
                        onPress={() => {
                            setSelectedTab(constants.screens.home);
                            navigation.navigate("MainLayout");
                        }}
                    />

                    <CustomDrawerItem
                        label={constants.screens.my_wallet}
                        icon={icons.wallet}
                    />

                    <CustomDrawerItem
                        label={constants.screens.notification}
                        icon={icons.notification}
                        isFocused={
                            selectedTab == constants.screens.notification
                        }
                        onPress={() => {
                            setSelectedTab(constants.screens.notification);
                            navigation.navigate("MainLayout");
                        }}
                    />

                    <CustomDrawerItem
                        label={constants.screens.favourite}
                        icon={icons.favourite}
                        isFocused={selectedTab == constants.screens.favourite}
                        onPress={() => {
                            setSelectedTab(constants.screens.favourite);
                            navigation.navigate("MainLayout");
                        }}
                    />

                    {/* Line Divider */}
                    <View
                        style={{
                            height: 1,
                            marginVertical: SIZES.radius,
                            marginLeft: SIZES.radius,
                            backgroundColor: COLORS.lightGray1,
                        }}
                    />

                    <CustomDrawerItem
                        label="Ve tu Orden"
                        icon={icons.location}
                    />

                    <CustomDrawerItem label="Cupones" icon={icons.coupon} />

                    <CustomDrawerItem
                        label="Configuración"
                        icon={icons.setting}
                    />

                    <CustomDrawerItem
                        label="Invita a un Amigo"
                        icon={icons.profile}
                    />

                    <CustomDrawerItem label="Ayuda" icon={icons.help} />
                </View>

                <View style={{ marginBottom: SIZES.padding }}>
                    <CustomDrawerItem
                        label="Salir"
                        icon={icons.logout}
                        onPress={() => firebase.auth().signOut()}
                    />
                </View>
            </View>
        </DrawerContentScrollView>
    );
};

const CustomDrawer = ({ selectedTab, setSelectedTab, route, user }) => {
    const [name, setName] = useState("");

    useEffect(() => {
        firebase
            .firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((snapshot) => {
                if (snapshot.exists) {
                    setName(snapshot.data());
                    console.log(name);
                } else {
                    console.log("No existe el usuario");
                }
            });
    }, []);

    if (route?.params?.cart) {
        route.params.cart = false;
        setSelectedTab("Carrito");
    }

    const [progress, setProgress] = React.useState(new Animated.Value(0));

    const scale = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.8],
    });

    const borderRadius = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [0, 26],
    });

    const animatedStyle = {
        borderRadius,
        transform: [{ scale }],
    };

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <Drawer.Navigator
                drawerType="slide"
                overlayColor="transparent"
                drawerStyle={{
                    flex: 1,
                    width: "65%",
                    paddingRight: 20,
                    backgroundColor: "transparent",
                }}
                sceneContainerStyle={{
                    backgroundColor: "transparent",
                }}
                initialRouteName="MainLayout"
                drawerContent={(props) => {
                    setTimeout(() => {
                        setProgress(props.progress);
                    }, 0);

                    return (
                        <CustomDrawerContent
                            navigation={props.navigation}
                            selectedTab={selectedTab}
                            setSelectedTab={setSelectedTab}
                            user={user}
                        />
                    );
                }}
            >
                <Drawer.Screen name="MainLayout">
                    {(props) => (
                        <MainLayout
                            {...props}
                            user={user}
                            drawerAnimationStyle={animatedStyle}
                        />
                    )}
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    );
};

function mapStateToProps(state) {
    return {
        selectedTab: state.tabReducer.selectedTab,
        user: state.constReducer.user,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setSelectedTab: (selectedTab) => {
            return dispatch(setSelectedTab(selectedTab));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);
