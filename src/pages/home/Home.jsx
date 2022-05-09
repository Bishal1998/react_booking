import Featured from '../../components/featured/Featured';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import './Home.css';

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">Browse by Property Type</h1>
            </div>
        </>
    )
}

export default Home;