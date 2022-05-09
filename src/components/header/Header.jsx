import './Header.css';
import { MdOutlineHotel, MdFlight, MdCarRental, MdAttractions, MdLocalTaxi, MdCalendarToday, MdPerson } from 'react-icons/md'
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const Header = ({ type }) => {

    const [openDate, setOpenDate] = useState(false);
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const handleOption = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev, [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
            }
        })
    }

    const navigate = useNavigate();

    const handleSearch = () => {
        navigate('/hotels', { state: { destination, date, options } })
    }

    return (
        <div className="header">
            <div className={type === 'list' ? 'headerContainer listMode' : 'headerContainer'}>
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
                {type !== 'list' && <>
                    <h1 className="headerTitle">A Lifetime of discounts? It's Genius.</h1>
                    <p className="headerDesc">
                        Get rewarded for your travels - unlock instant savings of 10% or more with a free Booking App account
                    </p>
                    <button className="headerBtn">Sign in / Register</button>
                    <div className="headerSearch">
                        <div className="headerSearchItem">
                            <MdOutlineHotel className='headerIcon' />
                            <input
                                type="text"
                                placeholder='Where are you going?'
                                className='headerSearchInput'
                                value={destination}
                                onChange={(e) => setDestination(e.target.value)}
                            />
                        </div>
                        <div className="headerSearchItem">
                            <MdCalendarToday className='headerIcon' />
                            <span className='headerSearchText' onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
                            {openDate && <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className='date'
                                minDate={new Date()}
                            />}
                        </div>
                        <div className="headerSearchItem">
                            <MdPerson className='headerIcon' />
                            <span className='headerSearchText' onClick={() => setOpenOptions(!openOptions)}>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>

                            {openOptions && < div className="options">
                                <div className="optionItem">
                                    <span className="optionText">Adult</span>
                                    <div className="optionCounter">
                                        <button
                                            disabled={options.adult <= 0}
                                            className="optionCounterButton"
                                            onClick={() => handleOption('adult', 'd')}>-</button>
                                        <span className="optionCounterNumber">{options.adult}</span>
                                        <button
                                            className="optionCounterButton"
                                            onClick={() => handleOption('adult', 'i')}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Children</span>
                                    <div className="optionCounter">
                                        <button
                                            disabled={options.children <= 0}
                                            className="optionCounterButton"
                                            onClick={() => handleOption('children', 'd')}>-</button>
                                        <span className="optionCounterNumber">{options.children}</span>
                                        <button
                                            className="optionCounterButton"
                                            onClick={() => handleOption('children', 'i')}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Room</span>
                                    <div className="optionCounter">
                                        <button
                                            disabled={options.room <= 0}
                                            className="optionCounterButton"
                                            onClick={() => handleOption('room', 'd')}>-</button>
                                        <span className="optionCounterNumber">{options.room}</span>
                                        <button
                                            className="optionCounterButton"
                                            onClick={() => handleOption('room', 'i')}>+</button>
                                    </div>
                                </div>
                            </div>}
                            <div className="headerSearchItem">
                                <button className="headerBtn" onClick={handleSearch}>Search</button>
                            </div>
                        </div>
                    </div>
                </>}
            </div>
        </div>
    )
}

export default Header;