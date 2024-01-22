import colors from '@utils/colors';
import {FC} from 'react';
import {View, StyleSheet, Modal, Pressable, Text, ScrollView} from 'react-native';

import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons'


interface Props {
  visible?: boolean;
  title?: string;
}

const CategorySelector: FC<Props> = ({title, visible = false}) => {
  return (
    <Modal visible={visible} transparent>
      <Pressable style={styles.backdrop} />
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <Text style={styles.title}>{title}</Text>
          <ScrollView>
            <Pressable style={styles.selectorContainer}>
                <MaterialComIcon name='radiobox-marked' color={colors.SECONDARY}/>
                <Text style={{padding: 10}}>Business</Text>
            </Pressable>
            
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.INACTIVE_CONTRAST,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  modal: {
    width: '90%',
    maxHeight: '50%',
    borderRadius: 10,
    padding: 10,
    backgroundColor: colors.CONTRAST,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.PRIMARY,
    paddingVertical: 10,
  },
  selectorContainer:{
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default CategorySelector;
