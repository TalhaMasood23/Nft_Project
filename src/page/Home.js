import './styles/home.css';
import HomePic from '../assets/free_bg.png';
import NFT1 from '../assets/Nft1.jpg';
import NFT2 from '../assets/Nft2.jpg';
import NFT3 from '../assets/Nft3.jpg';
import Timer from '../components/Timer';
import HomeCard from '../components/Home_C';
import Art from '../components/Art.js';
import Middle from '../components/Middle_comp';
import Artist from '../components/Top_artist.js';

const Home = () => {
    return (
        <>
            <div className="grid-home-main">
            <div className="grid-home-main-1-column">
            <h4>MARKETPLACEFOR</h4>
            <h1>CREATORS</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia
            </p>
            <button className="button-explore">Explore</button>
            <button className="button-NFT">Choose NFT →</button>
            </div>
            <div className="grid-home-main-2-column">
                <button className="button-NFT-1">Choose NFT</button>
                <button className="button-NFT-2">BTC</button>
                <img src={HomePic} alt="hi"/>
                <button className="button-NFT-3">Treasure NFT</button>
                <Timer />
            </div>
            <div className="home-card-container">
            <h5 className="home-card-title">Highest Live Bid</h5>
            <HomeCard name="Eizan" img={<img src={NFT1} alt="hi" />} price="322" />
            <HomeCard name="No" img={<img src={NFT2} alt="hi" />} price="32" />
            <HomeCard name="Pic" img={<img src={NFT3} alt="hi" />} price="42" />
            <button className='Home-card-tittle-2'>View More</button>

</div>

            </div>
            <div className='Art-card-container'>
            <h5 className='Art-card-title-Network'>Artwork</h5>
        <Art name="Eizan" img={<img src={NFT1} alt="hi" />} rating="4.8" heart="❤️" desc="Lorem "/>
        <Art name="Eizan" img={<img src={NFT1} alt="hi" />} rating="4.8" heart="❤️" desc="Lorem "/>
        <Art name="Eizan" img={<img src={NFT1} alt="hi" />} rating="4.8" heart="❤️" desc="Lorem "/>
        <Art name="Eizan" img={<img src={NFT1} alt="hi" />} rating="4.8" heart="❤️" desc="Lorem "/>
        <button className='Art-card-title-Network-button'>See all</button>
        </div>
        <div className='Art-card-container2'>
        <Art name="pciolo" img={<img src={NFT1} alt="hi" />} rating="4.8" heart="❤️" desc="Lorem "/>
        <Art name="Eizan" img={<img src={NFT1} alt="hi" />} rating="4.8" heart="❤️" desc="Lorem "/>
        <Art name="Eizan" img={<img src={NFT1} alt="hi" />} rating="4.8" heart="❤️" desc="Lorem "/>
        <Art name="Eizan" img={<img src={NFT1} alt="hi" />} rating="4.8" heart="❤️" desc="Lorem "/>
        
        </div>

        <div className='Middle-card-container3'>
            <Middle />
        </div>

        <div style={{ color: "aliceblue", marginLeft: "40%", backgroundcolor: "aliceblue" }}>
            <h1>Top Artists</h1>
        </div>
        <div className='artist-card-container3'>
            <Artist img={<img src={NFT1} alt="hi" />} name="pciolo" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia" />
            <Artist img={<img src={NFT1} alt="hi" />} name="pciolo" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia" />
        </div>
        <div className='artist-card-container3'>
            <Artist img={<img src={NFT1} alt="hi" />} name="pciolo" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia" />
            <Artist img={<img src={NFT1} alt="hi" />} name="pciolo" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia" />
        </div>
            

        </>
    );
}
export default Home