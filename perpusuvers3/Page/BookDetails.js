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
  const bookImagePath = "./assets/book1.png";
  const defaultBoxContentHeight = responsiveHeight(45); // Default height

  const [synopsisHeight, setSynopsisHeight] = useState(0);

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
        <View
          style={[
            styles.boxContent,
            { height: defaultBoxContentHeight + synopsisHeight },
          ]}
        >
          <View style={styles.bookCenterContent}>
            <View style={styles.box}>
              <Image source={require(bookImagePath)} style={styles.bookImage} />
            </View>
            <View style={styles.bookInfo}>
              {renderedLines.map((line, index) => (
                <Text key={index} style={styles.bookTitle}>
                  {line}
                </Text>
              ))}
              <Text style={styles.bookAuthor}>{bookAuthor}</Text>
              <Text style={styles.bookStock}>
                Stok : {bookStock - borrowedBooks}/{bookStock}
              </Text>
            </View>
            <View style={styles.bookSynopsis} onLayout={onSynopsisLayout}>
              <Text style={styles.bookSynopsisTitle}>Synopsis</Text>
              <Text style={styles.bookSynopsisContent}>
                {bookSynopsisContent}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.borrowButton}>
            <Text style={styles.buttonText}>Borrow Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.notifyButton}>
            <Text style={styles.buttonText}>Notify Me</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.emptyArea}></View>
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

  //Book Content
  boxContent: {
    marginTop: responsiveHeight(15),

  },

  bookCenterContent: {
    alignItems: "center",
  },
  box: {
    marginTop:responsiveHeight(1),
    width: responsiveWidth(43),
    height: responsiveHeight(26),
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: responsiveWidth(2),
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#000000",

    // Shadow properties
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },

  bookImage: {
    height: responsiveHeight(20),
    width: responsiveWidth(30),
    borderRadius: responsiveHeight(1),
  },

  bookInfo: {
    justifyContent: "center",
    marginTop: responsiveHeight(2), // Adjust the marginTop as needed
  },

  bookTitle: {
    fontSize: responsiveFontSize(3),
    fontWeight: "bold",
    textAlign: "center",
    color: "#000000",
  },
  bookAuthor: {
    marginTop: responsiveHeight(0.5),
    fontSize: responsiveFontSize(2.5),
    textAlign: "center",
    fontWeight: "bold",
    color: "#878D92",
  },
  bookStock: {
    color: "#128CFC",
    marginTop: responsiveHeight(0.5),
    fontSize: responsiveFontSize(2),
    textAlign: "center",
  },
  bookSynopsis: {
    textAlign: "left",
    padding: responsiveWidth(7),
  },

  bookSynopsisTitle: {
    fontSize: responsiveFontSize(2.3),
    fontWeight: "bold",
  },

  bookSynopsisContent: {
    marginTop: responsiveHeight(0.5),
    fontSize: responsiveFontSize(2),
    color: "#878D92",
    textAlign: "justify",
  },

  //Button
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: responsiveHeight(5),
  },

  // Borrow Button
  borrowButton: {
    marginLeft: responsiveWidth(2),
    backgroundColor: "#128CFC",
    width: responsiveWidth(36),
    height: responsiveHeight(5),
    borderRadius: responsiveWidth(2),
  },

  // Notify Button
  notifyButton: {
    marginRight: responsiveWidth(2),
    backgroundColor: "#878D92",
    width: responsiveWidth(36),
    height: responsiveHeight(5),
    borderRadius: responsiveWidth(2),
  },

  // Button Text
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: responsiveFontSize(2.3),
    textAlign: "center",
    justifyContent: "center",
    lineHeight: responsiveHeight(5), // Adjust the line height to center vertically
  },

  //empty Area
  emptyArea: {
    height: responsiveHeight(8),
    // backgroundColor: "#0CB3FA",
  },
});

export default App;