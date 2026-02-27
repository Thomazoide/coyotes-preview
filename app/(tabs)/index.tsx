import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import VideoPlayer from "@/components/video-player";
import { demoFlayers } from "@/mock-data/data";
import { Flayer } from "@/types/entities";
import { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  RefreshControl,
  ScrollView,
} from "react-native";

export default function HomeScreen() {
  const [flayers, setFlayers] = useState<Flayer[]>([]);
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

  const renderItem = ({ item }: { item: Flayer }) => {
    return (
      <ThemedView className="flex rounded-xl min-h-[300px] min-w-[300px] max-w-full max-h-[700px] m-3 justify-center my-5 bg-[#000] overflow-hidden border-2 border-pink-700">
        <ThemedText className="text-center p-2">{item.name}</ThemedText>
        {item.fileType === "image" && typeof item.fileURL === "string" ? (
          <Image src={item.fileURL} alt={item.name} height={300} width={300} />
        ) : (
          <VideoPlayer source={item.fileURL} aspectRatio="4:3" />
        )}
      </ThemedView>
    );
  };

  useEffect(() => {
    fetchFlayers();
  }, []);

  return (
    <>
      <ThemedText
        className="pt-4 text-center text-pink-700 bg-black border-b-[0.5px] border-b-gray-400 "
        type="title"
      >
        Eventos programados
      </ThemedText>
      <ScrollView
        refreshControl={
          <RefreshControl onRefresh={fetchFlayers} refreshing={loading} />
        }
      >
        <FlatList
          data={flayers}
          renderItem={(item) => renderItem(item)}
          keyExtractor={(item) => item.id.toString()}
          contentContainerClassName="flex flex-col items-center p-5 w-full h-full bg-black"
          ListEmptyComponent={
            <ThemedView className="flex rounded-xl justify-center items-center w-full h-full text-center">
              <ThemedText>Sin eventos próximos</ThemedText>
            </ThemedView>
          }
        />
      </ScrollView>
    </>
  );
}
