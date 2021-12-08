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
import DropDownPicker from 'react-native-dropdown-picker';


const BuyerDetailsScreen = ({navigation}) => {
    const [phone, onChangePhone] = React.useState(null);
    const [otp, onChangeOtp] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [items, setItems] = React.useState([
        {label: 'Manufacturer', value: 'manufacturer'},
        {label: 'Trader', value: 'trader'},
        {label: 'Processor', value: 'processor'}
        ]);
    
    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.topView}>
                <Text style={styles.titleText}>Your Account Details</Text>
            </View>
            <ImageBackground style={styles.inputArea} 
            source={require("../../../assets/cards/c3.png")}>
            <View >
               <Text style={{color: "#0D82D4", fontFamily:"Poppins-Regular", fontSize:17}}> Buyer Registration</Text>
               <View  >
                <TextInput 
                    style={styles.textField} 
                    placeholderTextColor={"#242424"} 
                    placeholder="Name of the company"
                    maxLength={50}
                />
                <Divider orientation="horizontal" style={styles.divider}/>
                <TextInput 
                style={styles.textField} 
                placeholderTextColor={"#242424"}  
                placeholder="Date of incorporation"
                maxLength={100}
                />
                <Divider orientation="horizontal" style={styles.divider}/>
                <TextInput 
                    style={styles.textField} 
                    placeholderTextColor={"#242424"} 
                    placeholder="Rubber board registration No."
                    minLength={10}
                    maxLength={20}
                />
                <Divider orientation="horizontal" style={styles.divider}/>
                <DropDownPicker
                    placeholder={"Mode of Business"}
                    placeholderStyle={{marginLeft:-5, fontSize:14, fontFamily:"Poppins-Regular",color:"#242424"}}
                    style={{borderWidth:0, fontFamily:"Poppins-Regular"}}
                    dropDownContainerStyle={{borderWidth:0.1, borderRadius:1, borderColor:"#242424"}}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    disableBorderRadius={ false}
                    />
                <Divider orientation="horizontal" style={styles.divider,{marginTop:5}} />
                <TextInput 
                style={styles.textField} 
                placeholderTextColor={"#242424"}  
                placeholder="GST No."r
                maxLength={50}
                keyboardType="default"
                />
                <Divider orientation="horizontal" style={styles.divider} />
                <TouchableOpacity onPress={() =>  navigation.navigate("BuyerMoreDetails")}>
                <Image 
                    style={{marginTop:20, alignSelf:'center'}} 
                    source={require('../../../assets/icons/next.png')}
                    />
                </TouchableOpacity>
                </View>
            </View>
            </ImageBackground>
            <View style={styles.bottomView}>
                <View style={styles.bottomView}>
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
        padding : 30,
        marginTop: -100,
        zIndex : 1, 
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
export default BuyerDetailsScreen;