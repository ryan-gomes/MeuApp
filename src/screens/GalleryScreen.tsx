import React, { useEffect, useState } from "react";
import { View, ScrollView, Image, StyleSheet, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import api from "../services/api";
import BackButton from "../components/BackButton";
import { RootStackParamList } from "../navigation/AppNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Gallery">;

interface PhotoItem {
  _id: string;
  url: string;
  name?: string;
}

export default function GalleryScreen({ navigation }: Props) {
  const [photos, setPhotos] = useState<PhotoItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPhotos() {
      try {
        const response = await api.get("/photos"); 
        setPhotos(response.data);
      } catch (error) {
        console.log("Erro ao carregar fotos:", error);
      } finally {
        setLoading(false);
      }
    }

    loadPhotos();
  }, []);

  return (
    <View style={styles.container}>
      <BackButton />

      <Text style={styles.title}>Sua Galeria</Text>

      {loading ? (
        <Text style={styles.loading}>Carregando...</Text>
      ) : (
        <ScrollView contentContainerStyle={styles.gallery}>
          {photos.map((item) => (
            <Image
              key={item._id}
              source={{ uri: item.url }}
              style={styles.photo}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 80,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#A6763C",
    textAlign: "center",
    marginBottom: 20,
  },
  loading: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 16,
    color: "#A6763C",
  },
  gallery: {
    paddingHorizontal: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  photo: {
    width: "48%",
    height: 160,
    borderRadius: 10,
    marginBottom: 12,
    backgroundColor: "#eee",
  },
});
