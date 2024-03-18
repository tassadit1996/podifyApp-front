import colors from '@utils/colors';
import {FC} from 'react';
import {View, StyleSheet, Image, Pressable, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface Props {
  title: string;
  poster: string;
  onPress?(): void;
}

const RecentlyPlayedCard: FC<Props> = ({title, poster, onPress}) => {
  const source = poster ? {uri: poster} : require('../assets/music.png');
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={source} style={styles.poster} />
      <View style={styles.titleContainer}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {title}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.OVERLAY,
    width: '100%',
    borderRadius: 5,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  poster: {
    width: 50,
    height: 50,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    color: colors.CONTRAST,
    fontWeight: '500',
    paddingHorizontal: 5,
  },
});

export default RecentlyPlayedCard;
