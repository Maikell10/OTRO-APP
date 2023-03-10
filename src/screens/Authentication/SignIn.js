import React from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import AuthLayout from "./AuthLayout";
import { SIZES, COLORS, icons } from "../../../constants";

import {
    ActivityIndicator,
    CustomSwitch,
    FormInput,
    TextButton,
    TextIconButtonLogin,
} from "../../components";

import { utils } from "../../utils";
import { firebase } from "../../../db/firebase.config";

const SignIn = ({ navigation }) => {
    const [loading, setLoading] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [emailError, setEmailError] = React.useState("");

    const [showPass, setShowPass] = React.useState(false);
    const [saveMe, setSaveMe] = React.useState(false);

    function isEnableSignIn() {
        return email != "" && password != "" && emailError == "";
    }

    const handleSignIn = async () => {
        setLoading(true);
        //navigation.replace("Home");
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
        } catch (error) {
            setLoading(false);
            console.log("Fallo", error.message);
            let errMsj = "Intente de nuevo";
            if (
                error.message ==
                "Firebase: The password is invalid or the user does not have a password. (auth/wrong-password)."
            ) {
                errMsj = "La clave es incorrecta!";
            }
            if (
                error.message ==
                "Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found)."
            ) {
                errMsj = "No se encuentra registrado!";
            }
            Alert.alert(
                //title
                "Error!",
                //body
                errMsj,
                [
                    {
                        text: "Ok",
                        onPress: () => console.log("Ok Alert"),
                        style: "cancel",
                    },
                ],
                { cancelable: false }
                //clicking out side of alert will not cancel
            );
        }
    };

    if (loading) {
        return <ActivityIndicator />;
    }

    return (
        <AuthLayout title="Inicia Sesión" subTitle="Bienvenido a OTRO Delivery">
            <View style={{ flex: 1, marginTop: SIZES.padding }}>
                {/* Form Inputs */}
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

                <FormInput
                    label="Contraseña"
                    secureTextEntry={!showPass}
                    autoCompleteType="password"
                    containerStyle={{ marginTop: SIZES.radius }}
                    value={password}
                    onChange={(value) => {
                        setPassword(value);
                    }}
                    appendComponent={
                        <TouchableOpacity
                            style={{
                                width: 40,
                                alignItems: "flex-end",
                                justifyContent: "center",
                            }}
                            onPress={() => setShowPass(!showPass)}
                        >
                            <Image
                                source={showPass ? icons.eye_close : icons.eye}
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: COLORS.gray,
                                }}
                            />
                        </TouchableOpacity>
                    }
                />

                {/* Save me & Forgot Password */}
                <View
                    style={{
                        flexDirection: "row",
                        marginTop: SIZES.radius,
                        justifyContent: "space-between",
                    }}
                >
                    <CustomSwitch
                        value={saveMe}
                        onChange={(value) => setSaveMe(value)}
                    />

                    <TextButton
                        label="¿Olvidaste tu contraseña?"
                        buttonContainerStyle={{
                            backgroundColor: null,
                        }}
                        labelStyle={{
                            color: COLORS.gray,
                            fontSize: SIZES.body4,
                        }}
                        onPress={() => navigation.navigate("ForgotPassword")}
                    />
                </View>

                {/* Sign In */}
                <TextButton
                    label="Inicia Sesión"
                    disabled={isEnableSignIn() ? false : true}
                    buttonContainerStyle={{
                        height: 55,
                        alignItems: "center",
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: isEnableSignIn()
                            ? COLORS.primary
                            : COLORS.transparentPrimray,
                    }}
                    onPress={() => handleSignIn()}
                />

                {/* Sign Up */}
                <View
                    style={{
                        flexDirection: "row",
                        marginTop: SIZES.radius,
                        justifyContent: "center",
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.darkGray,
                            fontSize: SIZES.body3,
                        }}
                    >
                        ¿No tienes una cuenta?
                    </Text>

                    <TextButton
                        label="Registrate"
                        buttonContainerStyle={{
                            backgroundColor: null,
                            marginLeft: 4,
                        }}
                        labelStyle={{
                            color: COLORS.primary,
                            fontSize: SIZES.h3,
                            fontWeight: "800",
                        }}
                        onPress={() => navigation.navigate("SignUp")}
                    />
                </View>
            </View>

            {/* Footer */}
            <View>
                {/* Facebook */}
                {/* <TextIconButtonLogin
                    containerStyle={{
                        height: 50,
                        alignItems: "center",
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.blue,
                    }}
                    icon={icons.fb}
                    iconPosition="LEFT"
                    iconStyle={{ tintColor: COLORS.white }}
                    label="Continua con Facebook"
                    labelStyle={{
                        marginLeft: SIZES.radius,
                        color: COLORS.white,
                    }}
                    onPress={() => console.log("Facebook")}
                /> */}

                {/* Google */}
                {/* <TextIconButtonLogin
                    containerStyle={{
                        height: 50,
                        alignItems: "center",
                        marginTop: SIZES.radius,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.lightGray2,
                    }}
                    icon={icons.google}
                    iconPosition="RIGHT"
                    iconStyle={{ tintColor: null }}
                    label="Continua con Google"
                    labelStyle={{
                        marginLeft: SIZES.radius,
                    }}
                    onPress={() => console.log("Google")}
                /> */}
            </View>
        </AuthLayout>
    );
};

export default SignIn;
