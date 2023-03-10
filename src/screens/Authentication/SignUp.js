import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { AuthLayout } from "../";
import { SIZES, COLORS, icons } from "../../../constants";
import { FormInput, TextButton, TextIconButtonLogin } from "../../components";
import { utils } from "../../utils";

import { firebase } from "../../../db/firebase.config";

const SignUp = ({ navigation }) => {
    const [email, setEmail] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showPass, setShowPass] = React.useState(false);

    const [emailError, setEmailError] = React.useState("");
    const [usernameError, setUsernameError] = React.useState("");
    const [passwordError, setPasswordError] = React.useState("");

    function isEnableSignUp() {
        return (
            email != "" &&
            username != "" &&
            password != "" &&
            emailError == "" &&
            passwordError == "" &&
            usernameError == ""
        );
    }

    const registerUser = async () => {
        await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                firebase
                    .auth()
                    .currentUser.sendEmailVerification({
                        handleCodeInApp: true,
                        url: "https://otrodelivery-test.firebaseapp.com",
                    })
                    .then(() => {
                        console.log("Verificacion enviada");
                    })
                    .catch((err) => {
                        console.log(err.message);
                    })
                    .then(() => {
                        firebase
                            .firestore()
                            .collection("users")
                            .doc(firebase.auth().currentUser.uid)
                            .set({
                                username,
                                email,
                            });
                    })
                    .catch((err) => {
                        console.log(err.message);
                    });
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    return (
        <AuthLayout
            title="Comencemos"
            subTitle="¡Crea tu cuenta para continuar!"
            titleContainerStyle={{ marginTop: SIZES.radius }}
        >
            {/* Form Input And Sign Up */}
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding,
                }}
            >
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
                    label="Nombre de Usuario"
                    containerStyle={{ marginTop: SIZES.radius }}
                    value={username}
                    onChange={(value) => {
                        setUsername(value);
                    }}
                    errorMsg={usernameError}
                    appendComponent={
                        <View style={{ justifyContent: "center" }}>
                            <Image
                                source={
                                    username == "" ||
                                    (username != "" && usernameError == "")
                                        ? icons.correct
                                        : icons.cancel
                                }
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor:
                                        username == ""
                                            ? COLORS.gray
                                            : username != "" &&
                                              usernameError == ""
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
                        utils.validatePassword(value, setPasswordError);
                        setPassword(value);
                    }}
                    errorMsg={passwordError}
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

                {/* Sign Up & Sign In */}
                <TextButton
                    label="Registrate"
                    disabled={isEnableSignUp() ? false : true}
                    buttonContainerStyle={{
                        height: 55,
                        alignItems: "center",
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: isEnableSignUp()
                            ? COLORS.primary
                            : COLORS.transparentPrimray,
                    }}
                    onPress={() => {
                        //navigation.navigate("Otp")
                        registerUser();
                    }}
                />

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
                        ¿Ya tienes una cuenta?
                    </Text>
                    <TextButton
                        label="Inicia Sesión"
                        buttonContainerStyle={{
                            backgroundColor: null,
                            marginLeft: 4,
                        }}
                        labelStyle={{
                            color: COLORS.primary,
                            fontSize: SIZES.h3,
                            fontWeight: "800",
                        }}
                        onPress={() => navigation.goBack()}
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

export default SignUp;
