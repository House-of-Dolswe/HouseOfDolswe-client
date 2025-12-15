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
       <Header/>
       <PickerWrapper>
       <Picker value={value} onChange={handleChange} height={200} itemHeight={38}>
      {/* 시 */}
      <Picker.Column name="hours">
        {hoursList.map((item) => (
          <StyledItem
            key={item}
            value={item}
            selected={hasInteracted && value.hours === item}
          >
            {item} 시
          </StyledItem>
        ))}
      </Picker.Column>

      {/* 분 */}
      <Picker.Column name="minutes">
        {minutesList.map((item) => (
          <StyledItem
            key={item}
            value={item}
            selected={hasInteracted && value.minutes === item}
          >
            {item} 분
          </StyledItem>
        ))}
      </Picker.Column>

      {/* 초 */}
      <Picker.Column name="seconds">
        {secondsList.map((item) => (
          <StyledItem
            key={item}
            value={item}
            selected={hasInteracted && value.seconds === item}
          >
            {item} 초
          </StyledItem>
        ))}
      </Picker.Column>
    </Picker>
    </PickerWrapper>
       <Footer />
    </>
  );
}

const StyledItem = styled(Picker.Item)<{ selected: boolean }>`
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: ${({ selected }) => (selected ? "6vw" : "5vw")};
  color: ${({ selected }) => (selected ? "#000" : "rgba(0, 0, 0, 0.4)")};
  font-weight: ${({ selected }) => (selected ? "500" : "300")};
`;

const PickerWrapper = styled.div`
  /* 중앙 선택 영역 선을 흰색으로 덮기 */
  .react-mobile-picker-highlight,
  .react-mobile-picker-highlight::before,
  .react-mobile-picker-highlight::after {
    background-color: white !important;
    border-color: white !important;
  }

  /* 위/아래 회색 라인 */
  .react-mobile-picker-view > div {
    border-top: 1px solid white !important;
    border-bottom: 1px solid white !important;
  }
`;



