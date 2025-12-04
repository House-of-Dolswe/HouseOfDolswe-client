import { useState } from "react";
import styled from "styled-components";
import Header from "../components/header";
import Footer from "../components/footer";
import ThanksToItem from "../components/thanksToItem";
import ThanksToModal from "../components/thanksToModal";
import ProfileImg1 from "../../public/profileImg1.svg";
import ProfileImg2 from "../../public/profileImg2.svg";
import ProfileImg3 from "../../public/profileImg3.svg";


const TitleWrapper = styled.div`
  width: 100%;
  height: 3.5vh;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleText = styled.p`
  color: white;
  font-size: 4vw;
`

interface ThanksData {
  profileImg: string;
  name: string;
  content: string;
  url?: string;
}


export default function ThanksTo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ThanksData | null>(null);

  const openModal = (item: ThanksData) => {
    setSelectedItem(item);  
    setIsModalOpen(true);
  };

  const thanksMockData: ThanksData[] = [
  {
    profileImg: ProfileImg1,
    name: "OO대학교 교수 장OO",
    content: "OO대학교에서 △△연구를 하고있습니다. 항상 건강하시길 바랍니다.",
    url: "https://www.naver.com/"
  },
  {
    profileImg: ProfileImg2,
    name: "박닉네임",
    content: "인스타그램과 유튜브에 △△ 콘텐츠를 올리고있는 박닉네임입니다. 제 채널도 놀러오세요. @instagram",
    url: "https://www.naver.com/"
  },
  {
    profileImg: ProfileImg2,
    name: "주식회사 OOO 대표 김OO",
    content: "☆☆서비스를 만드는 OOO대표 김OO 입니다. 뜻깊은 프로젝트 하게되어 감사합니다. 유저분들, 저희 회사가 신제품을 런칭했습니다. @@과 OO을 결합하여 000에 판매하고 있습니다. 제품입니다. 관심있으시다면 www.homepage.com에 방문해주세요.",
    url: ""
  },
  {
    profileImg: ProfileImg3,
    name: "익명의 쥐돌이",
    content: "의미있는 프로젝트에 함께하게되어 뜻깊습니다.",
    url: ""
  },
  {
    profileImg: ProfileImg3,
    name: "사랑에 빠진 딸기",
    content: "의미있는 프로젝트에 함께하게되어 뜻깊습니다.",
    url: "https://www.naver.com/"
  }
];

  return (
    <>
       <Header />
       <TitleWrapper>
         <TitleText>Thanks to</TitleText>
       </TitleWrapper>
       {thanksMockData.map((item, index) => (
        <ThanksToItem
          key={index}
          profileImg={item.profileImg}
          name={item.name}
          content={item.content}
          onClick={() => openModal(item)}
        />
      ))}

      {isModalOpen && selectedItem && (
        <ThanksToModal
          profileImg={selectedItem.profileImg}
          name={selectedItem.name}
          content={selectedItem.content}
          url={selectedItem.url}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      <Footer />
    </>
  );
}
