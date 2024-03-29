import React,  {useState} from 'react';
import { StyleSheet, TextInput, View, Button, Modal, Alert } from 'react-native';
import { THEME } from '../theme';
import { AppButton } from './ui/AppButton';

export const EditModal = ({ visible, onCancel, value, onSave }) => {
  const [title, setTitle] = useState(value)
  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert('Ошибка!', `Мин длина 3 символа. Сейчас ${title.trim().length}`)
    } else {
      onSave(title)
    }
  }

  const cancelHandler = () => {
    setTitle(value)
    onCancel()
  }

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.wrap}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={styles.input} 
          placeholder='Введите название' 
          autoCapitalize="none" 
          autoCorrect={false}
          maxLength={64}
        />
        <View style={styles.buttons}>
          <AppButton onPress={cancelHandler} color={THEME.DANGER_COLOR}>
            Отменить
          </AppButton>
          <AppButton onPress={saveHandler}>
            Сохранить
          </AppButton>
          {/* <Button title='Отменить' onPress={onCancel} color={THEME.DANGER_COLOR} /> */}
          {/* <Button title='Сохранить' onPress={saveHandler} /> */}
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  wrap: {
    justifyContent: "center",
    alignItems: 'center',
    flex: 1
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    width: '80%'
  },
  buttons: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})