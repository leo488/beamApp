// import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import * as Fonts from 'expo'

// expo imports
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//files import
import Splash from "./components/Splash";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Signup from "./pages/Signup";
import Fund from "./pages/Fund";
import Loan from "./pages/Loan";
import Withdraw from "./pages/Withdraw";
import Transfer from "./pages/Transfer";
import Budget from "./pages/Budget";
import CreateBudget from "./pages/CreateBudget";
import CreateBudgetTwo from "./pages/CreateBudgetTwo";
import CreateBudgetThree from "./pages/CreateBudgetThree";
import Notification from "./pages/Notification";
import Tickets from "./pages/Tickets";
import Settings from "./pages/Settings";
import Verify from "./pages/Verify";
import Profile from "./pages/Profile";
import store from "./redux/store";
import { Provider } from "react-redux";

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Budget" component={Budget} />

          <Stack.Screen name="Home" component={Home} />

          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="Tickets" component={Tickets} />

          <Stack.Screen name="Verify" component={Verify} />

          <Stack.Screen name="CreateBudget" component={CreateBudget} />
          <Stack.Screen name="CreateBudgetTwo" component={CreateBudgetTwo} />
          <Stack.Screen
            name="CreateBudgetThree"
            component={CreateBudgetThree}
          />

          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Transfer" component={Transfer} />
          <Stack.Screen name="Loan" component={Loan} />
          <Stack.Screen name="Withdraw" component={Withdraw} />
          <Stack.Screen name="Fund" component={Fund} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
