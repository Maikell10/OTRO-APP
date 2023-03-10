import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { COLORS, SIZES } from "../../constants";

const TextButton = ({
    label,
    labelStyle,
    buttonContainerStyle,
    disabled,
    label2 = "",
    label2Style,
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
            disabled={disabled}
            onPress={onPress}
        >
            <Text
                style={{
                    color: COLORS.white,
                    fontSize: SIZES.h3,
                    fontWeight: "700",
                    ...labelStyle,
                }}
            >
                {label}
            </Text>

            {label2 != "" && (
                <Text
                    style={{
                        flex: 1,
                        textAlign: "right",
                        color: COLORS.white,
                        fontSize: SIZES.h3,
                        fontWeight: "800",
                        ...label2Style,
                    }}
                >
                    {label2}
                </Text>
            )}
        </TouchableOpacity>
    );
};

export default TextButton;
