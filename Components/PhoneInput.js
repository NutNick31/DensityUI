import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Button,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import FocusedStatusBar from "./FocusedStatusBar";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const PhoneInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [signin, setSignin] = useState(false);
  const handlePress1 = () => {
    setSignin(!signin);
  };
  const handlePress2 = () => {
    navigation.navigate("OTP")
  }
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.complete}>
      <FocusedStatusBar background="transparent" />
      <View style={styles.signin}>
        <View style={styles.header}>
          <Text style={styles.logo}>HUNTER</Text>
          <Text style={styles.signup}>{signin ? "SignIn" : "SingUp"}</Text>
        </View>
        <View style={styles.comp}>
          <TextInput
            style={styles.phoneInput}
            placeholder="Phone Number"
            onChange={(text) => setPhoneNumber(text)}
            keyboardType="numeric"
          />
          {/* <Button color="#6D48FF" title="Let's Play" /> */}
          <Pressable style={styles.button}>
            <Text onPress={handlePress2} style={styles.text}>Let's Play</Text>
          </Pressable>
        </View>
        <View>
          <Text style={styles.resttext} onPress={handlePress1}>{signin ? "New to Hunter? SingUp" : "Already Have an Account? Signup"}</Text>
        </View>
        <View>
          <Image
            source={require("../assets/images/bgplayers.png")}
            style={styles.image}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PhoneInput;

const styles = StyleSheet.create({
  complete: {
    height: height,
    backgroundColor: "#939DE0",
  },
  header: {
    padding: 50,
  },
  logo: {
    fontSize: height * 0.05,
    color: "white",
    marginBottom: 5,
  },
  signup: {
    fontSize: height * 0.025,
    color: "white",
    marginBottom: 10,
  },
  phoneInput: {
    fontSize: 20,
    width: width * 0.8,
    height: height * 0.095,
    flexDirection: "row",
    borderRadius: 10,
    paddingLeft: 10,
    borderColor: "gray",
    marginBottom: 20,
    backgroundColor: "white",
  },
  button: {
    width: width * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#6D48FF',
    shadowColor: '#000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  comp: {
    alignItems: "center",
    padding: 50,
    marginBottom: 50,
  },
  resttext: {
    textAlign: "center",
    marginBottom: 86,
  },
  image: {
    width: width,
    height: 0.3 * height,
    marginBottom: -2,
  },
});
