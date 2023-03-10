import React from "react";
import { View, Text } from "react-native";
import { SIZES } from "../../constants";

const Header = ({ containerStyle, title, leftComponent, rightComponent }) => {
    return (
        <View style={{ flexDirection: "row", ...containerStyle }}>
            {/* Left */}
            {leftComponent}

            {/* Title */}
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text style={{ fontSize: SIZES.h3, fontWeight: "600" }}>
                    {title}
                </Text>
            </View>

            {/* Right */}
            {rightComponent}
        </View>
    );
};

export default Header;
