import React from 'react';
import styled from "styled-components";

const Header = () => {

    const HeaderContainer = styled.section`
      padding: 0 2rem;
    `;

    const Hello = styled.header`
      margin: 0.67em 0 0 0;
      color: black;
      font-size: 3.8rem;
      font-weight: bold;
    `;
    const Greet = styled.h1`
      margin-top: 0;
      color: black;
      font-size: 3.1rem;
      font-weight: bold;
    `;
    const Period = styled.span`
      color: blueviolet;
      font-weight: bolder;
    `;
    const Intro = styled.p`
      font-size: 1.8rem;
      font-weight: normal;
    `;

  return (
      <HeaderContainer>
          <Hello>こんにちは、<br/></Hello>
          <Greet>私はユンと申します<Period>。</Period></Greet>
          <Intro>日本にきて8年目、開発者として１年目のジュニア開発者で韓国出身です、現在はバックエンドのWebアプリケーション開発者を目指して勉強しております。
          </Intro>
      </HeaderContainer>
  );
}

export default Header;