import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import {
    Header,
    IconButton,
    CartQuantityButton,
    StepperInput,
} from "../../components";
import { SIZES, COLORS, icons, dummyData } from "../../../constants";

const MyCart = ({ navigation }) => {
    function renderHeader() {
        return (
            <Header
                title="MI CARRITO"
                containerStyle={{
                    height: 50,
                    marginHorizontal: SIZES.padding,
                    marginTop: 40,
                }}
            />
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

            {/* Cart List */}

            {/* Footer */}
        </View>
    );
};

export default MyCart;
