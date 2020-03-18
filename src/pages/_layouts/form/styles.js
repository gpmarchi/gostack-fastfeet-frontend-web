import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    max-width: 900px;
    margin: 34px auto;

    input {
      width: 100%;
      border-radius: 4px;
      border: 1px solid #ddd;
      padding: 12px 15px;
      color: #999;
      font-size: 16px;
    }

    input + span {
      color: #de3b3b;
    }
  }

  header {
    max-width: 900px;

    button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 0;
      border-radius: 4px;
      background: #7d40e7;
      padding: 9px 20px;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    button#back {
      background: #ccc;
      margin-right: 16px;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h1 {
        font-weight: bold;
        font-size: 24px;
        color: #444;
      }

      aside {
        display: flex;
      }
    }
  }
`;
