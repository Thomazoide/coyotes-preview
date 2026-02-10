import { Flayer } from "@/types/entities";
import { useState } from "react";
import { ScrollView } from "react-native";

export default function HomeScreen() {
  const [flayers, setFlayers] = useState<Flayer[]>();
  return <ScrollView className="flex flex-col items-center p-5"></ScrollView>;
}
