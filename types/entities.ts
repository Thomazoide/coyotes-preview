export interface Flayer {
  id: number;
  name: string;
  fileType: "video" | "image";
  fileURL: string | number;
  dateOfEvent: string;
  creationDate: string;
  aspectRatio: "4:3" | "9:16";
}
