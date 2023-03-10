import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { COLORS, SIZES } from "../../constants";

const TextIconButton = ({
    containerStyle,
    label,
    labelStyle,
    icon,
    iconStyle,
    onPress,
    iconPosition = "RIGHT",
}) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                ...containerStyle,
            }}
            onPress={onPress}
        >
            {iconPosition == "LEFT" && (
                <Image
                    source={icon}
                    style={{
                        marginLeft: 5,
                        width: 20,
                        height: 20,
                        tintColor: COLORS.black,
                        ...iconStyle,
                    }}
                />
            )}

            <Text style={{ fontSize: SIZES.body3, ...labelStyle }}>
                {label}
            </Text>

            {iconPosition == "RIGHT" && (
                <Image
                    source={icon}
                    style={{
                        marginLeft: 5,
                        width: 20,
                        height: 20,
                        tintColor: COLORS.black,
                        ...iconStyle,
                    }}
                />
            )}
        </TouchableOpacity>
    );
};

export default TextIconButton;
