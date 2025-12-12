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
                ? isUser
                ? "#A304FF"
                : "#000"
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
  font-size: 0.75rem;
  color: #8E8E93;
  display: flex;
  justify-content: center;
  align-item: center;
`;

const ScriptBox = styled.div`
  font-size: 0.75rem;
  white-space: normal;
  color: #8E8E93;
  line-height: 2;
`;

const Container = styled.div`
  padding: 2vh 7vw;
`;

const Line = styled.div`
`;