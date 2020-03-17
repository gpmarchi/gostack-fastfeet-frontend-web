import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;

  header {
    min-width: 1200px;
    margin: 34px auto 20px;

    h1 {
      font-weight: bold;
      font-size: 24px;
      color: #444;
    }

    div {
      margin-top: 34px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      input {
        height: 36px;
        border-radius: 4px;
        border: 1px solid #ddd;
        color: #999;
        padding: 10px 20px;
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        border-radius: 4px;
        background: #7d40e7;
        padding: 9px 20px;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
      }
    }
  }

  table {
    min-width: 1200px;
    margin: 0 auto 50px;
    table-layout: fixed;
    border-collapse: separate;
    border-spacing: 0 20px;

    thead th {
      text-align: left;
      font-size: 16px;
      font-weight: bold;
      color: #444;
      padding: 10px 20px;
    }

    thead tr {
      th:last-child {
        text-align: center;
      }
    }

    tbody tr {
      background: #fff;
      height: 60px;
      padding: 10px 20px;

      td {
        padding: 10px 20px;
        font-size: 16px;
        color: #666;

        max-width: 1px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        div {
          display: flex;
          align-items: center;

          img {
            height: 35px;
            width: 35px;
            border: 1px solid #ddd;
            border-radius: 50%;
            margin-right: 5px;
          }
        }
      }

      td:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }

      td:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        text-align: center;

        button {
          border: 0;
          background: none;
        }
      }
    }
  }
`;
