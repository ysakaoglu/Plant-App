import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'


export default function Introduction() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.allPage} edges={['top']}>
      <View style={styles.headerArea}>
        <Text>Bitki yetiştiriciliğindeki yardımcınız</Text>
      </View>
      <View style={styles.bodyArea}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("LoginRegister")}>
          <Text>Devam et</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  allPage: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: 'rgb(222, 256, 222)'
  },
  headerArea: {
    height: '30%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: '#00ff003f',
  },
  bodyArea: {
    height: '70%',
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: '40%',
    height: '8%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00dd0040',
    borderRadius: 20
  }
})