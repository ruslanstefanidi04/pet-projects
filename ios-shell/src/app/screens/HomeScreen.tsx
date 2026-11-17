import React from "react";
import { View, Text } from "react-native";

export function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-zinc-100">
      <View className="rounded-2xl bg-white px-6 py-8 shadow">
        <Text className="text-center text-2xl font-semibold">ios-shell</Text>
        <Text className="mt-2 text-center text-sm text-zinc-600">
          NativeWind (Tailwind) подключён
        </Text>
      </View>
    </View>
  );
}
