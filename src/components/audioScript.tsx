import styled from "styled-components";

interface ScriptLine {
  text: string;
  start: number;
  end: number;
}

interface AudioScriptProps {
  script: ScriptLine[];
  playClickCount: number;
  currentTime: number;
}


export default function AudioScript({ 
  script,
  playClickCount,
  currentTime }: AudioScriptProps) {

  const isPlaying = playClickCount % 2 === 1;


    return (
    <Container>
      <PlayText>{isPlaying ? "[재생 중]" : "[대본]"}</PlayText>

      <ScriptBox>
        {script.map((line, idx) => {
          const isActive =
            currentTime >= line.start && currentTime < line.end;

          const isUser = line.text.trim().startsWith("나:");
          
          return (
            <Line
              key={idx}
              style={{
                color: isActive 
                ? "#000" 
                : isUser
                ? "#A304FF"
                : "#8E8E93",
                fontWeight: isActive ? "bold" : "normal",
              }}
            >
              {line.text}
            </Line>
          );
        })}
      </ScriptBox>
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

const Line = styled.div`
  margin-bottom: 6px;
`;