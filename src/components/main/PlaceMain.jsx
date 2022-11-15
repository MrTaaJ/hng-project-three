import {    
    PlaceContainer,
    PlaceNavContainer,
} from './Main.styles';
import GridContainer from '../ui/grid.styles';
import Card from '../utils/Card';
import { useContext } from 'react';
import { DataContext } from '../../data';

const PlaceMain = () => {
    const cards = useContext(DataContext)

    const dataArray = [
        {
            id: 1,
            name: "Restaurant"
        },
        {
            id: 2,
            name: "Cottage"
        },
        {
            id: 3,
            name: "Castle"
        },
        {
            id: 4,
            name: "Fantast city"
        },
        {
            id: 5,
            name: "Beach"
        },
        {
            id: 6,
            name: "Carbins"
        },
        {
            id: 7,
            name: "Off-grid"
        },
        {
            id: 8,
            name: "Farm"
        }
    ]
  return (
    <PlaceContainer>
        <PlaceNavContainer>
            <div className="place-nav">

                {dataArray.map((data) => (
                    <a className="place-link-btn" key={data.id} href={data.name}>
                        {data.name}
                    </a>
                ))}

            </div>
            <form>
                <input
                    type="text"
                    name="search"
                    className='search'
                    id="search"
                    placeholder="Location"
                />
                <button className="filter-btn" type="submit" >
                    <img src="/img/setting.svg" alt="" />
                </button>
            </form>
        </PlaceNavContainer>

        <GridContainer>
            {cards.map((card) => (
                <Card key={card.id} card = {card} />
            ))}
        </GridContainer>
    </PlaceContainer>
  )
}

export default PlaceMain