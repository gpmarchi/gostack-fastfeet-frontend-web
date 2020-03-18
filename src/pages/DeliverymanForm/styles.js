import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 4px;
  padding: 25px;
  margin-top: 30px;

  fieldset {
    border: 0;
    width: 100%;

    label {
      display: block;
      margin: 20px 0 5px 0;
      font-size: 14px;
      font-weight: bold;
      color: #444;
    }
  }
`;
