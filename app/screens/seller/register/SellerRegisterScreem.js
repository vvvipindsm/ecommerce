import React from 'react';
import {
    Image,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { Divider } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';


const SellerRegisterScreen = ({ navigation }) => {
    const [phone, onChangePhone] = React.useState(null);
    const [otp, onChangeOtp] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [items, setItems] = React.useState([
        { label: 'Farmer', value: 'farmer' },
        { label: 'Trader', value: 'trader' },
        { label: 'Processor', value: 'processor' }
    ]);

    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.topView}>
                <Text style={styles.titleText}>Your Account Details</Text>
            </View>
            <ImageBackground style={styles.inputArea}
                source={require("../../../assets/cards/c3.png")}>

                <View  >
                    <Text style={{ color: "#0D82D4", fontFamily: "Poppins-Medium", fontSize: 14 }}> Seller Registration</Text>
                    <View  >
                        <DropDownPicker
                            placeholder={"Category of user"}
                            style={{ borderWidth: 0, fontFamily: "Poppins-Regular" }}
                            dropDownContainerStyle={{ borderWidth: 0.1, borderRadius: 1, borderColor: "#242424" }}
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            disableBorderRadius={false}
                        />
                        <Divider orientation="horizontal" style={styles.divider,{marginTop:5}} />
                        <TouchableOpacity onPress={() => {
                            console.log("Seller registered")
                            navigation.navigate("SellerDashboard")
                        }}>
                            <Image
                                style={{ marginTop: 20, alignSelf: 'center' }}
                                source={require('../../../assets/icons/like.png')}
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
    background: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    topView: {
        flex: 2,
        padding: 20,
        backgroundColor: "#0D82D4"
    },
    bottomView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FFFFFF"
    },
    titleText: {
        color: "white",
        fontSize: 30,
        paddingTop: 30,
        fontFamily: "Poppins-Semi-Bold"
    },
    subTitleText: {
        color: "white",
        fontSize: 14,
        paddingTop: 20,
        fontFamily: "Poppins-Regular"
    },
    inputArea: {
        marginHorizontal: 20,
        height: 400,
        padding: 30,
        marginTop: -100,
        zIndex: 1,
        borderRadius: 10,
    },
    textField: {
        width: "80%",
        height: 60,
        fontSize: 14,
        fontFamily: "Poppins-Regular",
    },
    divider: {
        marginTop: -10,
        marginBottom: 10,
    }

})
export default SellerRegisterScreen;