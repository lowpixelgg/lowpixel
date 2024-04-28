import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 32px;

  background: #121B22;
  
.credits {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    
    font-size: 0.7rem;
    
    h4 {
        font-weight: 400;
        color: #71787F;
    }

    h3 {
        margin-top: 2px;
        color: #4AD199;
        font-weight: 500;
    }
}  
`;
