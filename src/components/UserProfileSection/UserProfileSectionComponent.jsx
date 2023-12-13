import UserProfileCardComponent from "../../utils/UserCardUtil/UserProfileCardComponent"
import GlobalStyle from '../../styles/globalStyles';
import styled from 'styled-components';

const UserProfileSection = () => {
  return (
    <>
    <GlobalStyle/>
    <UserProfileContainer id="/user-profile">
    <UserProfileCardComponent/>
    </UserProfileContainer>
    </>
  )
}

const UserProfileContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`


export default UserProfileSection