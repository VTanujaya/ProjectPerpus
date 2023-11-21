import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

// Import the JSON data
import booksData from "./Data.json";

const App = () => {
  const pageName = "My Books";
  const books = booksData.books;

  // Assuming you want to display the first book in your JSON data
  const firstBook = books[1];
  const {
    bookAuthor,
    bookTitle,
    borrowedBooks,
    bookStock,
    bookCategory,
    bookRating,
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
        <View style={styles.bookContent}>
          <View style={styles.bookCard}>
            <View style={styles.bookImagePosition}>
              <Image
                source={require("./assets/book2.png")}
                style={styles.bookImage}
              />
            </View>
            <View style={styles.bookInfo}>
              <Text style={styles.bookTitle}>{bookTitle}</Text>
              <Text style={styles.bookAuthor}>{bookAuthor}</Text>
              <Text style={styles.bookAuthor}>{bookCategory}</Text>
              <View style={styles.bookRating}>
                <Image source={require("./assets/ratingStarImage.png")}
                  style={styles.ratingStar}>
                </Image>
                <View>
                  <Text style={styles.ratingText}>{bookRating}</Text>
                </View>
              </View>
              
            </View>
            
          </View>

          <View style={styles.bookCard}>
            <View style={styles.bookImagePosition}>
              <Image
                source={require("./assets/book2.png")}
                style={styles.bookImage}
              />
            </View>
            <View style={styles.bookInfo}>
              <Text style={styles.bookTitle}>{bookTitle}</Text>
              <Text style={styles.bookAuthor}>{bookAuthor}</Text>
              <Text style={styles.bookAuthor}>{bookCategory}</Text>
              <View style={styles.bookRating}>
                <Image source={require("./assets/ratingStarImage.png")}
                  style={styles.ratingStar}>
                </Image>
                <View>
                  <Text style={styles.ratingText}>{bookRating}</Text>
                </View>
              </View>
              
            </View>
            
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  // Background
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  // Header
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
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

  // Book Content
  bookContent: {
    marginTop: responsiveHeight(2),
    // backgroundColor: "#FF00FF",
    height: responsiveHeight(60),
    alignItems: "center",
  },
  bookCard: {
    flexDirection: "row",
    marginTop: responsiveHeight(3),
    width: responsiveWidth(85),
    height: responsiveHeight(20),
    margin: responsiveWidth(1),
    backgroundColor: "#FFFFFF",
    borderColor: "#000000",
    borderWidth: responsiveWidth(0.05),
    borderRadius: responsiveWidth(2),
    alignItems: "center",
    justifyContent: "center",
  },
  bookImagePosition: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    // backgroundColor: "#FF0000",
    marginLeft: responsiveWidth(2.5),
    padding: responsiveWidth(2),
  },
  bookImage: {
    borderRadius: responsiveHeight(1),
    height: responsiveHeight(16),
    width: responsiveWidth(23),
  },
  bookInfo: {
    flex: 1,
    marginLeft: responsiveWidth(1.3),
    marginRight: responsiveWidth(2),
  },
  bookTitle: {
    fontSize: responsiveFontSize(2.2),
    marginBottom: responsiveHeight(1),
    fontWeight: "bold",
    color: "#000000",
  },
  bookAuthor: {
    marginTop: responsiveHeight(1),
    fontSize: responsiveFontSize(1.8),
    color: "#000000",
  },
  bookRating: {
    marginTop: responsiveHeight(1),
    flexDirection: "row",
    alignItems: "center",
  },
  ratingStar: {
    width: responsiveHeight(2),
    height: responsiveHeight(2),
    justifyContent: "center",
    alignItems: "center",
  },
  ratingText: {
    marginLeft:responsiveWidth(0.8),
    fontSize: responsiveFontSize(2.1),
  }
});

export default App;