import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';
import MyNicknameForm from '../components/MyNicknameForm';
import useUserStore from '../hooks/useUserStore';

const Container = styled.div`
    padding: 3em 3em 1em 3em;
`;

const Title = styled.p`
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 2em;
`;

export default function MyNicknameChangePage() {
  const [userId] = useLocalStorage('userId', '');

  const navigate = useNavigate();

  const userStore = useUserStore();

  const modifyNickname = async (nickname) => {
    const data = await userStore.changeNickname(userId, nickname);
    console.log(data, 'nicknamechangepage');
    navigate(`/mypage/${userId}`);
  };

  const goPrevPage = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Title>닉네임 변경하기</Title>
      <MyNicknameForm modifyNickname={modifyNickname} goPrevPage={goPrevPage} />
    </Container>
  );
}