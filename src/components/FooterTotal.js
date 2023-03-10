import React from "react";
import { View, Text, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { TextButton, LineDivider } from "../components";
import { COLORS, SIZES } from "../../constants";

const FooterTotal = ({
    subTotal,
    shippingFee,
    total,
    onPress,
    footerStyle,
}) => {
    return (
        <View
            style={{
                marginBottom: Platform.OS === "ios" ? 180 : 120,
                ...footerStyle,
            }}
        >
            {/* Shaddow */}
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={[COLORS.transparent, COLORS.lightGray1]}
                style={{
                    position: "absolute",
                    top: -15,
                    left: 0,
                    right: 0,
                    height: Platform.OS === "ios" ? 200 : 50,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                }}
            />

            {/* OrderDetails */}
            <View
                style={{
                    padding: SIZES.padding,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    backgroundColor: COLORS.white,
                }}
            >
                {/* Subtotal */}
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ flex: 1, fontSize: SIZES.body3 }}>
                        Subtotal
                    </Text>
                    <Text style={{ fontSize: SIZES.h3, fontWeight: "800" }}>
                        ${subTotal.toFixed(2)}
                    </Text>
                </View>

                {/* Shipping Fee */}
                <View
                    style={{
                        flexDirection: "row",
                        marginTop: SIZES.base,
                        marginBottom: SIZES.base,
                    }}
                >
                    <Text style={{ flex: 1, fontSize: SIZES.body3 }}>
                        Costo de envío
                    </Text>
                    <Text style={{ fontSize: SIZES.h3, fontWeight: "800" }}>
                        ${shippingFee.toFixed(2)}
                    </Text>
                </View>

                {/* Line */}
                <LineDivider />

                {/* Total */}
                <View style={{ flexDirection: "row", marginTop: SIZES.base }}>
                    <Text
                        style={{
                            flex: 1,
                            fontSize: SIZES.h2,
                            fontWeight: "800",
                        }}
                    >
                        Total
                    </Text>
                    <Text style={{ fontSize: SIZES.h2, fontWeight: "800" }}>
                        ${total.toFixed(2)}
                    </Text>
                </View>

                {/* Order Button */}
                <TextButton
                    buttonContainerStyle={{
                        height: 50,
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary,
                    }}
                    label="Realiza tu Pedido"
                    onPress={onPress}
                />
            </View>
        </View>
    );
};

export default FooterTotal;
