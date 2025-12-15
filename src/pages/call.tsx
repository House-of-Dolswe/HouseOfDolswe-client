import { useState } from "react";
import Picker from "react-mobile-picker";
import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";

interface TimePickerProps {
  onSelect?: (time: {
    hours: number;
    minutes: number;
    seconds: number;
  }) => void;
}

export default function Call({ onSelect }: TimePickerProps) {
 const [value, setValue] = useState({
    hours: "0",
    minutes: "0",
    seconds: "0",
  });

  const [hasInteracted, setHasInteracted] = useState(false);

  const hoursList = Array.from({ length: 24 }, (_, i) => i.toString());
  const minutesList = Array.from({ length: 60 }, (_, i) => i.toString());
  const secondsList = Array.from({ length: 60 }, (_, i) => i.toString());

  const handleChange = (newValue: typeof value) => {
    if (!hasInteracted) setHasInteracted(true);
    setValue(newValue);

    onSelect?.({
      hours: Number(newValue.hours),
      minutes: Number(newValue.minutes),
      seconds: Number(newValue.seconds),
    });
  };

  return (
    <>
       <Header />
       <TitleBar>돌쇠의 전화 Beta</TitleBar>
<PickerContainer>
  {/* 시 */}
  <PickerColumnWrapper>
    <Picker value={value} onChange={handleChange} height={170} itemHeight={33}>
      <Picker.Column name="hours">
        {hoursList.map((item) => (
          <StyledItem
            key={item}
            value={item}
            selected={hasInteracted && value.hours === item}
          >
            {item}
          </StyledItem>
        ))}
      </Picker.Column>
    </Picker>
    <UnitText>시간</UnitText>
  </PickerColumnWrapper>

  {/* 분 */}
  <PickerColumnWrapper>
    <Picker value={value} onChange={handleChange} height={170} itemHeight={33}>
      <Picker.Column name="minutes">
        {minutesList.map((item) => (
          <StyledItem
            key={item}
            value={item}
            selected={hasInteracted && value.minutes === item}
          >
            {item}
          </StyledItem>
        ))}
      </Picker.Column>
    </Picker>
    <UnitText>분</UnitText>
  </PickerColumnWrapper>

  {/* 초 */}
  <PickerColumnWrapper>
    <Picker value={value} onChange={handleChange} height={170} itemHeight={33}>
      <Picker.Column name="seconds">
        {secondsList.map((item) => (
          <StyledItem
            key={item}
            value={item}
            selected={hasInteracted && value.seconds === item}
          >
            {item}
          </StyledItem>
        ))}
      </Picker.Column>
    </Picker>
    <UnitText>초</UnitText>
  </PickerColumnWrapper>
</PickerContainer>

<Footer />

    </>
  );
}


const TitleBar = styled.div`
  width: 100%;
  border-bottom: 0.2vh solid #EEEEEE;
  color: #616161;
  font-weight: 500;
  font-size: 4vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2vw;
  margin-top: 1vh;
`
const PickerContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 11vw;
  margin-top: 10vh;
`;

const PickerColumnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const UnitText = styled.div`
  margin-left: 2vw;
  font-size: 4vw;
  color: black;
`;

const StyledItem = styled(Picker.Item)<{ selected: boolean }>`
  height: 38px;
  line-height: 38px;
  text-align: center;
  font-size: ${({ selected }) => (selected ? "8vw" : "5vw")};
  color: ${({ selected }) => (selected ? "#000" : "rgba(0, 0, 0, 0.4)")};
  font-weight: ${({ selected }) => (selected ? "400" : "300")};
`;
