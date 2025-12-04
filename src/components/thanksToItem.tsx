import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 0.7vw solid #F2F2F2;
  background-color: #FFFFFF;
  padding: 4.5vw;
`
const ProfileBox = styled.img`
  width: 13.5vw;
  height: auto;
  displat: flex;
  justify-content: center;
  margin-left: 2vw;
`
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.3vh;
  margin-left: 5vw;
`
const NameBox = styled.p`
  font-weight: bold;
  font-size: 4vw;
  margin: 0;
  color: #000000;
`
const DetailWrapper = styled.div`
  display: flex; 
  flex-direction: row;
`

const ContentBox = styled.p`
  color: #8E8E93;
  font-size: 3.2vw;
  margin: 0;
`

interface ThanksItemProps {
  profileImg: string;
  name: string;
  content: string;
  onClick?: () => void;
}

export default function ThanksToItem({ profileImg, name, content, onClick }: ThanksItemProps) {

  return (
    <>
      <Container onClick={onClick}>
        <ProfileBox src={profileImg} />
        <TextWrapper>
            <NameBox>{name}</NameBox>
            <DetailWrapper>
              <ContentBox>{content}</ContentBox>
            </DetailWrapper>
        </TextWrapper>
      </Container>
    </>
  );
}