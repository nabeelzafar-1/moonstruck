import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Platform,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';

import {
  Form,
  FormZip,
  FormGender,
  FormAgeSlider,
  FormRangeSlider,
  FormCheckbox,
  SubmitButton,
} from '../Components/Forms';
import AgeSlider from '../Components/Common/AgeSlider';
import Screen from '../Components/Common/Screen';
import Colors from '../Constants/Colors';
import Images from '../Constants/Images';
import Routes from '../Navigation/routes';

const {width, height} = Dimensions.get('screen');

function SettingsScreen(props) {
  const handleFormSubmit = (value) => {
    console.log('values', value);

    props.navigation.navigate(Routes.UPLOAD_PIC);
  };

  return (
    <Screen>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior="padding"
        enabled={Platform.OS === 'ios'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}>
        <View style={styles.container}>
          <ImageBackground
            style={styles.bgImage}
            resizeMode="cover"
            source={Images.BluredBackground}>
            <ScrollView style={{height: '100%'}}>
              <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                  <Image style={styles.backIcon} source={Images.BackArrow} />
                </TouchableOpacity>
                <Image
                  style={styles.logo}
                  source={Images.Logo}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.titleContainer}>
                <Text style={styles.titleText}>SETTINGS</Text>
                <Image
                  style={styles.settingIcon}
                  resizeMode="center"
                  source={Images.SettingIcon}
                />
              </View>
              <View style={styles.subtitleContainer}>
                <Text style={styles.subtitleText}>
                  (PLEASE CHECK {'\n'}THE APPROPRIATE OPTIONS)
                </Text>
              </View>
              <View style={styles.human}>
                <View style={styles.manContainer}>
                  <Text style={styles.manText}>I AM A </Text>
                  <Text style={styles.manColor}>MAN</Text>
                </View>
                <View style={styles.womanContainer}>
                  <Text style={styles.womanText}>I AM A </Text>
                  <Text style={styles.womanColor}>WOMAN</Text>
                </View>
              </View>
              <Form
                initialValues={{
                  isman: false,
                  iswoman: false,
                  zipcode: '',
                  age: [18, 70],
                  range: 500,
                  worldwide: false,
                  lookman: false,
                  lookwoman: false,
                }}
                onSubmit={handleFormSubmit}>
                <View style={styles.iconContainer}>
                  <FormGender name="isman" />
                  <FormGender name="iswoman" />
                </View>
                <View style={styles.zipcodeContainer}>
                  <Text style={styles.zipcode}>
                    DESIRED{'\n'}ZIP CODE PLEASE:
                  </Text>
                  <FormZip name="zipcode" keyboardType="numeric" />
                </View>
                <View style={styles.rangeContainer}>
                  <FormAgeSlider name="age" />
                  <FormRangeSlider name="range" />
                  <View style={styles.worldwideContainer}>
                    <FormCheckbox name="worldwide" />
                    <Text style={styles.worldwide}>SEARCH WORLDWIDE</Text>
                  </View>
                </View>
                <View style={styles.lookingContainer}>
                  <View style={styles.manLook}>
                    <Text style={styles.manText}>LOOKING FOR A </Text>
                    <Text style={styles.manColor}>MAN</Text>
                    <View style={{left: 45}}>
                      <FormCheckbox name="lookman" />
                    </View>
                  </View>
                  <View style={styles.womanLook}>
                    <Text style={styles.womanText}>LOOKING FOR A </Text>
                    <Text style={styles.womanColor}>WOMAN</Text>
                    <View style={{left: 10, bottom: 20}}>
                      <FormCheckbox name="lookwoman" />
                    </View>
                  </View>
                </View>
                <View style={styles.button}>
                  <SubmitButton title="next" />
                </View>
              </Form>
            </ScrollView>
          </ImageBackground>
        </View>
      </KeyboardAvoidingView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
  },
  headerContainer: {
    height: 85,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    marginRight: 40,
    height: 35,
    width: 35,
  },
  logo: {
    width: width * 0.6,
    height: height * 0.09,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingIcon: {
    marginLeft: 30,
    width: 35,
    height: 35,
  },

  titleText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: Colors.text,
  },
  subtitleContainer: {
    alignItems: 'center',
  },
  subtitleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.light,
  },
  human: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  manContainer: {
    flexDirection: 'row',
  },
  womanContainer: {
    flexDirection: 'row',
  },
  manText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.white,
  },
  manColor: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.man,
  },
  womanText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.white,
  },
  womanColor: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.secondary,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  zipcodeContainer: {
    marginVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  zipcode: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  rangeContainer: {
    marginVertical: 5,
  },
  worldwideContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  worldwide: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.white,
  },
  lookingContainer: {
    height: 130,
    width: '90%',
    marginLeft: 20,
    bottom: 15,
  },
  manLook: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  womanLook: {
    flexDirection: 'row',
  },
  button: {
    bottom: 22,
  },
});

export default SettingsScreen;
