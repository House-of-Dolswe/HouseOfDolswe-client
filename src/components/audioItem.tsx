import { useState } from 'react';
import styled from 'styled-components';
import ProfileImg from '../../public/profileImg.svg';
import Bookmark from '../../public/bookmark.svg';
import BookmarkOn from '../../public/bookmarkFill.svg'; 

const Container = styled.div<{ selected: boolean; disabled: boolean }>`
  width: 100%;
  height: 9.5vh;
  display: flex;
  border-bottom: 0.7vw solid ${(props) => 
    props.selected ? "Transparent" : 
    props.disabled ? "#F2F2F2" :
    "#F2F2F2"};
  background-color: ${(props) => 
    props.selected ? "white" : 
    props.disabled ? "#F2F2F2" :
    "white"};
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
const LineBox = styled.p<{ selected: boolean; disabled: boolean }>`
  font-weight: bold;
  font-size: 4vw;
  margin: 0;
  color: ${(props) => 
    props.selected ? "#000000" : 
    props.disabled ? "#8E8E93" :
    "#000000"};
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
const PlayBar = styled.div`
  width: 100%;
  height: 1.5vw;
  background-color: #D9D9D9;
`;


interface AudioItemProps {
  title: string;
  name: string;
  tags: string[];
  selected: boolean;
  disabled: boolean;
  onSelect: () => void;
}

export default function AudioItem({ title, name, tags, selected, disabled, onSelect }: AudioItemProps) {

  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
  setIsBookmarked(prev => !prev);
  };

  return (
    <>
      <Container selected={selected} disabled={disabled} onClick={onSelect}>
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
      {selected && <PlayBar />}
    </>
  );
}