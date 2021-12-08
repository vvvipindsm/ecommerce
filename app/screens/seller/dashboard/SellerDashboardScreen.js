import React from 'react'
import { ImageBackground, TouchableOpacity } from 'react-native'
import { 
    Image, 
    SafeAreaView, 
    StyleSheet, 
    Text, 
    View 
} from 'react-native'

const SellerDashboardScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.background} >
            <View  style={styles.background}>
                <View style={styles.topView}>
                <View style={{ alignItems:"center"}}>
                    <Image style={styles.buyerPic} source={require("../../../assets/images/person.png")}/>
                    <Text style={styles.buyerName }>Hi John</Text>
                </View>
                    <Text>"Rubber price is at all time low since 2006, according to ruber board..."</Text>
                    <Text>Times Net</Text>
                </View>
                <View style={styles.bottomView}>
                    <View style={styles.userOptionsRow}>
                        <View >
                            <ImageBackground style={styles.userOptionsImageBg} source={require("../../../assets/cards/optionsbg.png")}>
                                <TouchableOpacity  >
                                    <Image source={require("../../../assets/icons/purchase.png")}/>
                                </TouchableOpacity>
                            </ImageBackground>
                            <Text>View {"\n"} Orders</Text>
                        </View>
                        <View >
                            <ImageBackground style={styles.userOptionsImageBg} source={require("../../../assets/cards/optionsbg.png")}>
                                <TouchableOpacity   >
                                    <Image  source={require("../../../assets/icons/enquiry.png")}/>
                                </TouchableOpacity>
                            </ImageBackground>
                            <Text>Products {"\n"} Offered </Text>
                        </View>
                        <View>
                            <ImageBackground style={styles.userOptionsImageBg} source={require("../../../assets/cards/optionsbg.png")}>
                                <TouchableOpacity>
                                    <Image source={require("../../../assets/icons/helpsupport.png")}/>
                                </TouchableOpacity>
                            </ImageBackground>
                            <Text>Help & {"\n"}Support</Text>
                        </View>
                    </View> 

                    <View style={styles.userOptionsRow}>
                        <View>
                            <ImageBackground style={styles.userOptionsImageBg} source={require("../../../assets/cards/optionsbg.png")}>
                                <TouchableOpacity>
                                    <Image source={require("../../../assets/icons/news.png")}/>
                                </TouchableOpacity>
                            </ImageBackground>
                            <Text>News & {"\n"} Price</Text>
                        </View>
                        <View>
                            <ImageBackground style={styles.userOptionsImageBg} source={require("../../../assets/cards/optionsbg.png")}>
                                <TouchableOpacity>
                                    <Image source={require("../../../assets/icons/map.png")}/>
                                </TouchableOpacity>
                            </ImageBackground>
                            <Text>Track {"\n"} Your Order</Text>
                        </View>
                        <View>
                            <ImageBackground style={styles.userOptionsImageBg} source={require("../../../assets/cards/optionsbg.png")}>
                                <TouchableOpacity>
                                    <Image source={require("../../../assets/icons/orderhistory.png")}/>
                                </TouchableOpacity>
                            </ImageBackground>
                            <Text>Order {"\n"} History</Text>
                        </View>
                    </View> 

                </View>
            </View>
        </SafeAreaView>
    )
}

export default SellerDashboardScreen

const styles = StyleSheet.create({
    background : {
        flex: 1       
    },
    topView : {
        flex : 2,
        padding: 20,
        backgroundColor : "#E0D9FF"
    },
    bottomView : {
        flex : 3,
        backgroundColor : "#FFFFFF"
    },
    userName : {
        color:"#242424",
        fontSize: 16,
        fontFamily:"Poppins-Medium",
        alignItems:"center"
    },
    appName : {
        color:"#FFFFFF",
        alignContent:"center",
        backgroundColor: "#0D82D4"
    },
    userPic : {
        alignItems:"center",
        height: 100,
        width: 100
    },
    userOptionsRow: {
        flexDirection : "row",  
        justifyContent:"space-around", 
        minHeight:100
    },
    userOptionsImageBg:{
        flex:1, 
        alignItems:"center"
    }
})
