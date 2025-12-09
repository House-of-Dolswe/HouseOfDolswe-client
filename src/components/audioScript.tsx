import styled from "styled-components";

interface AudioScriptProps {
  script: string;
  playClickCount: number;
}


export default function AudioScript({ 
  script,
  playClickCount }: AudioScriptProps) {

  const isPlaying = playClickCount % 2 === 1;

  return (
    <Container>
      <PlayText>{isPlaying ? "[재생 중]" : "[대본]"}</PlayText>
      <ScriptBox dangerouslySetInnerHTML={{ __html: script }} />
    </Container>
  );
}

const PlayText = styled.div`
  font-size: 0.78rem;
  color: #8E8E93;
  display: flex;
  justify-content: center;
  align-item: center;
`;

const ScriptBox = styled.div`
  font-size: 0.7rem;
  line-height: 1.5;
  white-space: normal;
  color: #8E8E93;
  line-height: 2.3;
`;

const Container = styled.div`
  padding: 2vh 7vw;
`;