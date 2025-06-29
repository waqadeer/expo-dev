import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function AppLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: "https://www.login.reliefcompass.com/login" }}
        style={styles.webview}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});