import { Button, Carousel, Input } from 'antd';
import { useNavigate } from 'react-router-dom'
import vsImg from '../assets/media/vsLogo.png'
import bad1 from '../assets/media/bad1.jpg'
import bad2 from '../assets/media/bad2.jpg'
import cric1 from '../assets/media/cric1.jpg'
import cric2 from '../assets/media/cric2.jpg'
import fubal1 from '../assets/media/fubal1.jpg'
import fubal2 from '../assets/media/fubal2.jpg'
import chess1 from '../assets/media/chess1.jpg'
import chess2 from '../assets/media/chess2.jpg'

function LandingPage() {
    const navigate = useNavigate()
    function handleBookNow() {
        navigate('/booking')
    }

    return <>
        <div className="fullPage">
            <div style={{ display:'flex', justifyContent: 'flex-end', padding: '0px' }}>
                <Input.Search style={{ width: '250px' }} placeholder="input search text" enterButton />
            </div>
            <Carousel effect='scrollx' autoplay style={{ height: '100%' }}>
                <div>
                    <div style={{ margin: '20px' }}>
                        <h1>P V Sindhu vs Tai Tzu Ying</h1>
                        <h2>BWF Indian Open</h2>
                        <h3>Timings : 04:00PM - 05:30PM</h3>
                        <br />
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <img src={bad1} style={{ borderRadius: '50%' }} />
                            <img src={vsImg} style={{ borderRadius: '50%' }} />
                            <img src={bad2} style={{ borderRadius: '50%' }} />
                        </div>
                        <br />
                        <br />
                        <h2 style={{ textAlign: 'center' }}>
                            Nehru Indoor Stadium, Chennai
                        </h2>
                        <br />
                        <br />
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button size='large' onClick={handleBookNow} type='danger'>
                                Book Now
                            </Button>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ margin: '20px' }}>
                        <h1>Chennai Super Kings vs Royal Challengers Bengaluru</h1>
                        <h2>Indian Premier League</h2>
                        <h3>Timings : 07:50PM - 11:30PM</h3>
                        <br />
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <img src={cric1} style={{ borderRadius: '50%' }} />
                            <img src={vsImg} style={{ borderRadius: '50%' }} />
                            <img src={cric2} style={{ borderRadius: '50%' }} />
                        </div>
                        <br />
                        <br />
                        <h2 style={{ textAlign: 'center' }}>
                            MA Chidambaram Stadium, Chepauk
                        </h2>
                        <br />
                        <br />
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button size='large' onClick={handleBookNow} type='danger'>
                                Book Now
                            </Button>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ margin: '20px' }}>
                        <h1>Chennayin FC vs Bengaluru FC</h1>
                        <h2>Indian Super League</h2>
                        <h3>Timings : 04:00PM - 07:00PM</h3>
                        <br />
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <img src={fubal1} style={{ borderRadius: '50%' }} />
                            <img src={vsImg} style={{ borderRadius: '50%' }} />
                            <img src={fubal2} style={{ borderRadius: '50%' }} />
                        </div>
                        <br />
                        <br />
                        <h2 style={{ textAlign: 'center' }}>
                            Nehru Outdoor Stadium, Chennai
                        </h2>
                        <br />
                        <br />
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button size='large' onClick={handleBookNow} type='danger'>
                                Book Now
                            </Button>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ margin: '20px' }}>
                        <h1>Viswanathan Anand vs Magnus Carlsen</h1>
                        <h2>Chess Championship</h2>
                        <h3>Timings : 04:00PM - 07:00PM</h3>
                        <br />
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <img src={chess1} style={{ borderRadius: '50%' }} />
                            <img src={vsImg} style={{ borderRadius: '50%' }} />
                            <img src={chess2} style={{ borderRadius: '50%' }} />
                        </div>
                        <br />
                        <br />
                        <h2 style={{ textAlign: 'center' }}>
                            Sheraton Resorts Mahabalipuram
                        </h2>
                        <br />
                        <br />
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button size='large' onClick={handleBookNow} type='danger'>
                                Book Now
                            </Button>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                </div>
            </Carousel>
        </div>
    </>
}

export default LandingPage