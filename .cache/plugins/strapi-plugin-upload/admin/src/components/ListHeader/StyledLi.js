import styled from 'styled-components';

const StyledLi = styled.li`
  height: 30px;
  background-color: #f3f3f4;
  color: #333740;
  font-size: 13px;
  font-weight: 600;
  line-height: 30px;
  .listHeader {
    display: flex;
    margin-left: 32px;
    margin-right: 32px;
    justify-content: space-between;
    span {
      letter-spacing: 0.3px;
    }
    > div:first-child {
      display: flex;
      width: 133px;
      > div:first-child {
        width: 51px;
      }
      > div:last-child {
        width: 82px;
      }
    }
    > div:nth-child(2) {
      width: calc(100% - 496px - 221px);
    }
    > div:nth-child(3) {
      width: calc(100% - 496px - 148px);
    }
    > div:nth-child(4) {
      width: 184px;
      flex-shrink: 0;
    }
    > div:nth-child(5) {
      width: 100px;
      flex-shrink: 0;
    }
    > div:nth-child(6) {
      width: 147px;
      flex-shrink: 0;
    }
    > div:nth-child(7) {
      width: 116px;
      flex-shrink: 0;
    }
  }

  .icon {
    > span:last-child {
      &:after {
        content: '\f0d8';
        margin-left: 10px;
        font-family: 'FontAwesome';
      }
    }
    cursor: pointer;
  }

  .iconDesc {
    > span:last-child {
      &:after {
        content: '\f0d7';
        margin-left: 10px;
        font-family: 'FontAwesome';
      }
    }
    cursor: pointer;
  }
`;

export default StyledLi;
