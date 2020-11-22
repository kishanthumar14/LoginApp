import styled from "styled-components";

export const UserTableWrapper = styled.div`
height: 100%;
width: 100%;
.contentArea {
  width:100%;
  
  .tAddBtn {
    float: right;
    margin: 10px;
    border-radius: 4px;
    .textFill {

    }
  }
  .rowOption {
    display: flex;
    font-size: 13px;
    justify-content: space-evenly;
    .btmIcon {
      color: #5c626a;
      opacity: 0.80;
      padding: 2px;
      cursor:pointer;
    }
    .btmIcon:hover {
      color: #b4b4b4;
      opacity: 1;
        padding: 2px;
        cursor: pointer;
      }
      .btmIcon:active {
        color: #4b8beb;
        opacity: 1;
        }
      .btmIconVisible {
        color: #959696;
      } 
      .btmIconVisible:hover {
        color: #b4b4b4;
  opacity: 1;
      }
  }

  .active {
    cursor: pointer;
    font-size: 12px !important;
    display: inline-block;
    text-align: center;
    width: 60px;
    border: solid 1px green;
    border-radius: 9px;
    background: #2aff2a7d;
    color: white;
  }
  .deactive {
    cursor: pointer;
    font-size: 12px !important;
    display: inline-block;
    text-align: center;
    width: 75px;
    border: solid 1px red;
    border-radius: 9px;
    background: #f33333;
    color: white;
  }
}
.groupHeaderContainer{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0px 30px 0px 30px;
    height: 74px;
    .searchAddSection {
        display: flex;
        margin-left: 40px;
        .tAddBtn {
          margin-left: 21px;
        }
      }
}
.groupListContainer{
    height: calc(100% - 50px);
}
.groupFooter{
  height: 50px;
  padding: 0px 44px 18px 44px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .total {
      font-family: HelveticaNeue-Light;
      font-size: 12px;
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 0.7px;
      color: #65686f;
      padding: 0px 30px 0px 30px;
      height: 40px;
      line-height: 38px;
    }

    .actionWrapper {
      display: flex;
      align-items: center;
      border-left: 0.1px solid #65686f26;
      border-right: 0.1px solid #65686f26;
      padding: 0px 20px 0px 20px;
      height: 40px;
    }
}
.groupTableContainer{
    height: calc(100% - 65px);
}
`;