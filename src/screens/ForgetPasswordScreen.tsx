import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTranslation} from 'react-i18next';
import GenericInputField from '../shared/component/GenericInputField';
import GenericButton from '../shared/component/GenericButton';

export default function ForgetPassword() {
  const navigation = useNavigation();

  const {t} = useTranslation();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContentContainer}
        keyboardShouldPersistTaps="handled">
        <View style={styles.menuContainer}>
          <TouchableOpacity
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
            onPress={() => {
              navigation.navigate('Login Page');
            }}>
            <Ionicons
              name="arrow-back-circle-sharp"
              color="#006a36"
              size={40}
            />
          </TouchableOpacity>
        </View>
        {/* <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/1.jpg')}
          style={styles.imageStyles}
        />
        <LinearGradient
          colors={['transparent', '#003831']}
          style={styles.gradientOverlay}
        />
      </View> */}
        <View style={styles.logoCenterStyles}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/2.png')}
              style={styles.logoStyles}
            />
          </View>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyles}>{t('Forgot Password')}</Text>
        </View>
        <View style={styles.fieldsContainer}>
          <GenericInputField
            label={'Username'}
            placeholder={'Username'}
            containerStyles={{width: '85%'}}
          />
          <View
            style={{
              flexDirection: 'row',
              width: '85%',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 10,
            }}>
            <GenericInputField
              label={'OTP'}
              placeholder={'Enter OTP'}
              containerStyles={{flex: 6, marginRight: 10}}
            />
            <GenericButton
              title={'OTP'}
              onPress={() => {}}
              containerStyles={{
                flex: 4,
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          </View>

          <GenericButton
            title={'Confirm'}
            onPress={() => {
              navigation.navigate('Login Page');
            }}
            containerStyles={{width: '40%', height: '100%'}}
          />
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 15,
            }}>
            <TouchableOpacity
              hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
              onPress={() => navigation.navigate('Contact Us')}>
              <Text style={styles.contactText}>
                {t('Contact Us & Support')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#003831',
  },
  scrollContentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 400,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyles: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.7,
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30%',
  },
  logoContainer: {
    width: 200,
    height: 200,
    // backgroundColor: 'white',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    // elevation: 30,
    // shadowColor: 'green',
    // shadowOffset: {width: 1, height: 1},
    // shadowOpacity: 1,
    // shadowRadius: 1,
    // marginTop: -80,
  },
  menuContainer: {
    position: 'absolute',
    top: 35,
    left: 20,
    zIndex: 20,
  },
  logoStyles: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
  logoCenterStyles: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: -50,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  titleStyles: {
    fontFamily: 'Roboto',
    fontSize: 26,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#006a36',
  },
  fieldsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  contactText: {
    color: '#006a36',
    marginTop: 10,
  },
});