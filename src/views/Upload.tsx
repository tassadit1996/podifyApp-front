import CategorySelector from '@components/CategorySelector';
import FileSelector from '@components/FileSelector';
import AppButton from '@ui/AppButton';
import colors from '@utils/colors';
import {FC} from 'react';
import {View, StyleSheet, Text, Pressable, TextInput, ScrollView} from 'react-native';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
interface Props {}

const Upload: FC<Props> = props => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.fileSelectorContainer}>
        <FileSelector
          icon={
            <MaterialComIcon
              name="image-outline"
              size={35}
              color={colors.SECONDARY}
            />
          }
          btnTitle="Select Poster"
        />
        <FileSelector
          icon={
            <MaterialComIcon
              name="file-music-outline"
              size={35}
              color={colors.SECONDARY}
            />
          }
          btnTitle="Select Audio"
          style={{marginLeft: 20}}
        />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          placeholderTextColor={colors.CONTRAST}
          placeholder="Title"
          style={styles.input}
        />
        <TextInput
          placeholderTextColor={colors.CONTRAST}
          placeholder="About"
          style={styles.input}
          numberOfLines={10}
          multiline
        />

        <CategorySelector visible title='Category'/>
        <AppButton borderRadius={7} title="Submit" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  fileSelectorContainer: {
    flexDirection: 'row',
  },
  formContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: colors.SECONDARY,
    borderRadius: 7,
    padding: 10,
    color: colors.CONTRAST,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
});

export default Upload;