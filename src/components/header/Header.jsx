import './Header.css';
import { MdOutlineHotel, MdFlight, MdCarRental, MdAttractions, MdLocalTaxi } from 'react-icons/md'

const Header = () => {
    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem active">
                        <MdOutlineHotel />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <MdFlight />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <MdCarRental />
                        <span>Car Rentals</span>
                    </div>
                    <div className="headerListItem">
                        <MdAttractions />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <MdLocalTaxi />
                        <span>Airport Taxis</span>
                    </div>
                </div>
                <h1 className="headerTitle">A Lifetime of discounts? It's Genius.</h1>
                <p className="headerDesc">
                    Get rewarded for your travels - unlock instant savings of 10% or more with a free Booking App account
                </p>
                <button className="headerBtn">Sign in / Register</button>
            </div>
        </div>
    )
}

export default Header;