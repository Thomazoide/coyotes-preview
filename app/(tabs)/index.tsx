import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { demoFlayers } from "@/mock-data/data";
import { Flayer } from "@/types/entities";
import { ResizeMode, Video } from "expo-av"; // IMPORTANTE, REEMPLAZAR EXPO-AV POR EXPO-VIDEO
import { useEffect, useState } from "react";
import { Alert, Image, ScrollView } from "react-native";

export default function HomeScreen() {
  const [flayers, setFlayers] = useState<Flayer[]>();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchFlayers = () => {
    try {
      setLoading(true);
      setFlayers(demoFlayers);
    } catch (e) {
      Alert.alert(
        "Error",
        e instanceof Error ? e.message : "error desconocido",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!flayers) fetchFlayers();
    // eslint-disable-next-line
  }, []);

  return (
    <ScrollView contentContainerClassName={`flex flex-col items-center p-5 w-full h-full`} contentContainerStyle={{backgroundColor: "#14131d"}}>
      {loading ? (
        <ThemedView className="flex justify-center w-full h-full text-center">
          <ThemedText>Cargando...</ThemedText>
        </ThemedView>
      ) : flayers && flayers.length > 0 ? (
        flayers.map((f) => (
          <ThemedView
            key={f.name}
            className="flex rounded-xl border-white h-fit w-full m-3 justify-center"
          >
            {f.fileType === "image" ? 
            <Image
              src={f.fileURL}
              alt={f.dateOfEvent}
              height={500}
              width={200}
            />
            :
            <Video 
              source={{
                uri: f.fileURL
              }}
              className="w-[720px] h-[720px]"
              resizeMode={ResizeMode.CONTAIN}
              shouldPlay
              isLooping
            />
            }
          </ThemedView>
        ))
      ) : (
        <ThemedView className="flex rounded-xl justify-center items-center w-full h-full text-center">
          <ThemedText>Sin eventos próximos</ThemedText>
        </ThemedView>
      )}
    </ScrollView>
  );
}
