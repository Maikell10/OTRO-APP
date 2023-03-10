import React from "react";
import { View, Text, BackHandler, Image } from "react-native";

import { TextButton } from "../../components";
import { SIZES, COLORS, images } from "../../../constants";

const Success = ({ navigation }) => {
    React.useEffect(() => {
        // Impedir Ir Atrás con Botón Android
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            () => true
        );
        return () => backHandler.remove();
    }, []);

    return (
        <View
            style={{
                flex: 1,
                paddingHorizontal: SIZES.padding,
                backgroundColor: COLORS.white,
            }}
        >
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Image
                    source={images.success}
                    style={{
                        width: 150,
                        height: 150,
                    }}
                />
                <Text
                    style={{
                        marginTop: SIZES.padding,
                        fontSize: SIZES.h2,
                        fontWeight: "800",
                        textAlign: "center",
                    }}
                >
                    ¡Tu Pedido ha sido Realizado con Éxito!
                </Text>
            </View>

            <TextButton
                label="Finalizar"
                buttonContainerStyle={{
                    height: 55,
                    marginBottom: SIZES.padding,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.primary,
                }}
                onPress={() => navigation.navigate("DeliveryStatus")}
            />
        </View>
    );
};

export default Success;
