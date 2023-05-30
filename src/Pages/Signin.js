import { Col, Row, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom'

function SignIn() {
    const navigate = useNavigate()

    const handleSignIn = () => {
        navigate('home')
    }

    const handleSignUp = () =>{
        navigate('signup')
    }
    return <>
        <div className="centerContent">
            <div>SSSR Bookings</div>
        </div>
        <div className="fullPage centerContent ">
            <div style={{ display: 'flex' }}>
                <div className="centerContent" >
                    <img src="https://thumbs.dreamstime.com/b/hockey-stadium-fans-crowd-empty-ice-rink-sport-arena-rendering-my-own-design-hockey-stadium-fans-crowd-108709265.jpg" style={{ width: '300px', height: '400px', borderRadius: '50%' }} />
                </div>
                <div className='centerContent' style={{ width: '250px', marginLeft: '50px' }}>
                    <form>
                        <h2 className="heads">Welcome All !!</h2>
                        <label>Email Address</label>
                        <Input
                            type="text"
                            name="username"
                        />
                        <br />
                        <label>Password</label>
                        <Input
                            type="password"
                            name="username"
                        />
                        <br />
                        <br />
                        <Button onClick={handleSignIn} type='primary' shape='round'>Sign In</Button>
                        <h3 className='heads'>Don't you have an account?</h3>
                        <label>Click here to create an account</label>
                        <br />
                        <br />
                        <Button onClick={handleSignUp} type='primary' shape='round'>Sign Up</Button>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default SignIn