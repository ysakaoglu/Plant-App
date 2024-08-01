import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function LoginorRegister() {
  return (
    <SafeAreaView style={styles.allPage}>
      <View style={styles.headerArea}>
        <Text>LoginorRegister</Text>
      </View>
      <View style={styles.bodyArea}>
        <Text style={{fontWeight: 'bold', fontSize: 20, top: 30, position: 'absolute'}}>Kayıt olun veya Giriş yapın</Text>
        <TouchableOpacity style={styles.loginButton}>
          <Text>Apple ile kayıt ol</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.loginButton, {backgroundColor: '#dd555590'}]}>
          <Text>Google ile kayıt ol</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
          <Text>Mail ile kayıt ol</Text>
        </TouchableOpacity >
        <Text style={{marginVertical: 10}}>veya</Text>
        <TouchableOpacity style={{marginVertical: 10, }}>
          <Text style={{textDecorationLine: 'underline'}}>Giriş yapmadan devam et</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footerArea}>
        <View style={{width: '80%'}}>
          <Text style={{alignSelf: 'center' }}>Kayıt olarak gizlilik politikalarımızı ve şartlarımızı kabul etmiş olursunuz.</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    allPage: {
      flex: 1,
      backgroundColor: '#aaffaa'
    },
    headerArea: {
      width: '100%',
      height: '10%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#aafbbb'
    },
    bodyArea: {
      width: '100%',
      height: '70%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    loginButton: {
      borderWidth: 1,
      width: '70%',
      justifyContent: 'center',
      alignItems: 'center',
      height: '10%',
      marginVertical: 10
    },
    footerArea: {
      width: '100%',
      height: '20%',
      justifyContent: 'center',
      alignItems: 'center'
    }

})