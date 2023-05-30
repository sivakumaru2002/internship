import { Tooltip, Row, Col, Button } from 'antd'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import seatImg from '../assets/media/seat.png'
import classNames from 'classnames';

const standardSeatCost = 100;

function Booking() {
    const navigate = useNavigate()

    const [seats, setSeats] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatClick = (seatID) => {
        setSelectedSeats(seats => {
            if (seats.includes(seatID)) {
                return seats.filter(e => e !== seatID)
            }
            return [...seats, seatID]
        })
    }

    useEffect(() => {
        let temp = new Array(108).fill(0)
        temp = temp.map((e, i) => {
            let seatID = i + 1
            return <>
                <Col span={2} style={{ textAlign: 'center' }} key={'seat' + seatID} >
                    <Tooltip placement="topLeft" title={'No: ' + seatID}>
                        <img src={seatImg}
                            onClick={() => handleSeatClick(seatID)}
                            className={classNames({
                                seat: true,
                                seat_selected: selectedSeats.includes(seatID),
                                seat_hover: !selectedSeats.includes(seatID)
                            })} alt="seat" />
                    </Tooltip>
                </Col>
            </>
        })
        setSeats(temp)
    }, [selectedSeats])

    const handlePayClick = () => {
        navigate('/payment')
    }

    return <>
        <div className="fullPage" style={{ height: '100%' }}>
            <h1>&nbsp;&nbsp;Select Seats</h1>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '80%', height: '350px', borderRight: 'solid silver 5px', padding: '10px' }}>

                    <Row gutter={[0, 8]}>
                        {seats}
                    </Row>
                    <br />
                    <br />
                    <br />
                    <Row justify='center'>
                        ----------------------------------------------------SPORTS FIELD----------------------------------------------------
                    </Row>
                </div>
                <div style={{ width: '20%', height: '100vh', }}>
                    <Row>
                        <Col span={4} offset={1}>
                            <img src={seatImg} className="seat" alt="seat" />
                        </Col>
                        <Col> <span>Standard Seat</span>
                            <p>Rs.{standardSeatCost}</p>
                        </Col>
                        <Col offset={1}>
                            <span>x {selectedSeats.length}</span>
                        </Col>
                        <Col offset={1}>
                            <span className='total_price'>₹
                                {standardSeatCost * selectedSeats.length}</span>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col offset={1}>Seats: {selectedSeats.join(', ')}</Col>
                    </Row>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Row justify='center'>
                        <Button size='large' type='primary' shape='round' onClick={handlePayClick} >
                            Proceed to Pay
                        </Button>
                    </Row>
                </div>
            </div>
        </div>
    </>
}

export default Booking