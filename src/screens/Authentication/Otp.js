import React from "react";
import { View, Text, Settings } from "react-native";
import AuthLayout from "./AuthLayout";
import { SIZES, COLORS, icons } from "../../../constants";
import OTPInputView from "@twotalltotems/react-native-otp-input";

import { TextButton } from "../../components";

const Otp = ({ navigation }) => {
    const [timer, setTimer] = React.useState(60);

    React.useEffect(() => {
        let interval = setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer > 0) {
                    return prevTimer - 1;
                } else {
                    return prevTimer;
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <AuthLayout
            title="Código OTP"
            subTitle="Un código de autenticación ha sido enviado"
            titleContainerStyle={{ marginTop: SIZES.padding }}
        >
            {/* OTP Inputs */}
            <View style={{ flex: 1, marginTop: SIZES.padding }}>
                <OTPInputView
                    pinCount={4}
                    style={{ width: "100%", height: 50 }}
                    codeInputFieldStyle={{
                        width: 65,
                        height: 65,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.lightGray2,
                        color: COLORS.black,
                        fontSize: SIZES.h3,
                        fontWeight: "800",
                    }}
                    onCodeFilled={(code) => {
                        console.log(code);
                    }}
                />

                {/* Countdown Timer */}
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        marginTop: SIZES.padding,
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.darkGray,
                            fontSize: SIZES.body3,
                        }}
                    >
                        ¿No recibiste el código?
                    </Text>

                    <TextButton
                        label={`Reenviar (${timer}s)`}
                        disabled={timer == 0 ? false : true}
                        buttonContainerStyle={{
                            marginLeft: SIZES.base,
                            backgroundColor: null,
                        }}
                        labelStyle={{
                            color: COLORS.primary,
                            fontSize: SIZES.h3,
                            fontWeight: "800",
                        }}
                        onPress={() => setTimer(60)}
                    />
                </View>
            </View>

            {/* Footer */}
            <View>
                <TextButton
                    label="Continuar"
                    buttonContainerStyle={{
                        height: 50,
                        alignItems: "center",
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary,
                    }}
                    onPress={() => console.log("Continuar")}
                />

                <View
                    style={{ marginTop: SIZES.padding, alignItems: "center" }}
                >
                    <Text
                        style={{
                            color: COLORS.darkGray,
                            fontSize: SIZES.body3,
                        }}
                    >
                        Para registrarte, debes aceptar nuestros.
                    </Text>
                    <TextButton
                        label="Terminos y Condiciones"
                        buttonContainerStyle={{ backgroundColor: null }}
                        labelStyle={{
                            color: COLORS.primary,
                            fontSize: SIZES.body3,
                        }}
                        onPress={() => console.log("Terminos y condiciones")}
                    />
                </View>
            </View>
        </AuthLayout>
    );
};

export default Otp;
