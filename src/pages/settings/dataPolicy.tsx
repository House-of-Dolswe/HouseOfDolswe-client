import styled from "styled-components";
import Footer from "../../components/footer";
import Header from "../../components/header";

export default function DataPolicy() {

  return (
    <>
      <Header />
       <Container>
        <TitleBar>개인정보처리방침</TitleBar>
       </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
`
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