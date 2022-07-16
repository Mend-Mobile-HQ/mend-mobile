import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, Text } from "react-native-paper";
import route from "../../../navigation/route";
import colors from "../../../utils/colors";

const SplashScreen3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.midContainer}>
        <Text style={styles.headline}>Rent faster and pay bills </Text>
        <Image
          style={styles.img}
          source={require("../../../assets/splahes/1.png")}
        />
        <Text style={styles.text}>
          List your vacant houses, management community utility bills and earn
          bonus when you refer someone
        </Text>
      </View>
      <Button
        onPress={() => navigation.navigate(route.LANDLORD_LOGIN)}
        contentStyle={{ padding: 10 }}
        mode="contained"
        style={styles.btn}
      >
        Get Started
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  midContainer: {
    display: "flex",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    height: "80%",
  },
  headline: {
    color: colors.primary,
    fontSize: 35,
    fontWeight: "700",
    textAlign: "center",
  },
  img: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  text: {
    fontSize: 30,

    textAlign: "center",
  },
  btn: {
    width: "90%",
  },
});
export default SplashScreen3;
