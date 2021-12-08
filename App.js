/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './app/screens/LoginScreen';
import SignupScreen from './app/screens/SignupScreen';
import BuyerDetailsScreen from './app/screens/buyer/register/BuyerDetailsScreen';
import SellerDetailsScreen from './app/screens/seller/register/SellerDetailsScreen';
import BuyerMoreDetailsScreen from './app/screens/buyer/register/BuyerMoreDetailsScreen';
import BuyerRegisterScreen from './app/screens/buyer/register/BuyerRegisterScreen';
import SellerRegisterScreen from './app/screens/seller/register/SellerRegisterScreem';
import BuyerDashboardScreen from './app/screens/buyer/dashboard/BuyerDashboardScreen';
import SellerDashboardScreen from './app/screens/seller/dashboard/SellerDashboardScreen';
import BuyerEnquiryScreen from './app/screens/buyer/dashboard/BuyerEnquiryScreen';
import SellerViewOrdersScreen from './app/screens/seller/dashboard/SellerViewOrdersScreen';
import BuyerPurchaseOptionScreen from './app/screens/buyer/dashboard/BuyerPurchaseOptionScreen';
import SellerProductsOfferedScreen from './app/screens/seller/dashboard/SellerProductsOfferedScreen';
import BuyerHelpSupportScreen from './app/screens/buyer/dashboard/BuyerHelpSupportScreen';
import SellerHelpSupportScreen from './app/screens/seller/dashboard/SellerHelpSupportScreen';
import BuyerNewsPriceScreen from './app/screens/buyer/dashboard/BuyerNewsPriceScreen';
import SellerTrackOrderScreen from './app/screens/seller/dashboard/SellerTrackOrderScreen';
import BuyerOrderHistoryScreen from './app/screens/buyer/dashboard/BuyerOrderHistoryScreen';
import SellerNewsPriceScreen from './app/screens/seller/dashboard/SellerNewsPriceScreen';
import BuyerTrackOrderScreen from './app/screens/buyer/dashboard/BuyerTrackOrderScreen';
import SellerOrderHistoryScreen from './app/screens/seller/dashboard/SellerOrderHistoryScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingScreen from './app/screens/OnboardingScreen';
import Home from './app/screens/Home';
import {Provider} from 'react-redux';
import { store } from './app/config/store';

const Stack = createNativeStackNavigator();


const App = () => {

  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);

  React.useEffect(async () => {
    const appData = await AsyncStorage.getItem('isAppFirstLaunched');
    if (appData == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem('isAppFirstLaunched', 'false');
    } else {
      setIsAppFirstLaunched(false);
    }

    // AsyncStorage.removeItem('isAppFirstLaunched');
  }, []);



  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>      
        {isAppFirstLaunched && (
            <Stack.Screen
              name="OnboardingScreen"
              component={OnboardingScreen}
              options={{headerShown: false}}
            />
          )}
        <Stack.Screen
          name="Home"
          component={LoginScreen}
          options={{headerShown: false}}
          />
        <Stack.Screen 
          name="Signup" 
          component={SignupScreen}
          options={{headerShown: false}}
         />
         <Stack.Screen 
          name="BuyerDetails" 
          component={BuyerDetailsScreen}
          options={{headerShown: false}}
         />
         <Stack.Screen 
          name="BuyerMoreDetails" 
          component={BuyerMoreDetailsScreen}
          options={{headerShown: false}}
         />
         <Stack.Screen 
          name="BuyerRegister" 
          component={BuyerRegisterScreen}
          options={{headerShown: false}}
         />
         <Stack.Screen 
          name="SellerDetails" 
          component={SellerDetailsScreen}
          options={{headerShown: false}}
         />
         <Stack.Screen 
          name="SellerRegister" 
          component={SellerRegisterScreen}
          options={{headerShown: false}}
         />
         <Stack.Screen
          name="BuyerDashboard"
          component={BuyerDashboardScreen}
          options={{headerStyle:{backgroundColor:"#0D82D4"}}}
          />
          <Stack.Screen
          name="SellerDashboard"
          component={SellerDashboardScreen}
          options={{headerStyle:{backgroundColor:"#0D82D4"}}}
          />
         <Stack.Screen
          name="BuyerPurchaseOption"
          component={BuyerPurchaseOptionScreen}
          options={{headerStyle:{backgroundColor:"#0D82D4"}}}
          />
          <Stack.Screen
          name="SellerViewOrders"
          component={SellerViewOrdersScreen}
          options={{headerStyle:{backgroundColor:"#0D82D4"}}}
          />
         <Stack.Screen
          name="BuyerEnquiry"
          component={BuyerEnquiryScreen}
          options={{headerStyle:{backgroundColor:"#0D82D4"}}}
          />
          <Stack.Screen
          name="SellerProductsOffered"
          component={SellerProductsOfferedScreen}
          options={{headerStyle:{backgroundColor:"#0D82D4"}}}
          />
         <Stack.Screen
          name="BuyerHelpSupport"
          component={BuyerHelpSupportScreen}
          options={{headerStyle:{backgroundColor:"#0D82D4"}}}
          />
          <Stack.Screen
          name="SellerHelpSupport"
          component={SellerHelpSupportScreen}
          options={{headerStyle:{backgroundColor:"#0D82D4"}}}
          />
         <Stack.Screen
          name="BuyerNewsPrice"
          component={BuyerNewsPriceScreen}
          options={{headerStyle:{backgroundColor:"#0D82D4"}}}
          />
          <Stack.Screen
          name="SellerNewsPrice"
          component={SellerNewsPriceScreen}
          options={{headerStyle:{backgroundColor:"#0D82D4"}}}
          />
         <Stack.Screen
          name="BuyerTrackOrder"
          component={BuyerTrackOrderScreen}
          options={{headerStyle:{backgroundColor:"#0D82D4"}}}
          />
          <Stack.Screen
          name="SellerTrackOrder"
          component={SellerTrackOrderScreen}
          options={{headerStyle:{backgroundColor:"#0D82D4"}}}
          />
         <Stack.Screen
          name="BuyerOrderHistory"
          component={BuyerOrderHistoryScreen}
          options={{headerStyle:{backgroundColor:"#0D82D4"}}}
          />
          <Stack.Screen
          name="SellerOrderHistory"
          component={SellerOrderHistoryScreen}
          options={{headerStyle:{backgroundColor:"#0D82D4"}}}
          />
          
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};



export default App;
