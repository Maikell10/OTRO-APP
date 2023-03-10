import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

import { COLORS, SIZES, icons, images, dummyData } from "../../../constants";
import {
    CartQuantityButton,
    Header,
    IconButton,
    IconLabel,
    LineDivider,
    Rating,
    StepperInput,
    TextButton,
} from "../../components";

const ItemDetail = ({ navigation, route }) => {
    const [item, setItem] = React.useState(route.params.item);
    const [selectedSize, setSelectedSize] = React.useState("");
    const [qty, setQty] = React.useState(1);

    console.log(item);
    function renderHeader() {
        return (
            <Header
                title="DETALLE"
                containerStyle={{
                    height: 50,
                    marginHorizontal: SIZES.padding,
                    marginTop: 40,
                }}
                leftComponent={
                    <IconButton
                        icon={icons.back}
                        containerStyle={{
                            width: 40,
                            height: 40,
                            justifyContent: "center",
                            alignItems: "center",
                            borderWidth: 1,
                            borderRadius: SIZES.radius,
                            borderColor: COLORS.gray,
                        }}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray,
                        }}
                        onPress={() => navigation.goBack()}
                    />
                }
                rightComponent={<CartQuantityButton quantity={5} />}
            />
        );
    }

    function renderDetails() {
        return (
            <View
                style={{
                    marginTop: SIZES.radius,
                    marginBottom: SIZES.padding,
                    paddingHorizontal: SIZES.padding,
                }}
            >
                {/* Item Card */}
                <View
                    style={{
                        height: 190,
                        borderRadius: 15,
                        backgroundColor: COLORS.lightGray2,
                    }}
                >
                    {/* Calories & Favorite */}
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginTop: SIZES.base,
                            paddingHorizontal: SIZES.radius,
                        }}
                    >
                        {/* Calories */}
                        <View style={{ flexDirection: "row" }}>
                            <Image
                                source={icons.calories}
                                style={{ width: 30, height: 30 }}
                            />
                            <Text
                                style={{
                                    color: COLORS.darkGray2,
                                    fontSize: SIZES.body4,
                                }}
                            >
                                {item?.calories} calorías
                            </Text>
                        </View>

                        {/* Favorite */}
                        <Image
                            source={icons.love}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: item?.isFavourite
                                    ? COLORS.red
                                    : COLORS.gray,
                            }}
                        />
                    </View>

                    {/* Item Image */}
                    <Image
                        source={item?.image}
                        resizeMode="contain"
                        style={{ height: 170, width: "100%" }}
                    />
                </View>

                {/* Item Info */}
                <View style={{ marginTop: SIZES.padding }}>
                    {/* Name & Description */}
                    <Text style={{ fontSize: SIZES.h1, fontWeight: "800" }}>
                        {item?.name}
                    </Text>

                    <Text
                        style={{
                            marginTop: SIZES.base,
                            color: COLORS.darkGray,
                            textAlign: "justify",
                            fontSize: SIZES.body3,
                        }}
                    >
                        {item?.description}
                    </Text>

                    {/* Ratings, Duration & Shipping */}
                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: SIZES.padding,
                        }}
                    >
                        {/* Ratings */}
                        <IconLabel
                            containerStyle={{
                                backgroundColor: COLORS.primary,
                            }}
                            icon={icons.star}
                            label="4.5"
                            labelStyle={{
                                color: COLORS.white,
                            }}
                        />

                        {/* Duration  */}
                        <IconLabel
                            containerStyle={{
                                marginLeft: SIZES.radius,
                                paddingHorizontal: 0,
                            }}
                            icon={icons.clock}
                            iconStyle={{
                                tintColor: COLORS.black,
                            }}
                            label="30 Min"
                        />

                        {/* Shipping */}
                        <IconLabel
                            containerStyle={{
                                marginLeft: SIZES.radius,
                                paddingHorizontal: 0,
                            }}
                            icon={icons.dollar}
                            iconStyle={{
                                tintColor: COLORS.black,
                            }}
                            label="Envío Gratis"
                        />
                    </View>

                    {/* Sizes */}
                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: SIZES.padding,
                            alignItems: "center",
                        }}
                    >
                        <Text style={{ fontSize: SIZES.h3, fontWeight: "800" }}>
                            Tamaños:
                        </Text>

                        <ScrollView
                            horizontal
                            style={{
                                flexDirection: "row",
                                flexWrap: "wrap",
                                marginLeft: SIZES.padding,
                            }}
                        >
                            {dummyData.sizes.map((item, index) => {
                                return (
                                    <TextButton
                                        key={`Sizes-${index}`}
                                        buttonContainerStyle={{
                                            width: 55,
                                            height: 55,
                                            margin: SIZES.base,
                                            borderWidth: 1,
                                            borderRadius: SIZES.radius,
                                            borderColor:
                                                selectedSize == item.id
                                                    ? COLORS.primary
                                                    : COLORS.gray2,
                                            backgroundColor:
                                                selectedSize == item.id
                                                    ? COLORS.primary
                                                    : null,
                                        }}
                                        label={item.label}
                                        labelStyle={{
                                            color:
                                                selectedSize == item.id
                                                    ? COLORS.white
                                                    : COLORS.gray2,
                                            fontSize: SIZES.body2,
                                        }}
                                        onPress={() => setSelectedSize(item.id)}
                                    />
                                );
                            })}
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }

    function renderOwner() {
        return (
            <View
                style={{
                    flexDirection: "row",
                    marginVertical: SIZES.padding,
                    paddingHorizontal: SIZES.padding,
                    alignItems: "center",
                }}
            >
                <Image
                    source={images.logo_restaurant}
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: SIZES.radius,
                    }}
                />

                {/* Info */}
                <View
                    style={{
                        flex: 1,
                        marginLeft: SIZES.radius,
                        justifyContent: "center",
                    }}
                >
                    <Text style={{ fontSize: SIZES.h3, fontWeight: "800" }}>
                        Restaurante Prueba
                    </Text>
                    <Text style={{ color: COLORS.gray, fontSize: SIZES.body4 }}>
                        A 1.2Km de tu ubicación
                    </Text>
                </View>

                {/* Ratings */}
                <Rating rating={4} iconStyle={{ marginLeft: 3 }} />
            </View>
        );
    }

    function renderFooter() {
        return (
            <View
                style={{
                    flexDirection: "row",
                    height: 120,
                    alignItems: "center",
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: SIZES.radius,
                }}
            >
                {/* Stepper Input */}
                <StepperInput
                    value={qty}
                    onAdd={() => setQty(qty + 1)}
                    onMinus={() => {
                        if (qty > 1) {
                            setQty(qty - 1);
                        }
                    }}
                />

                {/* Text Button */}
                <TextButton
                    buttonContainerStyle={{
                        flex: 1,
                        flexDirection: "row",
                        height: 60,
                        marginLeft: SIZES.radius,
                        paddingHorizontal: SIZES.radius,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary,
                    }}
                    label="Comprar"
                    label2={`$${item?.price}`}
                    onPress={() => navigation.navigate("Home", { cart: true })}
                />
            </View>
        );
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
            {/* Header */}
            {renderHeader()}

            {/* Body */}
            <ScrollView>
                {/* Item Detail */}
                {renderDetails()}

                <LineDivider />

                {/* Owner */}
                {renderOwner()}
            </ScrollView>

            {/* Footer */}
            <LineDivider />

            {renderFooter()}
        </View>
    );
};

export default ItemDetail;
