import React from "react";
import { View, Text, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { images, SIZES, COLORS } from "../../../constants";

const AuthLayout = ({ title, subTitle, titleContainerStyle, children }) => {
    return (
        <View
            style={{
                flex: 1,
                paddingVertical: SIZES.padding,
                backgroundColor: COLORS.white,
            }}
        >
            <KeyboardAwareScrollView
                keyboardDismissMode="on-drag"
                contentContainerStyle={{
                    flex: 1,
                    paddingHorizontal: SIZES.padding,
                }}
            >
                {/* App Icon */}
                <View
                    style={{
                        alignItems: "center",
                    }}
                >
                    <Image
                        source={images.logo_otro}
                        resizeMode="contain"
                        style={{ height: 120, width: 220 }}
                    />
                </View>

                <View
                    style={{
                        //marginTop: SIZES.padding,
                        ...titleContainerStyle,
                    }}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            fontSize: SIZES.h2,
                            fontWeight: "800",
                        }}
                    >
                        {title}
                    </Text>
                    <Text
                        style={{
                            textAlign: "center",
                            color: COLORS.darkGray,
                            marginTop: SIZES.base,
                            fontSize: SIZES.body3,
                        }}
                    >
                        {subTitle}
                    </Text>
                </View>

                {/* Content / Children */}
                {children}
            </KeyboardAwareScrollView>
        </View>
    );
};

export default AuthLayout;
