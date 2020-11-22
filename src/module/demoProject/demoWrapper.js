import styled from "styled-components";

const DemoWrapper = styled.div`

.loginPage{
    background-color:#111213;
    min-width:365px;
    max-width:365px;
    padding:18px;
    border: 1px solid #5179d9;

    .spacing{
        margin:25px 0px;
    }
    .errorText{
        text-align: right;
        color: red;
        font-size: 10px;
    }
    .inputClass{
        height:36px;
        width:100%;
        background-color:#181919;
        font-size:12px;
        border:none;
        color:#fff;
        padding:0px 10px;
        outline:none !important;
        &:hover{
            outline:none !important;
        }
    }
    .genderStyle{
        float:left;
        .labelStyle{
            margin-left:10px;
            font-size:18px;
        }
    }
    .buttonStyle{
        width:100%;
        border:1px solid #5179d9;
        color:#fff;
        font-size:20px;
        margin-top: 20px;
        padding-bottom: 5px;
        background-color:#5179d9;
    }
    .registerClass{
        color:#fff;
        cursor: pointer;
        font-size: 14px;
    }
}
`;
export { DemoWrapper };