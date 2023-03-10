import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

import {
    Header,
    LineDivider,
    TextButton,
    IconButton,
    TextIconButton,
} from "../../components";
import { COLORS, SIZES, icons, constants } from "../../../constants";

const DeliveryStatus = ({ navigation }) => {
    const [currentStep, setCurrentStep] = React.useState(3);

    function renderHeader() {
        return (
            <Header
                title="Estatus del Pedido"
                containerStyle={{
                    height: 50,
                    marginHorizontal: SIZES.padding,
                    marginTop: 40,
                }}
                leftComponent={
                    <IconButton
                        icon={icons.home}
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
                        onPress={() => navigation.replace("Home")}
                    />
                }
                rightComponent={<View style={{ width: 40 }} />}
            />
        );
    }

    function renderInfo() {
        return (
            <View
                style={{
                    marginTop: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                }}
            >
                <Text
                    style={{
                        textAlign: "center",
                        color: COLORS.gray,
                        fontSize: SIZES.body4,
                    }}
                >
                    Delivery Estimado
                </Text>
                <Text
                    style={{
                        textAlign: "center",
                        fontSize: SIZES.h2,
                        fontWeight: "800",
                    }}
                >
                    20 Feb 2023 / 12:30PM
                </Text>
            </View>
        );
    }

    function renderTrackOrder() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding,
                    paddingVertical: SIZES.padding,
                    borderRadius: SIZES.radius,
                    borderWidth: 2,
                    borderColor: COLORS.lightGray2,
                    backgroundColor: COLORS.white2,
                }}
            >
                {/* Track Order */}
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 20,
                        paddingHorizontal: SIZES.padding,
                    }}
                >
                    <Text style={{ fontSize: SIZES.h3, fontWeight: "800" }}>
                        Nº de Pedido
                    </Text>
                    <Text style={{ color: COLORS.gray, fontSize: SIZES.body3 }}>
                        NY04565O
                    </Text>
                </View>

                <LineDivider
                    lineStyle={{
                        backgroundColor: COLORS.lightGray2,
                    }}
                />

                {/* Status */}
                <View
                    style={{
                        marginTop: SIZES.padding,
                        paddingHorizontal: SIZES.padding,
                    }}
                >
                    {constants.track_order_status.map((item, index) => {
                        return (
                            <View key={`StatusList-${index}`}>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        marginVertical: -5,
                                    }}
                                >
                                    <Image
                                        source={icons.check_circle}
                                        style={{
                                            width: 40,
                                            height: 40,
                                            tintColor:
                                                index <= currentStep
                                                    ? COLORS.primary
                                                    : COLORS.lightGray1,
                                        }}
                                    />

                                    <View
                                        style={{
                                            marginLeft: SIZES.radius,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: SIZES.h3,
                                                fontWeight: "800",
                                            }}
                                        >
                                            {item.title}
                                        </Text>
                                        <Text
                                            style={{
                                                color: COLORS.gray,
                                                fontSize: SIZES.body4,
                                            }}
                                        >
                                            {item.sub_title}
                                        </Text>
                                    </View>
                                </View>

                                {index <
                                    constants.track_order_status.length - 1 && (
                                    <View>
                                        {index < currentStep && (
                                            <View
                                                style={{
                                                    height: 50,
                                                    width: 3,
                                                    marginLeft: 18,
                                                    backgroundColor:
                                                        COLORS.primary,
                                                    zIndex: -1,
                                                }}
                                            />
                                        )}

                                        {index >= currentStep && (
                                            <Image
                                                source={icons.dotted_line}
                                                resizeMode="cover"
                                                style={{
                                                    width: 4,
                                                    height: 50,
                                                    marginLeft: 17,
                                                }}
                                            />
                                        )}
                                    </View>
                                )}
                            </View>
                        );
                    })}
                </View>
            </View>
        );
    }

    function renderFooter() {
        return (
            <View
                style={{
                    marginTop: SIZES.radius,
                    marginBottom: SIZES.padding,
                }}
            >
                {currentStep < constants.track_order_status.length - 1 && (
                    <View
                        style={{
                            flexDirection: "row",
                            height: 55,
                        }}
                    >
                        {/* Cancel */}
                        <TextButton
                            buttonContainerStyle={{
                                width: "40%",
                                borderRadius: SIZES.base,
                                backgroundColor: COLORS.lightGray2,
                            }}
                            label="Salir"
                            labelStyle={{
                                color: COLORS.primary,
                            }}
                            onPress={() => navigation.navigate("Home")}
                        />

                        {/* MapView */}
                        <TextIconButton
                            containerStyle={{
                                flex: 1,
                                marginLeft: SIZES.radius,
                                borderRadius: SIZES.base,
                                backgroundColor: COLORS.primary,
                            }}
                            label="Ver Mapa"
                            labelStyle={{
                                color: COLORS.white,
                                fontSize: SIZES.h3,
                                fontWeight: "800",
                            }}
                            icon={icons.map}
                            iconPosition="LEFT"
                            iconStyle={{
                                width: 25,
                                height: 25,
                                marginRight: SIZES.base,
                                tintColor: COLORS.white,
                            }}
                            onPress={() => navigation.navigate("Map")}
                        />
                    </View>
                )}

                {currentStep == constants.track_order_status.length - 1 && (
                    <TextButton
                        buttonContainerStyle={{
                            height: 55,
                            borderRadius: SIZES.base,
                        }}
                        label="Finalizado"
                        onPress={() => {
                            navigation.replace("Home");
                        }}
                    />
                )}
            </View>
        );
    }

    return (
        <View
            style={{
                flex: 1,
                paddingHorizontal: SIZES.padding,
                backgroundColor: COLORS.white,
            }}
        >
            {/* Header */}
            {renderHeader()}

            {/* Info */}
            {renderInfo()}

            {/* Track Order */}
            <ScrollView showsVerticalScrollIndicator={false}>
                {renderTrackOrder()}
            </ScrollView>

            {/* Footer */}
            {renderFooter()}
        </View>
    );
};

export default DeliveryStatus;
