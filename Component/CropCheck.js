import React from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {RNCamera} from 'react-native-camera';

const CropCheck = props => {
  let camera = null;
  const takePicture = async function() {
    if (camera) {
      const data = await camera.takePictureAsync();
      console.warn('takePicture ', data);
    }
  };
  return (
    <View style={{flex: 1, alignItems: 'center', paddingHorizontal: 50}}>
      <View
        style={{
          width: Dimensions.get('window').width,
          height: 53,
          backgroundColor: '#21C748',
          elevation: 6,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
          Crop Check
        </Text>
      </View>

      <View
        style={{
          width: '100%',
          height: '55%',
          borderWidth: 1,
          marginTop: 10,
          borderColor: '#21C748',
          borderRadius: 5,
          elevation: 6,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <RNCamera
          ref={ref => {
            camera = ref;
          }}
          style={{
            width: '100%',
            height: '50%',
          }}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}></RNCamera>
      </View>
      <TouchableOpacity
        onPress={takePicture}
        style={{
          width: '100%',
          height: 50,
          borderWidth: 1,
          borderColor: '#21C748',
          marginTop: 10,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={require('./assets/camera.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default CropCheck;
