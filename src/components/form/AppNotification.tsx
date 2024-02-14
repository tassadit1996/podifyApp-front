import colors from '@utils/colors';
import {FC, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useDispatch, useSelector} from 'react-redux';
import {
  getNotificationState,
  updateNotification,
} from 'src/store/notification';

interface Props {}

const AppNotification: FC<Props> = props => {
  const {message, type} = useSelector(getNotificationState);
  const height = useSharedValue(0);

  const dispatch = useDispatch();

  const heightStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  });

  let backgroundColor = colors.ERROR;
  let textColor = colors.CONTRAST;

  switch (type) {
    case 'success':
      backgroundColor = colors.SUCCESS;
      textColor = colors.PRIMARY;
      break;
  }

  useEffect(() => {
    // Usa uma asserção de tipo para tratar o retorno de setTimeout como number.
    let timeoutId: number;
  
    const performAnimation = () => {
      height.value = withTiming(45, {
        duration: 150,
      });
  
      timeoutId = setTimeout(() => {
        height.value = withTiming(0, {
          duration: 150,
        });
  
        dispatch(updateNotification({ message: '', type}));
      }, 3000) as unknown as number; // Assegura que o retorno de setTimeout seja tratado como number.
    };
  
    if(message) performAnimation();
  
    return () => {
      clearTimeout(timeoutId);
    };
  }, [message]);
  
  return (
    <Animated.View style={[styles.container, {backgroundColor}, heightStyle]}>
      <Text style={[styles.message, {color: textColor}]}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 18,
    alignItems: 'center',
  },
});

export default AppNotification;
