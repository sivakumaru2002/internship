import { Button, Result } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React from 'react';
function PaymentDone() {
    return <>
         <Result 
    status="success"
    title="Successfully Booked the Tickets !"
    subTitle="Order number: 2017182818828182881"
  />
  <div className='centerContent '>
    <p>seatno= 12,30,40,50
    Amount= 400</p>
    <br/>
    <br/>
  <Button type="primary" key="console" shape='round'>
        Go Console
      </Button>
  
    
</div>
</>
}

export default PaymentDone