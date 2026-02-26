import { useVideoPlayer, VideoView } from "expo-video";
import { ThemedView } from "./themed-view";

export default function VideoPlayer(props: {
  source: string | number;
  aspectRatio: "4:3" | "9:16";
}) {
  const player = useVideoPlayer(props.source, (player) => {
    player.muted = true;
    player.loop = true;
    player.play();
  });
  return (
    <ThemedView className="w-fit h-fit">
      <VideoView
        player={player}
        contentFit="fill"
        nativeControls={false}
        allowsPictureInPicture={false}
        fullscreenOptions={{
          enable: false,
        }}
        style={{
          height: props.aspectRatio === "4:3" ? 300 : 500,
          width: 300,
        }}
      />
    </ThemedView>
  );
}
