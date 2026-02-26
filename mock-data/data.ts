import { Flayer } from "@/types/entities";

export const demoFlayers = [
  {
    id: 1,
    creationDate: new Date().toISOString(),
    dateOfEvent: new Date().toISOString(),
    fileType: "video",
    fileURL: require("../assets/videos/video1.mp4"),
    name: "San Valentin",
    aspectRatio: "4:3",
  },
  {
    id: 2,
    creationDate: new Date().toISOString(),
    dateOfEvent: new Date().toISOString(),
    fileType: "image",
    fileURL: require("../assets/images/jueves_event.png"),
    name: "Jueves open mic",
    aspectRatio: "4:3",
  },
] as Flayer[];
