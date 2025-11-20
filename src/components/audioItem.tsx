import styled from 'styled-components';
import ProfileImg from '../../public/profileImg.svg';

const Container = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  border-bottom: 1vw solid #F2F2F2;
`
const ProfileBox = styled.img`
  width: 15vw;
  height: auto;
  displat: flex;
  justify-content: center;
  margin-left: 7vw;
`
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.3vh;
  margin-left: 5vw;
`
const LineBox = styled.p`
  font-weight: bold;
  font-size: 4.5vw;
  margin: 0;
`
const DetailWrapper = styled.div`
  display: flex; 
  flex-direction: row;
`
const NameBox = styled.p`
  color: #A304FF;
  font-size: 3.5vw;
  margin: 0;
`
const TagBox = styled.p`
  color: #8E8E93;
  font-size: 3.5vw;
  margin: 0;
  margin-left: 1.2vw;
`



export default function AudioItem() {

  return (
    <Container>
        <ProfileBox src={ProfileImg} />
        <TextWrapper>
            <LineBox>문 앞에 두고 가세요</LineBox>
            <DetailWrapper>
                <NameBox>장춘배</NameBox>
                <TagBox>#택배</TagBox>
                <TagBox>#배달</TagBox>
                <TagBox>#당근</TagBox>
            </DetailWrapper>
        </TextWrapper>
    </Container>
  );
}