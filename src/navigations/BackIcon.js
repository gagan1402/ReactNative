import React,{useEffect,useState} from 'react';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BackIcon = (props) => {
    const navigation = useNavigation();
 
    return (
        <TouchableOpacity  hitSlop={{top: 20, bottom: 50, left: 50, right: 50}} onPress={() =>{navigation.goBack()}}>
        <Icon
            type="font-awesome"
            name={"angle-left"}
            color="black"
            size={35}
            iconStyle={{paddingHorizontal:15,alignItems:'center'}}
        />
        </TouchableOpacity>
    );
};

export default BackIcon;