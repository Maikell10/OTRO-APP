import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { COLORS, SIZES } from "../../constants";

const TextButtonOnBoarding = ({
    buttonContainerStyle,
    label,
    labelStyle,
    onPress,
}) => {
    return (
        <TouchableOpacity
            style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: COLORS.primary,
                ...buttonContainerStyle,
            }}
            onPress={onPress}
        >
            <Text
                style={{
                    color: COLORS.white,
                    fontSize: SIZES.h3,
                    fontWeight: "800",
                    ...labelStyle,
                }}
            >
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export default TextButtonOnBoarding;
