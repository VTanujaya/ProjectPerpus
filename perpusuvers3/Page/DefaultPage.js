import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  useResponsiveWidth,
} from "react-native-responsive-dimensions";

// Import the JSON data
import booksData from "./Data.json";

const App = () => {
  const pageName = "Book Details";
  const books = booksData.books;

  // Assuming you want to display the first book in your JSON data
  const firstBook = books[0];
  const {
    bookAuthor,
    bookTitle,
    borrowedBooks,
    bookStock,
    bookSynopsisContent,
  } = firstBook;

  // Function to split the text into lines
  const splitTextIntoLines = (text) => {
    const words = text.split(" ");
    let lines = [];
    let currentLine = "";

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const testWidth = testLine.length * responsiveFontSize(3);

      if (testWidth > responsiveWidth(120)) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }

    lines.push(currentLine);

    return lines;
  };

  const renderedLines = splitTextIntoLines(bookTitle);
  const bookImagePath = "./assets/book1.png";
  const defaultBoxContentHeight = responsiveHeight(45); // Default height


  // Callback function for the onLayout event to measure the synopsis height
  const onSynopsisLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setSynopsisHeight(height);
  };
  return (
    <ImageBackground
      source={require("./assets/backgroundImage.png")}
      style={styles.backgroundImage}
    >
      <ScrollView>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.backButton}>
            <Image
              source={require("./assets/backImage.png")}
              style={styles.backImage}
            />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{pageName}</Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  //Background
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  //header
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start", // Align items starting from the left
    paddingHorizontal: responsiveWidth(3),
    alignItems: "center",
    position: "relative",
    paddingTop: responsiveHeight(5),
  },
  backButton: {
    alignSelf: "center",
    padding: 15,
  },
  backImage: {
    width: 24,
    height: 24,
  },
  titleContainer: {
    marginLeft: responsiveWidth(2),
    flex: 1,
  },
  titleText: {
    fontSize: responsiveFontSize(2.8),
    fontWeight: "bold",
  },

});

export default App;