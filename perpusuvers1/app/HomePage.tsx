import React, { useState, useRef } from 'react';
import { 
  SafeAreaView, StyleSheet, Text, Button, useColorScheme, View, Image, Dimensions,
  TextInput, Alert, TouchableOpacity, ScrollView, Platform } from 'react-native';
import{
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  useResponsiveWidth,
} from 'react-native-responsive-dimensions';


const HomePage = () => {
  const [searchText, setSearchText] = useState('');
  const searchInputRef = useRef<TextInput | null>(null); // Specify the type explicitly


  const Header = () =>{
    return (
      <View style={styles.headerContainer}>
      <View style={styles.leftColumn}>
        <Text style={styles.textHello}>Hello</Text>
        <Text style={styles.textName}>Tommy</Text>
      </View>
      <View style={styles.rightColumn}>
        <Image style={styles.profileImage} source={require('../asset/Home/photoProfile.png')}/>
      </View>
    </View>
    )
  }

  
  const SearcBar = () =>{
    const handleSearchIconPress = () => {
      // Focus on the TextInput and set the text value
      if (searchInputRef.current) {
        searchInputRef.current.focus();
        setSearchText(''); // Clear the text (if you want to start fresh)
      }
    };

    return (
      <View style={styles.searchContent}>
        <View style={styles.searchBar}>
          <TouchableOpacity onPress={handleSearchIconPress}>
            <Image style={styles.searchIcon} source={require('../asset/Home/search.png')} />
          </TouchableOpacity>
          <TextInput
            ref={searchInputRef} // Set the ref
            style={styles.input}
            placeholder='Search Books'
            value={searchText} // Use the state value for the text input
            onChangeText={setSearchText} // Update the state when typing
          />
        </View>
        <TouchableOpacity style={styles.sortMenu}>
          <Image style={styles.sortIcon} source={require('../asset/Home/sortIcon.png')} />
        </TouchableOpacity>
      </View>
    );
  }
  const BookContent = () => {
    return(
      <View style={styles.boxContent}>
          <TouchableOpacity style={styles.box}>
            <View style={styles.inner}>
              <Text>Hello</Text>
            </View>
            <Text style={styles.textJudul}>Judul Buku</Text>
            <Text style={styles.textPenulis}>Penulis</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box}>
            <View style={styles.inner}>
              <Text>Hello</Text>
            </View>
            <Text style={styles.textJudul}>Judul Buku</Text>
            <Text style={styles.textPenulis}>Penulis</Text>
          </TouchableOpacity>
      </View>
    )
  
    
  }

  const EmptyArea = () => {
    return  (
      <View style={styles.emptyArea}>
          
      </View>
    )
  }


  return (
    <ScrollView>
        <Header></Header>
        <SearcBar></SearcBar>
        <BookContent></BookContent>
        <EmptyArea></EmptyArea>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  //header
  headerContainer: {
    flexDirection: 'row', // Horizontally align elements
    height : responsiveHeight(15),
    // backgroundColor: '#00FF00',
  },
  leftColumn: {
    marginVertical: responsiveHeight(5),
    marginHorizontal: responsiveWidth(7),
    flex: 1, // Occupy 1/2 of the row space
    justifyContent: 'center', // Vertically center elements
    alignItems: 'flex-start', // Align items to the start (left)
  },
  rightColumn: {
    flex: 1, // Occupy 1/2 of the row space
    justifyContent: 'center', // Vertically center elements
    alignItems: 'flex-end', // Align items to the end (right)
    marginVertical: responsiveHeight(5),
    marginHorizontal: responsiveWidth(7),
  },
  textHello: {
    fontSize: responsiveFontSize(3),
    color: '#7C7C7C',
  },
  textName: {
    fontSize: responsiveFontSize(3.5),
    fontWeight: 'bold',
    color: '#000000',
  },
  profileImage: {
    height: responsiveWidth(20),
    width: responsiveWidth(20),
    borderRadius: 50, // To make the image round
  },


  //SearchBar
  searchContent: {
    marginTop: responsiveHeight(2),
    // backgroundColor: '#000000',
    height: responsiveHeight(8),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  searchBar: {
    flex: 0.75, // Reduce the flex value to make it smaller
    height: responsiveHeight(6),
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#FFFFFF',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  input: {
    flex: 1,
    marginLeft: responsiveWidth(3),
    fontSize: 20,
  },
  sortMenu: {
    flex: 0.13, // Reduce the flex value to adjust the size
    height: responsiveHeight(6),
    backgroundColor: '#128CFC',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

elevation: 5,
  },
  searchIcon: {
    width: responsiveWidth(5),
    height: responsiveWidth(5),
    marginLeft: responsiveWidth(3),
  },
  sortIcon: {
    width: responsiveWidth(5),
    height: responsiveWidth(5),
  },
  


  //Book Content
  boxContent: {
    // backgroundColor: '#ff0000',
    height : responsiveHeight(90),
    flexDirection: 'row',
    padding: 5,
    flexWrap: 'wrap',
  },
  box: {
    width: '50%',
    height: responsiveHeight(34),
    padding: 20,
    // backgroundColor: '#ffff00',
  },
  inner: {
    flex: 1,
    backgroundColor:'#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  textPenulis: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'normal',
    color: '#878D92'
  },

  textJudul: {
    fontSize: responsiveFontSize(3),
    marginTop: responsiveHeight(1),
    fontWeight: 'bold',
    color: '#000000'
  },



  //empty Area
  emptyArea: {
    height: responsiveHeight(20),
    backgroundColor: '#0CB3FA'
  }
});

export default HomePage;
