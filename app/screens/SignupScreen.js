
import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  TextInput,
  Image,
  Animated,
  Pressable,
} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { NativeBaseProvider, Box, Text, Center } from 'native-base';
import { Divider } from 'react-native-elements';
import { apiRequest } from '../utils';


const SignupScreen = ({navigation}) => {
  const [username, onChangeUsername] = React.useState(null);
  const [email, onChangeEmail] = React.useState(null);
  const [phone, onChangePhone] = React.useState(null);
  const [designation, onChangeDesignation] = React.useState(null);
  
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'buyer', title: 'Buyer' },
    { key: 'seller', title: 'Seller' },
  ]);


  const BuyerRoute = () => 
  <View style={{marginTop:10}} >
    <TextInput 
        style={styles.textField} 
        placeholderTextColor={"#242424"} 
        placeholder="User Name"
        value={username}
        onChangeText={onChangeUsername}
        maxLength={255}
        minLength={1}
        keyboardType="default"
    />
    <Divider orientation="horizontal" style={styles.divider}/>
    <TextInput 
    style={styles.textField} 
    placeholderTextColor={"#242424"}  
    placeholder="Email Id"
    value={email}
    onChangeText={onChangeEmail}
    maxLength={255}
    minLength={1}
    keyboardType="email-address"
    />
    <Divider orientation="horizontal" style={styles.divider}/>
    <TextInput 
        style={styles.textField} 
        placeholderTextColor={"#242424"} 
        placeholder="Phone number"
        value={phone}
        onChangeText={onChangePhone}
        minLength={10}
        maxLength={20}
        keyboardType="numeric"
    />
    <Divider orientation="horizontal" style={styles.divider}/>
    <TextInput 
    style={styles.textField} 
    placeholderTextColor={"#242424"}  
    placeholder="Designation"
    value={designation}
    onChangeText={onChangeDesignation}
    maxLength={50}
    keyboardType="default"
    />
    <Divider orientation="horizontal" style={styles.divider} />
    <TouchableOpacity onPress={buyerRegister}>
      <Image 
        style={{marginTop:20, alignSelf:'center'}} 
        source={require('../assets/icons/next.png')}
        />
    </TouchableOpacity>
  </View>;

const SellerRoute = () => 
<View style={{marginTop:10}} >
    <TextInput 
        style={styles.textField} 
        placeholderTextColor={"#242424"} 
        placeholder="User Name"
        maxLength={50}
        keyboardType="decimal-pad"
    />
    <Divider orientation="horizontal" style={styles.divider}/>
    <TextInput 
    style={styles.textField} 
    placeholderTextColor={"#242424"}  
    placeholder="Email Id"
    maxLength={100}
    keyboardType="email-address"
    />
    <Divider orientation="horizontal" style={styles.divider}/>
    <TextInput 
        style={styles.textField} 
        placeholderTextColor={"#242424"} 
        placeholder="Phone number"
        minLength={10}
        maxLength={20}
        keyboardType="numeric"
    />
    <Divider orientation="horizontal" style={styles.divider}/>
    <TextInput 
    style={styles.textField} 
    placeholderTextColor={"#242424"}  
    placeholder="Designation"
    maxLength={50}
    keyboardType="default"
    />
    <Divider orientation="horizontal" style={styles.divider} />
    <TouchableOpacity onPress={() =>  navigation.navigate("SellerDetails")}>
      <Image 
        style={{marginTop:20, alignSelf:'center'}} 
        source={require('../assets/icons/next.png')}
        />
    </TouchableOpacity>
  </View>;

const buyerRegister = async() =>{
  if(username && email && phone && designation)
  {
    apiRequest(
      "https://rubber.metrictreelabs.com/api/register/", {username,email, "type":"buyer", phone, designation}, "POST", true
      ).then(console.log("api"))
    // navigation.navigate("BuyerDetails")

  }

}

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
buyer: BuyerRoute,
seller: SellerRoute,
});

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });
          const color = index === i ? '#1f2937' : '#a1a1aa';
          const borderColor = index === i ? 'cyan.500' : 'coolGray.200';

          return (
            <Box
              borderBottomWidth="3"
              borderColor={borderColor}
              flex={1}
              alignItems="center"
              p=".5"
              cursor="pointer">
              <Pressable
                onPress={() => {
                  console.log(i);
                  setIndex(i);
                }}>
                <Animated.Text style={{ color , fontFamily: "Poppins-Regular", fontSize:17}}>{route.title}</Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <NativeBaseProvider>
    < SafeAreaView style={styles.background}>
        <View style={styles.topView}>
                    <Text style={styles.titleText}>Welcome!</Text>
                    <Text style={styles.subTitleText}>Create Your Account</Text>
        </View>
        <ImageBackground style={styles.inputArea} 
          source={require("../assets/cards/c2.png")}>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            style={{flex:1}}
            initialLayout={initialLayout}
            />
        </ImageBackground>
        <View style={styles.bottomView}>
          <View style={styles.bottomView}/>
        </View>

      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
    background : {
        flex: 1,
        backgroundColor : "#FFFFFF",
    },
    topView : {
        flex : 2,
        padding: 20,
        backgroundColor : "#0D82D4"
    },
    bottomView : {
        flex : 1,
        justifyContent: 'center',
        alignItems : 'center',
        backgroundColor : "#FFFFFF"
    },
    titleText : {
        color : "white",
        fontSize : 30,
        paddingTop : 30,
        fontFamily : "Poppins-Medium"
    },
    subTitleText : {
        color : "white",
        fontSize : 15,
        paddingTop : 20,
        fontFamily : "Poppins-Regular"
    },
    inputArea : {
        marginHorizontal : 20,
        height: 420,
        padding : 30,
        marginTop: -100,
        zIndex : 1, 
        borderRadius: 10,
    },
    textField : {
        width : "80%",
        height : 60,
        fontSize:14,
        fontFamily : "Poppins-Regular",
    },
    divider : {
      marginTop : -10,
      marginBottom : 10,
    }

})
 
export default SignupScreen;
