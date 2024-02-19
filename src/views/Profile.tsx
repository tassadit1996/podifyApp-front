import {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import UploadsTab from '@components/profile/UploadsTab';
import PlaylistTab from '@components/profile/PlaylistTab';
import FavoriteTab from '@components/profile/FavoriteTab';
import HistoryTab from '@components/profile/HistoryTab';
import colors from '@utils/colors';
import { useFetchUploadsByProfile } from 'src/hooks/query';


const Tab = createMaterialTopTabNavigator()

interface Props {}

const Profile: FC<Props> = props => {
  const {data, isLoading} = useFetchUploadsByProfile()

  console.log(data)
  return <View style={styles.container}>
    <Tab.Navigator screenOptions={{
      tabBarStyle: styles.tabbarStyle,
      tabBarLabelStyle: styles.tabBaeLabelStyle
    }}>
      
      <Tab.Screen name='uploads' component={UploadsTab}/>
      <Tab.Screen name='Playlist' component={PlaylistTab}/>
      <Tab.Screen name='Favorite' component={FavoriteTab}/>
      <Tab.Screen name='History' component={HistoryTab}/>
    </Tab.Navigator>
  </View>;
 }
 
 const styles = StyleSheet.create({
   container: {
    flex: 1,
    padding: 10
   },
   tabbarStyle:{
    marginBottom: 20,
    backgroundColor: 'tranparent',
    elevation: 0,
    shadowRadius: 0,
    shadowColor: 'transparent',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0
   },

   tabBaeLabelStyle:{
    color: colors.CONTRAST,
    fontSize: 12
   }
}) 
  
export default Profile; 