import { StatusBar } from "expo-status-bar";
import Onboarding from "./screens/Onboarding";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MyTabs from "./screens/NavBar";

// made a function for NavBar instead of creating it directly in App()
// function NavBar() {
//   return (
//     <NavigationContainer>
//       <MyTabs />
//     </NavigationContainer>
//   );
// }

const Stack = createStackNavigator();

// used a nested navigator to show onboarding screen whenever app opens
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Onboarding"
        >
          <Stack.Screen name="Onboarding" component={Onboarding} />
          {/* <AppStack.Screen name="NavBar" component={NavBar} /> */}
          <Stack.Screen name="NavBar" component={MyTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
