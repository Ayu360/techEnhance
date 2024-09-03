import { WebView } from "react-native-webview";
import { useEffect, useState } from "react";
import { SplashScreen } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading === false) {
      SplashScreen.hideAsync();
    }
  }, [loading]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: "https://techenhance.com/" }}
        onLoadEnd={() => setLoading(false)}
      />
    </SafeAreaView>
  );
}
