import React from "react";
import { View, Text, TextInput } from "react-native";

import { SIZES, COLORS } from "../../constants";

const FormInput = ({
    containerStyle,
    label,
    placeholder,
    inputStyle,
    prependComponent,
    appendComponent,
    onChange,
    secureTextEntry,
    keyboardType = "default",
    autoCompleteType = "off",
    autoCapitalize = "none",
    errorMsg = "",
    maxLength,
    value = "",
    input2Style,
}) => {
    return (
        <View style={{ ...containerStyle }}>
            {/* Label & Error Msg */}
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <Text style={{ color: COLORS.gray, fontSize: SIZES.body4 }}>
                    {label}
                </Text>
                <Text style={{ color: COLORS.red, fontSize: SIZES.body4 }}>
                    {errorMsg}
                </Text>
            </View>

            {/* Text Input */}
            <View
                style={{
                    flexDirection: "row",
                    height: 55,
                    paddingHorizontal: SIZES.padding,
                    marginTop: SIZES.base,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.lightGray2,
                    ...input2Style,
                }}
            >
                {prependComponent}

                <TextInput
                    style={{ flex: 1, ...inputStyle }}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.gray}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    autoCompleteType={autoCompleteType}
                    autoCapitalize={autoCapitalize}
                    onChangeText={(text) => onChange(text)}
                    maxLength={maxLength}
                    value={value}
                />

                {appendComponent}
            </View>
        </View>
    );
};

export default FormInput;
