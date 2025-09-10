import './styles/Home_c.css'
const Home_C = (props) => {
  return (
    <>
    <div className="home-card">
      <div className="home-card-inner">
        <div className="home-card-image">
          {props.img}
        </div>
        <div className="home-card-content">
          <h5>{props.name}</h5>
          <p className="home-card-price">⟠{props.price}</p>
          <button className="button-NFT-home-C">Place Bid</button>
        </div>

      </div>
    </div>
</>
  );
};

export default Home_C;