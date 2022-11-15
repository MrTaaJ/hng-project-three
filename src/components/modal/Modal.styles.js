import styled from "styled-components";

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.5);
    animation: zoom 0.3s ease-in-out;

    @keyframes zoom {
        from { transform: scale(0); }
        to { transform: scale(1); }
    }
`

const ModalPop = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 10px;
    width: 50%;
    height: fit-content;
    background: #FFFFFF;
    border-radius: 16px;
    padding-bottom: 20px;
    

    .common {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
    }

    .top {
        border-bottom: 1px solid #CFD8DC;
        padding: 20px;

        h5 {
            font-weight: 700;
            font-size: 24px;
            line-height: 30px;
            color: #333333;
        }

        & .close:hover {
            cursor: pointer;
            color: red;
        }
    }

    & {
        @media screen and (max-width: 820px) {
            width: 80%;
        }
    }
`

const Wallet = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 16px;
    padding: 20px;

    button {
        padding: 10px 20px;
        background: #FFFF;
        border: 1px solid #CFD8DC;
        border-radius: 12px;

        &:hover {
            cursor: pointer;
            background: #F8F9FA;
        }
    }
`

export { 
    ModalContainer,
    ModalPop,
    Wallet,
}