import MiddlePic from '../assets/Eth.png';
import './styles/Middle_comp.css';
const Middle_comp = () => {
    return (
        <div className='middle-container-grid'>
            <div className='middle-container-grid-1-column'>
            <h1>Learn & Earn Free ETH with NFT</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia</p>
            <button className="button-explore">Explore</button>
            </div>
            <div className='middle-container-grid-2-column'>
            <img src={MiddlePic} alt="hi" />
            </div>

        </div>
    );
}

export default Middle_comp