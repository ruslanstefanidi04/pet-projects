import React from "react";
import { StatusBar } from "expo-status-bar";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./src/shared/config/query-client";
import { AppNavigator } from "./src/app/navigation/AppNavigator";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="dark" />
      <AppNavigator />
    </QueryClientProvider>
  );
}

