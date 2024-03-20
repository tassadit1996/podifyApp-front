import AppView from '@components/AppView';
import PublicPlaylistTab from '@components/profile/PublicPlaylistTab';


import PublicProfileContainer from '@components/profile/PublicProfileContainer';
import PublicUploadsTab from '@components/profile/PublicUploadsTab';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import colors from '@utils/colors';
import {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {HomeNavigatorStackParamList} from 'src/@types/navigation';
import {useFetchPublicProfile} from 'src/hooks/query';

type Props = NativeStackScreenProps<
  HomeNavigatorStackParamList,
  'PublicProfile'
>;

const Tab = createMaterialTopTabNavigator();

const PublicProfile: FC<Props> = ({route}) => {
  const {profileId} = route.params;
  const {data} = useFetchPublicProfile(profileId);

  return (
    <AppView>
      <View style={styles.container}>
        <PublicProfileContainer profile={data} />
        <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabbarStyle,
          tabBarLabelStyle: styles.tabBaeLabelStyle,
        }}>
        <Tab.Screen name="PublicUploads" component={PublicUploadsTab} options={{tabBarLabel: "Uploads"}}/>

        <Tab.Screen name="PublicPlaylist" component={PublicPlaylistTab} options={{tabBarLabel: "Playlist"}}/>
      </Tab.Navigator>
      </View>
    </AppView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1
  },
  tabbarStyle: {
    marginBottom: 20,
    backgroundColor: 'tranparent',
    elevation: 0,
    shadowRadius: 0,
    shadowColor: 'transparent',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0,
  },

  tabBaeLabelStyle: {
    color: colors.CONTRAST,
    fontSize: 12,
  },
});

export default PublicProfile;
