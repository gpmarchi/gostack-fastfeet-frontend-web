import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }

    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 150px;
      width: 150px;
      border-radius: 50%;
      border: 1px dashed #ddd;
      background: #fff;

      p {
        font-size: 16px;
        font-weight: bold;
        color: #ddd;
      }
    }

    img {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      border: 3px solid rgba(255, 255, 255, 0.3);
      background: #eee;
    }

    input {
      display: none;
    }
  }
`;
