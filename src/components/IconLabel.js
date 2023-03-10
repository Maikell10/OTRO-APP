import React from "react";
import { View, Image, Text } from "react-native";
import { SIZES, COLORS, icons } from "../../constants";

const IconLabel = ({ containerStyle, icon, iconStyle, label, labelStyle }) => {
    return (
        <View
            style={{
                flexDirection: "row",
                paddingVertical: SIZES.base,
                paddingHorizontal: SIZES.radius,
                borderRadius: SIZES.radius,
                ...containerStyle,
            }}
        >
            <Image
                source={icon}
                style={{ width: 20, height: 20, ...iconStyle }}
            />

            <Text
                style={{
                    marginLeft: SIZES.base,
                    fontSize: SIZES.body3,
                    ...labelStyle,
                }}
            >
                {label}
            </Text>
        </View>
    );
};

export default IconLabel;
