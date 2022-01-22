import React from 'react';
import { StyleSheet, I18nManager } from 'react-native';
import { Input, TextInput } from 'react-native-elements';
import PropTypes from 'prop-types';

const InputComponent = props => {
  const {
    placeholder,
    name,
    error,
    radius,
    bgColor,
    borderColor,
    textarea,
    width,
    inputColor,
    showError,
    weight,
    showBottom,
    height,
    padding,
    paddingTop,
    textAlign,
    autoFocus,
    label
  } = props;

 
  const { inputStyle1, } = style;

    return (
      <Input
        placeholder={placeholder || null}
        inputStyle={[inputStyle1, { fontWeight: weight, color: inputColor, height:0,padding:0 }]}
        label={label ? label : null}
        labelStyle={{ paddingLeft: "5%", paddingBottom: '2%', alignSelf:'flex-start' }}
         autoFocus={autoFocus}
         textAlign={I18nManager.isRTL?"right": 'left'}
        padding={padding}
        paddingTop={paddingTop}
        height={height}
        inputContainerStyle={{
          width: '95%',
          alignSelf: 'center',
          borderRadius: radius,
          backgroundColor: bgColor,
          borderBottomColor: bgColor,
          borderColor: 'grey',
          textAlign:'center'
        }}
        placeholderTextColor="grey"
        errorMessage={error}
        errorStyle={{
          color: '#aaa',
          paddingHorizontal: 15,
          fontSize: 14,
        }}
        {...props}
      />
    );
  
};

InputComponent.propTypes = {
  bgColor: PropTypes.string,
  borderColor: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  textarea: PropTypes.string,
  height: PropTypes.number,
  placeholderColor: PropTypes.string,
  radius: PropTypes.number,
  padding: PropTypes.number,
  paddingTop: PropTypes.number,
  iconColor: PropTypes.string,
  width: PropTypes.string,
  weight: PropTypes.string,
  showBottom: PropTypes.string,
  inputColor: PropTypes.string,
  showError: PropTypes.bool,
};

InputComponent.defaultProps = {
  radius: 0,
  autoFocus:false,
  placeholderColor: 'black',
  iconColor: 'black',
  width: '90%',
 
};

const style = StyleSheet.create({
  inputStyle1: {
    fontSize: 14,
  },
  inputStyle2: {
    fontSize: 14,
    fontWeight: '100',
  },
});

export default InputComponent;