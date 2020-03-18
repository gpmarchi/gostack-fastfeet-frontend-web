import styled from 'styled-components';
import AsyncSelect from './AsyncSelect';

export const Content = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 25px;
  margin-top: 30px;

  fieldset {
    border: 0;

    label {
      display: block;
      margin-bottom: 10px;
      font-size: 14px;
      font-weight: bold;
      color: #444;
    }
  }

  div.selects {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
`;

export const Select = styled(AsyncSelect)`
  width: 410px;
  font-size: 16px;
  color: #999;
`;
