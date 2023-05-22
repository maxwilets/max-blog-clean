import styled from 'styled-components';

export const SkillStyles = styled.div`
  .colorDial {
    background: rgb(128,5,18);
    background: linear-gradient(90deg, rgba(128,5,18,1) 0%, rgba(121,9,35,1) 10%, rgba(223,113,32,1) 50%, rgba(42,26,246,1) 100%);
    background-width: 
    border-radius: 20px;
    display: block;
    height: 20px;
    position: relative;
    padding-right: 10px;
    
    span {
      position: absolute;
      left: ${(props) => props.$level}%;
      color: #000;
      border-radius: 50%;
      background-color: #fff;
      opacity: .6;
      height: 30px;
      border: 1px solid #000;
      padding-left: 5px;
      padding-right: 5px;
      top: -5px;
    }
  }
  p { margin-bottom: 5px; margin-top: 5px; font-size: 12px; }
`;
