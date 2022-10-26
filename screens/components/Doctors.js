import * as React from "react";
import { Text, View, Button, Alert, TextInput } from "react-native";

export default function Doctors() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput
        style={{
          borderBottomColor: "#777",
          borderBottomWidth: 2,
          marginBottom: 10,
        }}
        placeholder="Dr. Sandip"
      ></TextInput>
      <Button
        title="Find doctors"
        onPress={() => {
          Alert.alert("Sorry", "No doctor found", [{ text: "OK" }]);
        }}
      />
    </View>
  );
}
