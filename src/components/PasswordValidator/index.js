// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  PasswordValidatorAppContainer,
  Title,
  Description,
  PasswordInput,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const showErrorMessage = password.length < 8

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <AppContainer>
      <PasswordValidatorAppContainer>
        <Title>Password Validator</Title>
        <Description>Check how strong and secure is your password</Description>
        <PasswordInput
          type="password"
          onChange={onChangePassword}
          value={password}
        />
        {showErrorMessage && (
          <ErrorMessage>
            Your password must be at least 8 characters
          </ErrorMessage>
        )}
      </PasswordValidatorAppContainer>
    </AppContainer>
  )
}

export default PasswordValidator
