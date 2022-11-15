import { 
    ModalContainer,
    ModalPop,
    Wallet
} from "./Modal.styles";
import { AiOutlineClose, AiOutlineRight } from "react-icons/ai";
import { useState } from "react";

const Modal = ({handleCancel}) => {

    const [toggleCancel, setToggleCancel] = useState();

    const handleToggle = () => {
        setToggleCancel( false )
        handleCancel(toggleCancel)
      }

  return (
    <ModalContainer>

        <ModalPop>
            <div className="top common">
                <h5>Connect Wallet</h5>
                <AiOutlineClose onClick={handleToggle} className="close" size={20} />
            </div>
            <Wallet>
                <p>Choose your preferred wallet:</p>
                <button className="common">
                    <img src="/img/metamask.png" alt="" />
                    <AiOutlineRight className="close" size={20} />
                </button>

                <button className="common">
                    <img src="/img/wallet-connect.png" alt="" />
                    <AiOutlineRight className="close" size={20} />
                </button>
            </Wallet>
        </ModalPop>

    </ModalContainer>
  )
}

export default Modal