import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  min-height: 100%;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;

  header {
    min-width: 1200px;
    margin: 0 auto 20px;
    display: flex;
    flex-direction: column;

    h1 {
      font-weight: bold;
      font-size: 24px;
      color: #444;
      margin-top: 34px;
    }

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

    div {
      margin-top: 34px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      div#search {
        margin: 0;
        height: 40px;
        border: 1px solid #ddd;
        border-radius: 4px;
        background: #fff;
        display: flex;
        align-items: center;

        svg {
          margin: 10px;
        }

        input {
          height: 36px;
          border: 0;
          color: #999;
          padding: 10px 10px 10px 0;
          background: transparent;
          font-size: 14px;

          &::placeholder {
            color: #999;
            font-size: 14px;
          }
        }
      }
    }
  }

  div#empty-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 200px;

    p {
      margin-left: 20px;
      font-weight: bold;
      font-size: 20px;
      color: #999;
    }

    span {
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    }
  }

  table {
    min-width: 1200px;
    margin: 0 auto 10px;
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
            border: 1px solid rgba(220, 220, 220, 0.3);
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
      }
    }
  }
`;
