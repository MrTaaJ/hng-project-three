import styled from "styled-components";

const CardContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 10px;
    width: 100%;
    background: linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%);
    border: 1px solid #D7D7D7;
    border-radius: 15px;
    padding: 16px;
    .rating{
        display: flex;
        flex-flow: row nowrap;
        gap: 5px;
    }
`

const ImageContainer = styled.div`
    border-radius: 15px;
    position: relative;

    .like-btn {
        cursor: pointer;
        position: absolute;
        top: 7px;
        right: 8px;
        color: ${props => (props.isLiked ? "red" : "#D7D7D7")};
    }
`

const FlexSpaceBetween = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-weight: 400;
    font-size: 12px;
    line-height: 13px;
    color: #434343;

    .price {
        font-weight: 700;
    }
`

export { 
    CardContainer,
    ImageContainer,
    FlexSpaceBetween,
}