import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';
import useLogin from '../hooks/useLogin';

export function RegisterScreen({ navigation }: any) {
  const auth = useLogin({ navigation });

  return (
    <View style={styles.container}>
      <Text>Inscrivez-vous</Text>
      <View style={[styles.inputContainer]}>
        <TextInput
          ref={auth.emailTextInputRef}
          onBlur={() => auth.emailValidation()}
          placeholder="Email"
          onFocus={auth.handleFocusEmailInput}
          style={[styles.input, auth.setInputBorderColor('email')]}
          onChangeText={auth.setEmail}
          value={auth.email}
        />
        {!auth.isEmailValid && (
          <View style={styles.errorContainer}>
            {/*<Icon name="exclamation-circle" size={20} color={'red'} />*/}
            <Text style={styles.errorMessage}>{auth.emailErrorMessage}</Text>
          </View>
        )}
      </View>
      <View style={[styles.inputContainer]}>
        <TextInput
          ref={auth.passwordTextInputRef}
          onBlur={() => auth.passwordValidation()}
          placeholder="Password"
          onFocus={auth.handleFocusPasswordInput}
          style={[styles.input, auth.setInputBorderColor('password')]}
          onChangeText={auth.setPassword}
          value={auth.password}
          secureTextEntry={true}
        />
        {!auth.isPasswordValid && (
          <View style={styles.errorContainer}>
            {/*<Icon name="exclamation-circle" size={20} color={'red'} />*/}
            <Text style={styles.errorMessage}>{auth.passwordErrorMessage}</Text>
          </View>
        )}
      </View>

      <Pressable onPress={auth.handleSubmit} style={styles.button}>
        <Text style={styles.labelButton}>Validez</Text>
      </Pressable>

      {auth.formSubmissionErrorMessage &&
        auth.isEmailValid &&
        auth.isPasswordValid && (
          <Text style={styles.errorMessage}>
            {auth.formSubmissionErrorMessage}
          </Text>
        )}

      <View>
        <Text>Déja un compte ?</Text>
        <Pressable onPress={() => auth.handleRedirect('Login')}>
          <Text style={styles.registerLink}>Connectez-vous</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDFDFD',
    gap: 20,
  },
  inputContainer: {
    width: '50%',
  },
  input: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  button: {
    backgroundColor: '#212121',
    borderRadius: 5,
    width: '50%',
    padding: 10,
  },
  labelButton: {
    color: '#FDFDFD',
    textAlign: 'center',
  },
  errorContainer: {
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  errorMessage: {
    color: 'red',
  },
  registerLink: {
    color: '#212121',
    fontWeight: '700',
    textAlign: 'center',
  },
});
