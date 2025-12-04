import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Gallery">;

const mockPhotos = [
  { id: "1", url: "https://picsum.photos/400/400?1" },
  { id: "2", url: "https://picsum.photos/400/400?2" },
  { id: "3", url: "https://picsum.photos/400/400?3" }
];

export default function GalleryScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sua Galeria</Text>

      <FlatList
        data={mockPhotos}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image source={{ uri: item.url }} style={styles.image} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF", paddingTop: 50 },
  title: { fontSize: 28, fontWeight: "700", marginBottom: 20, textAlign: "center" },
  image: {
    width: "48%",
    height: 180,
    borderRadius: 10,
    margin: "1%"
  }
});
