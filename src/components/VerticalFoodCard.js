import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { COLORS, SIZES, icons } from "../../constants";

const VerticalFoodCard = ({ containerStyle, imageStyle, item, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                width: 200,
                padding: SIZES.radius,
                alignItems: "center",
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray2,
                ...containerStyle,
            }}
        >
            {/* Calories and Favorite */}
            <View style={{ flexDirection: "row" }}>
                {/* Calories */}
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <Image
                        source={icons.calories}
                        style={{ width: 30, height: 30 }}
                    />
                    <Text
                        style={{
                            color: COLORS.darkGray2,
                            fontSize: SIZES.body5,
                        }}
                    >
                        {item.calories} Calorías
                    </Text>
                </View>

                {/* Favorite */}
                <Image
                    source={icons.love}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: item.isFavourite ? COLORS.red : COLORS.gray,
                    }}
                />
            </View>

            {/* Image */}
            <View
                style={{
                    height: 150,
                    width: 150,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Image
                    source={item.image}
                    style={{ height: "100%", width: "100%" }}
                />
            </View>

            {/* Info */}
            <View style={{ alignItems: "center", marginTop: -20 }}>
                <Text style={{ fontSize: SIZES.h3, fontWeight: "800" }}>
                    {item.name}
                </Text>
                <Text
                    style={{
                        color: COLORS.darkGray2,
                        textAlign: "center",
                        fontSize: SIZES.body5,
                    }}
                >
                    {item.description}
                </Text>
                <Text
                    style={{
                        marginTop: SIZES.radius,
                        fontSize: SIZES.h2,
                        fontWeight: "800",
                    }}
                >
                    ${item.price}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default VerticalFoodCard;
