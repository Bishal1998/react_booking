import Featured from '../../components/featured/Featured';
import GuestLove from '../../components/guestLove/GuestLove';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Navbar from '../../components/navbar/Navbar';
import PropertyList from '../../components/propertyList/PropertyList';
import './Home.css';

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">Browse by Property Type</h1>
                <PropertyList />
                <h1 className="homeTitle">Home Guests Love</h1>
                <GuestLove />
                <MailList />
            </div>
        </>
    )
}

export default Home;