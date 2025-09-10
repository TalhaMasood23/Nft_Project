
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
const Navbar = () => {
return (
    <>
        <nav className="Navbar">
            <div className="logo">
                <h3 className="logo-neon">NEON</h3>
                <h3 className="logo-morrphic">MORPHIC</h3>
            </div>
            <div className="navigation">
                <Link to="/">Home</Link>
                <Link to="/explore">Explore</Link>
                <Link to="/market">Market</Link>
                <Link to="/creator">Creator</Link>
                <Link to="/buy">Buy</Link>
            </div>
            <button className="button-wallet">Connect Wallet</button>
        </nav>
    </>
)
}
export default Navbar;