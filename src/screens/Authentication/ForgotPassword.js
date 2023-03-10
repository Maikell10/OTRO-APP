import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { AuthLayout } from "../";
import { SIZES, COLORS, icons } from "../../../constants";
import { FormInput, TextButton } from "../../components";
import { utils } from "../../utils";

import { firebase } from "../../../db/firebase.config";

const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = React.useState("");
    const [emailError, setEmailError] = React.useState("");

    function isEnabledSendEmail() {
        return email != "" && emailError == "";
    }

    function passwordReset() {
        firebase.auth().sendPasswordResetEmail(email);
        navigation.goBack();
    }

    return (
        <AuthLayout
            title="Recuperar Contraseña"
            subTitle="Porfavor ingrese su email para recuperar su contraseña"
            titleContainerStyle={{ marginTop: SIZES.padding }}
        >
            {/* Form Input */}
            <View style={{ flex: 1, marginTop: SIZES.padding }}>
                <FormInput
                    label="Email"
                    keyboardType="email-address"
                    autoCompleteType="email"
                    value={email}
                    onChange={(value) => {
                        //validate email
                        utils.validateEmail(value, setEmailError);
                        setEmail(value);
                    }}
                    errorMsg={emailError}
                    appendComponent={
                        <View style={{ justifyContent: "center" }}>
                            <Image
                                source={
                                    email == "" ||
                                    (email != "" && emailError == "")
                                        ? icons.correct
                                        : icons.cancel
                                }
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor:
                                        email == ""
                                            ? COLORS.gray
                                            : email != "" && emailError == ""
                                            ? COLORS.green
                                            : COLORS.red,
                                }}
                            />
                        </View>
                    }
                />
            </View>

            {/* Button */}
            <TextButton
                label="Enviar email"
                disabled={isEnabledSendEmail() ? false : true}
                buttonContainerStyle={{
                    height: 55,
                    alignItems: "center",
                    marginTop: SIZES.padding,
                    borderRadius: SIZES.radius,
                    backgroundColor: isEnabledSendEmail()
                        ? COLORS.primary
                        : COLORS.transparentPrimray,
                }}
                onPress={() => passwordReset()}
            />
        </AuthLayout>
    );
};

export default ForgotPassword;
