import GridView from '@ui/GridView';
import PulseAnimationContainer from '@ui/PulseAnimationContainer';
import RecentlyPlayedCard from '@ui/RecentlyPlayedCard';
import colors from '@utils/colors';
import {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {useFetchRecentlyPlayed} from 'src/hooks/query';
import useAudioController from 'src/hooks/useAudioController';
import {getPlayerState} from 'src/store/player';

interface Props {}

const RecentlyPlayed: FC<Props> = props => {
  const {data = [], isLoading} = useFetchRecentlyPlayed();
  const {onAudioPress} = useAudioController();
  const {onGoingAudio} = useSelector(getPlayerState);
  const source = require('../assets/music.png');

  if (isLoading) {
    return (
      <PulseAnimationContainer>
        <View style={styles.dummyTitleView} />
        <GridView
          data={new Array(4).fill('')}
          renderItem={() => (
            <View
              style={{
                height: 50,
                backgroundColor: colors.INACTIVE_CONTRAST,
                borderRadius: 5,
                marginBottom: 10,
              }}
            />
          )}
        />
      </PulseAnimationContainer>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recently played</Text>
      <GridView
        data={data}
        renderItem={item => (
          <View key={item.id} style={styles.listStyle}>
            <RecentlyPlayedCard
              title={item.title}
              poster={item.poster ?? source}
              onPress={() => onAudioPress(item, data)}
              isPlaying={onGoingAudio?.id === item.id}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  dummyTitleView: {
    height: 20,
    width: 150,
    backgroundColor: colors.INACTIVE_CONTRAST,
    marginBottom: 15,
    borderRadius: 5,
  },
  title: {
    color: colors.CONTRAST,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  listStyle: {
    marginBottom: 10,
  },
});

export default RecentlyPlayed;
