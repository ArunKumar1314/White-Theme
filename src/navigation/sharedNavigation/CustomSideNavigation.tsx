import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {MENU_ITEMS} from './Menu';
import CustomMenuItem from './CustomMenuItem';
import {useTranslation} from 'react-i18next';
import {Colors} from '../../assets/colors/colors';

interface CustomSideNavigationProps {
  navigation: any;
}

const menuItems = MENU_ITEMS;

const CustomSideNavigation: React.FC<CustomSideNavigationProps> = ({
  navigation,
}) => {
  const {height, width} = useWindowDimensions();
  const {t} = useTranslation();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const handleToggleExpand = (itemName: string) => {
    if (expandedItem === itemName) {
      setExpandedItem(null);
    } else {
      setExpandedItem(itemName);
    }
  };
  return (
    <View style={styles.drawerColor}>
      {/* Static header and background */}

      <View style={styles.headerContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/2.png')}
            style={styles.headerImage}
          />
        </View>
        <Text style={styles.headerText}>{t('Anna Darpan')}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <CustomMenuItem
            key={index}
            item={item}
            navigation={navigation}
            expandedItem={expandedItem}
            setExpandedItem={handleToggleExpand}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default CustomSideNavigation;

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0.3,
    resizeMode: 'cover',
    zIndex: -1,
  },
  drawerColor: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  scrollContainer: {
    paddingTop: 0,
  },
  menuContainer: {
    marginTop: 20,
    marginBottom: 50,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#003831',
  },
  headerImage: {
    width: 100,
    height: 100,
    borderRadius: 25,
  },
  headerText: {
    fontFamily: 'Lato-Regular',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    color: '#e6eceb',
    textShadowColor: 'black',
    textShadowRadius: 1.5,
    textShadowOffset: {width: 0.5, height: 0.5},
    marginLeft: 20,
    flexShrink: 1,
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.7,
    shadowRadius: 1,
  },
});

