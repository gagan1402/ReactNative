import React from 'react';
import PropTypes from 'prop-types';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const Loader = props => {
  const {size, color} = props;
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

Loader.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

Loader.defaultProps = {
  size: 'large',
  color: '#f9c00f',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default Loader;
