import * as React from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, ScrollView, Dimensions, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

function Feed() {
  return (
    <View style={{paddingTop: 40}}>
    <KeyboardAvoidingView enabled behavior={Platform.OS ==='ios'?'padding' : null} style={{width: Dimensions.get('window').width, paddingHorizontal:20}}>

          <Text style={{fontWeight:'bold'}}>Email</Text>
          <TextInput keyboardType='email-address' placeholder='a@b.com' style={{borderWidth: 1, borderColor: 'black', borderRadius:10, height:40, fontSize:20, paddingLeft: 10, marginBottom:20}} />
          <Text style={{fontWeight:'bold'}}>Password</Text>
          <TextInput placeholder='*********' style={{borderWidth: 1, borderColor: 'black', borderRadius:10, height:40, fontSize:20, paddingLeft: 10, marginBottom: 20}} />

          <TouchableOpacity style = {{borderWidth:1, borderRadius:10,justifyContent:'center', alignItems:'center', backgroundColor:'rgba(27,27,51,0.4)', height:50,  }}>
            <Text style={{color:'#fff', fontSize:25 }}>Login</Text>
          </TouchableOpacity>

          <View style={{alignItems:'center', justifyContent:'center', marginTop:10}}>
              <Text style={{fontWeight:'bold'}}>OR</Text>
          </View>
          
          <Text style={{fontWeight:'bold' }}>Mobile</Text>
          <TextInput keyboardType='number-pad' placeholder='9876543210' style={{borderWidth: 1, borderColor: 'black', borderRadius:10, height:40, fontSize:20, paddingLeft: 10, marginBottom:20}} />
          
          <TouchableOpacity style = {{borderWidth:1, borderRadius:10,justifyContent:'center', alignItems:'center', backgroundColor:'rgba(27,27,51,0.4)', height:50,  }}>
            <Text style={{color:'#fff', fontSize:25 }}>Request OTP</Text>
          </TouchableOpacity>

        
        </KeyboardAvoidingView>
        </View>
  );
}

function Profile() {
  return (
    <View style={{paddingTop: 40}}>
    <KeyboardAvoidingView enabled behavior={Platform.OS ==='ios'?'padding' : null}  style={{width: Dimensions.get('window').width,paddingHorizontal:20}}>

            <Text style={{fontWeight:'bold'}}>Full Name</Text>
            <TextInput placeholder='Jethalal Gadha' style={{borderWidth: 1, borderColor: 'black', borderRadius:10, height:40, fontSize:20, paddingLeft: 10, marginBottom:20}} />
            <Text style={{fontWeight:'bold'}}>Email</Text>
            <TextInput placeholder='a@b.com' style={{borderWidth: 1, borderColor: 'black', borderRadius:10, height:40, fontSize:20, paddingLeft: 10, marginBottom:20}} />
            <Text style={{fontWeight:'bold' }}>Mobile</Text>
            <TextInput keyboardType='number-pad' placeholder='9876543210' style={{borderWidth: 1, borderColor: 'black', borderRadius:10, height:40, fontSize:20, paddingLeft: 10, marginBottom:20}} />
            <Text style={{fontWeight:'bold'}}>Password</Text>
            <TextInput placeholder='*********' style={{borderWidth: 1, borderColor: 'black', borderRadius:10, height:40, fontSize:20, paddingLeft: 10, marginBottom: 20}} />
            <Text style={{fontWeight:'bold'}}>Confirm Password</Text>
            <TextInput placeholder='*********' style={{borderWidth: 1, borderColor: 'black', borderRadius:10, height:40, fontSize:20, paddingLeft: 10, marginBottom: 20}} />

            <TouchableOpacity style = {{borderWidth:1, borderRadius:10,justifyContent:'center', alignItems:'center', backgroundColor:'rgba(27,27,51,0.4)', height:50,  }}>
              <Text style={{color:'#fff', fontSize:25 }}>Create Account</Text>
            </TouchableOpacity>

          </KeyboardAvoidingView>
          </View>
  );
}


const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (

    <Tab.Navigator
      initialRouteName="Feed"
      inactiveColor="black"
      activeColor="white"
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: 'royalblue' }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          tabBarColor: 'green',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'SignUp',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
          tabBarColor: 'violet',
        }}
      />
    </Tab.Navigator>
  );
}
