import { useState } from 'react';
import styled from 'styled-components';
import ProfileImg from '../../public/profileImg.svg';
import Bookmark from '../../public/bookmark.svg';
import BookmarkOn from '../../public/bookmarkFill.svg'; 

const Container = styled.div`
  width: 100%;
  height: 9.5vh;
  display: flex;
  border-bottom: 0.7vw solid #F2F2F2;
`
const ProfileBox = styled.img`
  width: 13.5vw;
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
  font-size: 4vw;
  margin: 0;
`
const DetailWrapper = styled.div`
  display: flex; 
  flex-direction: row;
`
const NameBox = styled.p`
  color: #A304FF;
  font-size: 3.2vw;
  margin: 0;
`
const TagBox = styled.p`
  color: #8E8E93;
  font-size: 3.2vw;
  margin: 0;
  margin-left: 1.2vw;
`
const BookmarkWrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  margin-right: 5vw;
`
const BookmarkIcon = styled.button`
  background: none;
  border: none;
  padding: 0;
  width: 6vw;
  height: auto;
  outline: none;
` 

interface AudioItemProps {
  title: string;
  name: string;
  tags: string[];
}

export default function AudioItem({ title, name, tags }: AudioItemProps) {

  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
  setIsBookmarked(prev => !prev);
  };

  return (
    <Container>
        <ProfileBox src={ProfileImg} />
        <TextWrapper>
            <LineBox>{title}</LineBox>
            <DetailWrapper>
                <NameBox>{name}</NameBox>
                {tags.map((tag, index) => (
                  <TagBox key={index}>#{tag}</TagBox>
                ))}
            </DetailWrapper>
        </TextWrapper>
        <BookmarkWrapper>
          <BookmarkIcon onClick={toggleBookmark}>
            <img 
              src={isBookmarked ? BookmarkOn : Bookmark}
              style={{ width: "6vw" }}
            />
          </BookmarkIcon>
        </BookmarkWrapper>
    </Container>
  );
}