import React from 'react';
import { 
    Image, 
    ImageBackground, 
    SafeAreaView , 
    ScrollView, 
    StyleSheet, 
    Switch, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    View
} from 'react-native';
import { Divider } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';


const BuyerMoreDetailsScreen = ({navigation}) => {
    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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
            <ScrollView>
            <View style={styles.topView}>
                <Text style={styles.titleText}>Your Account Details</Text>
            </View>
            <ImageBackground style={styles.inputArea} 
            source={require("../../../assets/cards/c5.png")}>
            <View  >
               <Text style={{color: "#0D82D4", fontFamily:"Poppins-Regular", fontSize:17}}> Buyer Registration</Text>
               <View  >
                <TextInput 
                    style={styles.textField} 
                    placeholderTextColor={"#242424"} 
                    placeholder="Country/Region"
                    maxLength={50}
                />
                <Divider orientation="horizontal" style={styles.divider}/>
                <TextInput 
                style={styles.textField} 
                placeholderTextColor={"#242424"}  
                placeholder="Contact Name"
                maxLength={100}
                />
                <Divider orientation="horizontal" style={styles.divider}/>
                <TextInput 
                    style={styles.textField} 
                    placeholderTextColor={"#242424"} 
                    placeholder="Phone Number"
                    minLength={10}
                    maxLength={20}
                    keyboardType="number-pad"
                />
                <Divider orientation="horizontal" style={styles.divider}/>
                <TextInput 
                style={styles.textField} 
                placeholderTextColor={"#242424"}  
                placeholder="Address Lane 1"
                maxLength={100}
                keyboardType="default"
                />
                <Divider orientation="horizontal" style={styles.divider}/>
                <TextInput 
                style={styles.textField} 
                placeholderTextColor={"#242424"}  
                placeholder="Address Lane 2"
                maxLength={100}
                keyboardType="default"
                />
                 <Divider orientation="horizontal" style={styles.divider}/>
                <TextInput 
                style={styles.textField} 
                placeholderTextColor={"#242424"}  
                placeholder="Zip / pin Code"
                maxLength={50}
                keyboardType="default"
                />
                <Divider orientation="horizontal" style={styles.divider}/>
                <TextInput 
                style={styles.textField} 
                placeholderTextColor={"#242424"}  
                placeholder="State"
                maxLength={50}
                keyboardType="default"
                />
                <Divider orientation="horizontal" style={styles.divider}/>
                <TextInput 
                style={styles.textField} 
                placeholderTextColor={"#242424"}  
                placeholder="City"
                maxLength={50}
                keyboardType="default"
                />
                <Divider orientation="horizontal" style={styles.divider} />
                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                    <Text style={styles.textDefault}>Set as default shipping address</Text>
                    <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#0D82D4" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    />
                </View>    
                <TouchableOpacity onPress={() =>  navigation.navigate("BuyerRegister")}>
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
            </ScrollView>
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
    },
    titleText : {
        color : "white",
        fontSize : 30,
        paddingTop : 30,
        fontFamily : "Poppins-Semi-Bold"
    },
    subTitleText : {
        color : "white",
        fontSize : 15,
        paddingTop : 20,
        fontFamily : "Poppins-Regular"
    },
    inputArea : {
        marginHorizontal : 20,
        height: 680,
        padding : 30,
        marginTop: -100,
        zIndex : 1, 
    },
    textField : {
        width : "80%",
        height : 60,
        fontSize:14,
        color:"#242424",
        fontFamily : "Poppins-Regular",
    },
    divider : {
      marginTop : -10,
      marginBottom : 10,
    },
    textDefault : {
        fontFamily:"Poppins-Regular",
        fontSize: 14,
        color:"#848484",
        paddingTop:5
    }

})
export default BuyerMoreDetailsScreen;