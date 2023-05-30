import { Col, Row, Input, Button } from 'antd';
function Signup() {
    return <>
      <div className="fullPage centerContent " id="fullpa">
                <div className='centerContent' style={{ width: '250px', marginLeft: '50px' }} id="pagei">
                    <form>
                        <h2 className="heads" id="lo">Create An Account! </h2>
                        <label>Email Address</label>
                        <Input
                            type="text"
                            name="username"
                        />
                        <label>Password</label>
                        <Input
                            type="password"
                            name="username"
                        />
                        <label>Confirm Password</label>
                        <input 
                        type="password"
                        name="confirmpassword"
                        />
                        <br />
                         <label>Mobile no</label>
                        <Input
                            type="mobile no"
                            name="username"
                        />
                         <label>OTP</label>
                        <Input 
                            type="OTP"
                            name="username"
                        />
                         
                        <br />
                        <br />
                        <Button  type='primary' shape="round">Sign up</Button>
                    </form>
                </div>
        </div>
    </>
}

export default Signup