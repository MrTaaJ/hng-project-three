import { React, useContext } from 'react'
import { HandleContext } from "../../data";
import { CardContainer, ImageContainer, FlexSpaceBetween } from '../ui/global.styles';
import { AiFillHeart } from "react-icons/ai";

const Card = ({ card }) => {

    const ratingDisplay = (rating) => {
    
        let display = [];
        for(let i = 0; i < rating; i++){
            display.push(<img src="/img/rating.png" alt="" />);
        }
    
        return display;
    };

    const handleLike = useContext(HandleContext);

    const handleLikeBut = (e) => {
        const targetId = (e.target.parentElement.id);
        handleLike(targetId);
    }
    

    return (
        <CardContainer>
            <ImageContainer isLiked = {card.isLiked}>
                <img src={card.imageurl} alt="" />
                <button type="button" >
                    <AiFillHeart className="like-btn" id={card.id} size={30} onClick={handleLikeBut}/>
                </button>
            </ImageContainer>

            <FlexSpaceBetween>
                <p className='left name'>{card.name}</p>
                <p className='right price'>{card.price}</p>
            </FlexSpaceBetween>

            <FlexSpaceBetween>
                <p className='left distance'>{card.distance}</p>
                <p className='right available'>{card.availability}</p>
            </FlexSpaceBetween>

            <div className="rating">
                {ratingDisplay(card.rating)}
            </div>

        </CardContainer>
    )
}

export default Card