import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { COLORS, SIZES, icons } from "../../constants";

const HorizontalFoodCard = ({ containerStyle, imageStyle, item, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: "row",
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray2,
                ...containerStyle,
            }}
            onPress={onPress}
        >
            {/* Image */}
            <Image source={item.image} style={imageStyle} />

            {/* Info */}
            <View style={{ flex: 1 }}>
                {/* Name */}
                <Text style={{ fontSize: 17, fontWeight: "800" }}>
                    {item.name}
                </Text>

                {/* Description */}
                <Text
                    style={{ color: COLORS.darkGray2, fontSize: SIZES.body4 }}
                >
                    {item.description}
                </Text>

                {/* Price */}
                <Text
                    style={{
                        marginTop: SIZES.base,
                        fontSize: SIZES.h2,
                        fontWeight: "800",
                    }}
                >
                    ${item.price}
                </Text>
            </View>

            {/* Calories */}
            <View
                style={{
                    flexDirection: "row",
                    position: "absolute",
                    top: 5,
                    right: SIZES.radius,
                }}
            >
                <Image
                    source={icons.calories}
                    style={{ width: 30, height: 30 }}
                />
                <Text
                    style={{ color: COLORS.darkGray2, fontSize: SIZES.body5 }}
                >
                    {item.calories} Calorías
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default HorizontalFoodCard;
