import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const COLORS = {primary: '#282534', white: '#fff'};

const slides = [
  {
    id: '1',
    image: require('../assets/images/image1.png'),
    title: 'Natural Rubber',
    subtitle: 'Inorder to see more about naturl rubber kindly login',
  },
  {
    id: '2',
    image: require('../assets/images/image2.png'),
    title: 'RSS V',
    subtitle: 'Inorder to see more about naturl rubber kindly login',
  }
];


const OnboardingScreen = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const Slide = ({item}) => {
    return (
      <ImageBackground
          source={item?.image}
          style={{flex:1, width}}
        >
        <View style={styles.bottomView} >
          <Text style={styles.title}>{item?.title}</Text>
          <Text style={styles.subtitle}>{item?.subtitle}</Text>
          <TouchableOpacity onPress={()=>navigation.replace("Home")} style={{padding:10}}>
            <View style={{flexDirection:"row", alignItems:"flex-end"}}>
              <Text  style={styles.skip}>Skip</Text>
                <Image source={require("../assets/icons/skip.png")} />
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  };
  

  return (
    <SafeAreaView style={{flex: 1 }}>
      {/* <StatusBar  /> */}
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{height: "100%",}}
        showsHorizontalScrollIndicator={true}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} />}
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: "#FFFFFF",
    fontSize: 14,
    maxWidth: '70%',
    textAlign: 'center',
    alignSelf: 'center',
    padding:20
  },
  title: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bottomView: {
    flex:1,
    bottom:0 ,
    borderColor:"#242424",
    backgroundColor:"#24242424",
    justifyContent:"flex-end" 
  },
  skip : {
    textAlign:"right",
    color:"#FFFFFF",
    paddingHorizontal:10,
    paddingBottom:3,
    justifyContent:"flex-end"
  }
});
export default OnboardingScreen;
