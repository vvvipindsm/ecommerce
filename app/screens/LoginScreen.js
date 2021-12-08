import React from 'react';
import { 
    Image, 
    ImageBackground, 
    SafeAreaView , 
    StyleSheet, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    View
} from 'react-native';
import { Divider } from 'react-native-elements';


const LoginScreen = ({navigation}) => {
   const [phone, onChangePhone] = React.useState(null);
    const [otp, onChangeOtp] = React.useState(null);
    
    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.topView}>
                <Text style={styles.titleText}>Welcome Back!</Text>
                <Text style={styles.subTitleText}>Login To Your Account</Text>
            </View>
            <ImageBackground style={styles.inputArea} 
                source={require("../assets/cards/c1.png")}>
                <View  >
                        <TextInput 
                            style={styles.textField} 
                            value={phone}
                            onChangeText={onChangePhone}
                            placeholderTextColor={"#242424"} 
                            placeholder="Phone number"
                            maxLength={10}
                            keyboardType="numeric"
                        />
                        <Divider orientation="horizontal" style={styles.divider}/>
                        <TextInput 
                        style={styles.textField} 
                        value={otp}
                        onChangeText={onChangeOtp}
                        placeholderTextColor={"#242424"}  
                        placeholder="OTP"
                        maxLength={6}
                        keyboardType="numeric"
                        />
                        <Divider orientation="horizontal" style={styles.divider}/>
                        <TouchableOpacity   onPress={() => navigation.navigate('Signup')}>
                            <Image 
                            style={{marginTop:20, alignSelf:'center'}} 
                            source={require('../assets/icons/next.png')}/>
                        </TouchableOpacity>
                </View>
            </ImageBackground>
            <View style={styles.bottomView}>
                <View style={styles.bottomView}>
                    <Image source={require('../assets/icons/googlenew.png')}/>
                </View>
                <View style={{flexDirection : 'row', justifyContent: "center", paddingBottom:40}}>
                        <Text style={styles.newUserText}>New User? </Text>
                        <Text style={styles.signupText} 
                            onPress={() => navigation.navigate('Signup')}>
                            Signup
                        </Text>
                </View>
            </View>
        </SafeAreaView>
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
        flex : 3,
        justifyContent: 'center',
        alignItems : 'center',
        backgroundColor : "#FFFFFF"
    },
    titleText : {
        color : "white",
        fontSize : 30,
        paddingTop : 20,
        fontFamily : "Poppins-Medium"
    },
    subTitleText : {
        color : "white",
        fontSize : 17,
        paddingTop : 20,
        fontFamily : "Poppins-Regular"
    },
    newUserText : {
        color : "#242424",
        fontSize : 14,
        fontFamily : "Poppins-Regular"
    },
    signupText : {
        color : "#A43AEF",
        fontSize : 14,
        fontFamily : "Poppins-Regular"
    },
    inputArea : {
        marginHorizontal : 20,
        height: 250,
        padding : 30,
        marginTop: -40,
        zIndex : 1, 
        borderRadius: 8,
        borderStyle: 'solid',
        borderColor : "#242424",
        textDecorationColor: "#242424"
    },
    textField : {
        width : "80%",
        height : 60,
        fontSize: 14,
        color : "#242424",
        textDecorationLine : 'underline'
    },
    divider : {
      marginTop : -10,
      marginBottom : 10,
    }

})
export default LoginScreen;