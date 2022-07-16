
import SignUp from './SignUp';
import variables from '../styles/SignUp/SignUp.module.css';
import Home from './Home';
// import SignIn from './api/SignIn';
export default function App() {

  return (
    <div className={variables.container}>
     {/* <SignUp/> */}
      {/* <SignIn/> */}
      <Home/>
    </div>
  )
}
