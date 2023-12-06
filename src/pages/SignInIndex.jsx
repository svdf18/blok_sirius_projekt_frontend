import SignInComponent from "../services/Auth/SignInComponent"
import SignUpComponent from "../services/Auth/SignUpComponent"
import TestUserDisplay from "../services/Auth/TestUserDisplay"

const SignInIndex = () => {

  return (
    <div>
      <SignUpComponent/>
      <SignInComponent/>
      <TestUserDisplay/>
    </div>
  )
}

export default SignInIndex