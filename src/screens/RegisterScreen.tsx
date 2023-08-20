import { Pressable, Text, TextInput, View } from 'react-native';
import React from 'react';
import useLogin from '../hooks/useLogin';
import { s } from 'react-native-wind';

export function RegisterScreen({ navigation }: any) {
  const auth = useLogin({ navigation });

  return (
    <View style={s`flex-auto items-center justify-center bg-primary`}>
      <Text>Inscrivez-vous</Text>
      <View style={s`w-1/2 mt-2`}>
        <TextInput
          ref={auth.emailTextInputRef}
          onBlur={() => auth.emailValidation()}
          placeholder="Email"
          onFocus={auth.handleFocusEmailInput}
          style={[
            s`border border-solid rounded p-2`,
            !auth.isEmailValid ? s`border-danger` : s`border-secondary-dark`,
          ]}
          onChangeText={auth.setEmail}
          value={auth.email}
        />
        {!auth.isEmailValid && (
          <View style={s`mt-2 flex-auto items-center gap-4`}>
            <Text style={s`text-danger`}>{auth.emailErrorMessage}</Text>
          </View>
        )}
      </View>
      <View style={s`w-1/2 mt-2`}>
        <TextInput
          ref={auth.passwordTextInputRef}
          onBlur={() => auth.passwordValidation()}
          placeholder="Password"
          onFocus={auth.handleFocusPasswordInput}
          style={[
            s`border border-solid rounded p-2`,
            !auth.isEmailValid ? s`border-danger` : s`border-secondary-dark`,
          ]}
          onChangeText={auth.setPassword}
          value={auth.password}
          secureTextEntry={true}
        />
        {!auth.isPasswordValid && (
          <View style={s`mt-2 flex-auto items-center gap-4`}>
            <Text style={s`text-danger`}>{auth.passwordErrorMessage}</Text>
          </View>
        )}
      </View>

      <Pressable
        onPress={auth.handleSubmit}
        style={s`my-2 bg-secondary-dark w-1/2 p-2 rounded`}>
        <Text style={s`text-primary text-center`}>Validez</Text>
      </Pressable>

      {auth.formSubmissionErrorMessage
        ? auth.isEmailValid &&
          auth.isPasswordValid && (
            <Text style={s`text-danger`}>
              {auth.formSubmissionErrorMessage}
            </Text>
          )
        : null}

      <View>
        <Text>Déja un compte ?</Text>
        <Pressable onPress={() => auth.handleRedirect('Login')}>
          <Text style={s`text-secondary-dark text-center font-bold`}>
            Connectez-vous
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
