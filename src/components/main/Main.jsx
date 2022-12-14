import {    
    MainContainer,
    TopContainer,
    BottomContainer,
    HeadingContainer,
} from './Main.styles';
import GridContainer from '../ui/grid.styles';
import Button from '../utils/Button';
import { useContext } from 'react';
import { DataContext } from '../../data';
import Card from '../utils/Card';

const Main = () => {
    const cards = useContext(DataContext)

    const newCards = []

    for(let i = 4; i < 8; i++){
        newCards.push(cards[i]);
    }
    for(let i = 0; i < 4; i++){
        newCards.push(cards[i]);
    }

  return (
    <MainContainer>
        <TopContainer>
            <h1>Inspiration for your next adventure</h1>

            <GridContainer>
                {newCards.map((card) => (
                    <Card key={card.id} card = {card} />
                ))}
            </GridContainer>
        </TopContainer>
        <BottomContainer>
            <HeadingContainer>
                <h1>Metabnb NFTs</h1>
                <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                <Button section="main" >Learn more</Button>
            </HeadingContainer>
            <img src={"/img/main-bottom.png"} alt="" />
        </BottomContainer>
    </MainContainer>
  )
}

export default Main