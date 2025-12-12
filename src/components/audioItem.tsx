import { useState } from 'react';
import styled from 'styled-components';
import ProfileImg from '../../public/profileImg1.svg';
import Bookmark from '../../public/bookmark.svg';
import BookmarkOn from '../../public/bookmarkFill.svg'; 
import PlayButton from '../../public/playButton.svg';
import AudioScript from './audioScript';

interface ScriptLine {
  text: string;
  start: number;
  end: number;
}

interface AudioItemProps {
  id: number,
  title: string;
  name: string;
  tags: string[];
  selected: boolean;
  disabled: boolean;
  isInitialLoad: boolean;
  category: string;
  onSelect: () => void;
  onToggleBookmark: (id: number) => void;
  isBookmarked: boolean;
  script: ScriptLine[];
  onPlayAudio: (id: number, url: string) => void;
  audioUrl: string;
  isPlaying: boolean;
  progress: number;
  currentTime: number;
}

export default function AudioItem({ 
  id,
  title,
  name,
  tags,
  selected,
  disabled,
  isInitialLoad,
  category,
  onSelect,
  onToggleBookmark,
  isBookmarked,
  script,
  onPlayAudio,
  audioUrl,
  progress,
  currentTime }: AudioItemProps) {

  const [playClickCount, setPlayClickCount] = useState(0);
  const isDimmed = !isInitialLoad && !selected;
  const isScriptOpen = category === "귀가(택시,골목길)";

  const handlePlayClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); 
    setPlayClickCount(prev => prev + 1);
    onPlayAudio(id, audioUrl);
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
        <ButtonContainer>
         <BookmarkWrapper>
          <BookmarkIcon isDimmed={isDimmed} disabled={!selected} onClick={handlePlayClick}>
            <img 
              src={PlayButton}
              style={{ width: "4vw" }}
            />
          </BookmarkIcon>
         </BookmarkWrapper>
         <BookmarkWrapper>
          <BookmarkIcon
          isDimmed={isDimmed}
          disabled={!selected} 
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation(); // 부모 클릭 방지
              onToggleBookmark(id);
            }}>
            <img 
              src={isBookmarked ? BookmarkOn : Bookmark}
              style={{ width: "5.3vw" }}
            />
          </BookmarkIcon>
         </BookmarkWrapper>
        </ButtonContainer>
      </Container>
      {selected && <PlayBar progress={progress} />}
      {selected && isScriptOpen && (
        <AudioScript
          script={script}
          playClickCount={playClickCount}
          currentTime={currentTime}
        />
      )}
    </>
  );
}

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
  display: flex;
  justify-content: center;
  margin-left: 6vw;
`
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.3vh;
  margin-left: 4vw;
`
const LineBox = styled.p<{ selected: boolean; disabled: boolean }>`
  font-weight: bold;
  font-size: 3.8vw;
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
const ButtonContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`
const BookmarkWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 4vw;
`
const BookmarkIcon = styled.button<{ isDimmed?: boolean }>`
  background: none;
  border: none;
  padding: 0;
  width: 6vw;
  height: auto;
  outline: none;
  opacity: ${({ isDimmed }) => (isDimmed ? 0.4 : 1)};
` 
const PlayBar = styled.div<{ progress: number }>`
  width: 100%;
  height: 1vw;
  background-color: #D9D9D9;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ progress }) => progress}%;
    background-color: #A304FF; 
    transition: width 0.1s linear;
  }
`;