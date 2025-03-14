import Calculadora from "@/Components/Calculadora";
import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <>
    <Stack.Screen options={{title: 'Calculadora'}}/>
    <Calculadora />
    </>
  );
}
