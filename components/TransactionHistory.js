import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { COLORS, SIZES, FONTS, icons } from "../constants";

const TransactionHistory = ({ customContainerStyle, history }) => {
  return (
    <View
      style={{
        marginTop: SIZES.padding,
        marginHorizontal: SIZES.padding,
        padding: 20,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        ...customContainerStyle,
      }}
    >
      <Text style={{ ...FONTS.h2 }}>Transaction History</Text>
    </View>
  );
};

export default TransactionHistory;
