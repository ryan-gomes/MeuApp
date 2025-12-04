import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

export default function PhotoItem({ item }: any) {
  return (
    <TouchableOpacity>
      <Image source={{ uri: item.url }} style={styles.image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    margin: 5,
  },
});
