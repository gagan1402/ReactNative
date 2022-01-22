import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    Button
} from 'react-native';

const EnterScreen = props => {
    return (
        <SafeAreaView >
        <View style={styles.buttonStyle}>
        <Button
          color="orange"
          title="Approved Foods List"
            onPress={() => props.navigation.navigate('ApprovedList')}
        />
        </View>
       
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    buttonStyle:{
      marginTop:30,
      marginLeft:50,
      marginRight:50,
      borderWidth:2,
      borderRadius:20,
      borderColor:"orange",
      overflow:"hidden",
      marginBottom:10,
  },
  });

export default EnterScreen;


