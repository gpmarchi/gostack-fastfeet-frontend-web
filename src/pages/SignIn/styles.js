import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(#7d40e7, #844be7);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background: #fff;
  box-shadow: 0px 0px 10px #00000033;
  display: flex;
  flex-direction: column;
  max-width: 360px;
  border-radius: 4px;
  padding: 50px 30px;

  img {
    height: 50px;
    margin-bottom: 30px;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      font-size: 14px;
      font-weight: bold;
      color: #444;
      margin-bottom: 10px;
    }

    input {
      margin-bottom: 15px;
      border-radius: 4px;
      border: 1px solid #ddd;
      padding: 10px 20px;
      font-size: 16px;
      width: 300px;

      &::placeholder {
        color: #999;
      }
    }

    span {
      margin-bottom: 15px;
      font-weight: bold;
      color: #b3ac22;
    }

    button {
      background: #7d40e7;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      padding: 15px 0;
    }
  }
`;
