import React from "react";
import { View, Text, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import {
    Header,
    IconButton,
    FormInput,
    CardItem,
    FooterTotal,
} from "../../components";
import { SIZES, COLORS, icons, dummyData } from "../../../constants";

const Checkout = ({ navigation, route }) => {
    const [selectedCard, setSelectedCard] = React.useState(null);

    React.useEffect(() => {
        let { selectedCard } = route.params;

        setSelectedCard(selectedCard);
    }, []);

    function renderHeader() {
        return (
            <Header
                title="Prepara tu Compra"
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
                            borderColor: COLORS.gray2,
                        }}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray2,
                        }}
                        onPress={() => navigation.goBack()}
                    />
                }
                rightComponent={<View style={{ width: 40 }} />}
            />
        );
    }

    function renderMyCards() {
        return (
            <View>
                {selectedCard &&
                    dummyData.myCards.map((item, index) => {
                        return (
                            <CardItem
                                key={`MyCard-${item.id}`}
                                item={item}
                                isSelected={
                                    `${selectedCard?.key}-${selectedCard?.id}` ==
                                    `MyCard-${item.id}`
                                }
                                onPress={() =>
                                    setSelectedCard({ ...item, key: "MyCard" })
                                }
                            />
                        );
                    })}
            </View>
        );
    }

    function renderDeliveryAddress() {
        return (
            <View style={{ marginTop: SIZES.padding }}>
                <Text
                    style={{
                        fontSize: SIZES.h3,
                        fontWeight: "800",
                    }}
                >
                    Dirección de Entrega
                </Text>

                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: SIZES.radius,
                        paddingVertical: SIZES.radius,
                        paddingHorizontal: SIZES.padding,
                        borderWidth: 2,
                        borderRadius: SIZES.radius,
                        borderColor: COLORS.lightGray2,
                    }}
                >
                    <Image
                        source={icons.location1}
                        style={{
                            width: 40,
                            height: 40,
                        }}
                    />

                    <Text
                        style={{
                            marginLeft: SIZES.radius,
                            width: "85%",
                            fontSize: SIZES.body3,
                        }}
                    >
                        {dummyData.myProfile.address}
                    </Text>
                </View>
            </View>
        );
    }

    function renderCoupon() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding,
                }}
            >
                <Text style={{ fontSize: SIZES.h3, fontWeight: "800" }}>
                    Añadir Cupón
                </Text>

                <FormInput
                    containerStyle={{
                        marginTop: -15,
                    }}
                    inputStyle={{
                        marginTop: 0,
                        paddingHorizontal: 0,
                        paddingLeft: SIZES.padding,
                        paddingRight: 0,
                        borderWidth: 2,
                        borderColor: COLORS.lightGray2,
                        backgroundColor: COLORS.white,
                        overflow: "hidden",
                        borderTopLeftRadius: SIZES.radius,
                        borderBottomLeftRadius: SIZES.radius,
                    }}
                    input2Style={{
                        paddingHorizontal: 0,
                    }}
                    placeholder="Código del Cupón"
                    appendComponent={
                        <View
                            style={{
                                width: 60,
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: COLORS.primary,
                                borderTopRightRadius: SIZES.radius,
                                borderBottomRightRadius: SIZES.radius,
                            }}
                        >
                            <Image
                                source={icons.discount}
                                style={{
                                    width: 40,
                                    height: 40,
                                }}
                            />
                        </View>
                    }
                />
            </View>
        );
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
            }}
        >
            {/* Header */}
            {renderHeader()}

            {/* Body */}
            <KeyboardAwareScrollView
                keyboardDismissMode="on-drag"
                extraScrollHeight={-200}
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: 20,
                }}
            >
                {/* My Cards */}
                {renderMyCards()}

                {/* Delivery Address */}
                {renderDeliveryAddress()}

                {/* Coupon */}
                {renderCoupon()}
            </KeyboardAwareScrollView>

            {/* Footer */}
            <FooterTotal
                footerStyle={{
                    marginBottom: 0,
                }}
                subTotal={37.97}
                shippingFee={0.0}
                total={37.97}
                onPress={() => navigation.replace("Success")}
            />
        </View>
    );
};

export default Checkout;
