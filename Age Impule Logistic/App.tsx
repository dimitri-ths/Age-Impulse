import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import QRScanner from "./pages/QRScanner";
import Home from "./pages/Home";
import DetailsQR from "./pages/DetailsQR";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { User, onAuthStateChanged } from 'firebase/auth'
import { FIREBASE_AUTH } from './FirebaseConfig'
import Login from './pages/Login'
import Register from './pages/Register'
import ChooseRole from './pages/ChooseRole'
import AddObject from './pages/AddObject'
import AddShippingInfo from './pages/AddShippingInfo'
import DetailsShipping from './pages/DetailsShipping'

const NativeStack = createNativeStackNavigator();
const AppStack = createBottomTabNavigator();
const AuthStack = createNativeStackNavigator();
const LivreurStack = createNativeStackNavigator();
const ProdStack = createNativeStackNavigator();
const ProSanteStack = createNativeStackNavigator();
const auth = FIREBASE_AUTH;

function General() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Home"
        component={Home}
        options={{
          title: auth.currentUser?.displayName,
          headerStyle: {
            backgroundColor: '#001f96'
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color={"#001f96"} size={40} />
          ),
          tabBarInactiveTintColor: "#001f96",
          tabBarActiveTintColor: "#001f96",
        }}
      />
      <AppStack.Screen
        name="QRScanner"
        component={QRScanner}
        options={{
          headerStyle: {
            backgroundColor: '#001f96'
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="qrcode" color={"#001f96"} size={38} />
          ),
          tabBarInactiveTintColor: "#001f96",
          tabBarActiveTintColor: "#001f96",
        }}
      />
    </AppStack.Navigator>
  )
}

export default function App() {
  const [user, setUser] = useState<User | null>(null)
  const [role, setRole] = useState(null)
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user)
      setUser(user)
      setRole(user?.displayName)
    })
  }, [])

  return (
    <NavigationContainer>
      {user ? (
        <NativeStack.Navigator>
          {role === 'livreur' ? (
            <>
              <NativeStack.Screen
                name="General"
                component={General}
                options={{
                  headerShown: false
                }}
              />
              <NativeStack.Screen
                name="AddShippingInfo"
                component={AddShippingInfo}
                options={{
                  headerStyle: {
                    backgroundColor: '#001f96'
                  },
                  headerTintColor: '#fff',
                  headerTitleAlign: 'center'
                }}
              />
            </>
          ) : role === 'production' ? (
            <>
              <NativeStack.Screen
                name="General"
                component={General}
                options={{
                  headerShown: false
                }}
              />
              <NativeStack.Screen
                name="AddObject"
                component={AddObject}
                options={{
                  headerStyle: {
                    backgroundColor: '#001f96'
                  },
                  headerTintColor: '#fff',
                  headerTitleAlign: 'center'
                }}
              />
            </>
          ) : (
            <>
              <NativeStack.Screen
                name="General"
                component={General}
                options={{
                  headerShown: false
                }}
              />
              <NativeStack.Screen
                name="DetailsQR"
                component={DetailsQR}
                options={{
                  headerStyle: {
                    backgroundColor: '#001f96'
                  },
                  headerTintColor: '#fff',
                  headerTitleAlign: 'center'
                }}
              />
              <NativeStack.Screen
                name="DetailsShipping"
                component={DetailsShipping}
                options={{
                  headerStyle: {
                    backgroundColor: '#001f96'
                  },
                  headerTintColor: '#fff',
                  headerTitleAlign: 'center'
                }}
              />
            </>
          )}
        </NativeStack.Navigator>
      ) : (
        <AuthStack.Navigator>
          <AuthStack.Screen
            name=" "
            component={Login}
            options={{
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor: '#001f96'
              }
            }}
          />
          <AuthStack.Screen
            name="ChooseRole"
            component={ChooseRole}
            options={{
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor: '#001f96'
              }
            }}
          />
          <AuthStack.Screen
            name="Register"
            component={Register}
            options={{
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor: '#001f96'
              }
            }}
          />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  }
})
