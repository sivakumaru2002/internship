import { Button, Carousel, Input } from 'antd';
import React from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import classNames from 'classnames';
const { Header, Content, Footer, Sider } = Layout;
function Payment() {
  const navigate = useNavigate()

  const [currentTab, setCurrentTab] = useState(0)

  const handleSidebarItemsClick = (tabId) => {
    setCurrentTab(tabId)
  }

  function BookNow() {
    navigate('/paymentdone')
  }
  return <>
    <div className="fullPage" style={{ display: 'flex' }}>
      <div className="sidebar" style={{ width: '225px', padding: '15px', backgroundColor: '#001529' }} >
        <h2 style={{ color: 'whitesmoke' }}>PAYMENT MODE</h2>

        <div
          onClick={() => handleSidebarItemsClick(0)}
          className={classNames({ sidebar_items: true, sidebar_active_items: currentTab === 0 })}>

          <UserOutlined />&nbsp;Credit/Debit Card</div>
        <div
          onClick={() => handleSidebarItemsClick(1)}
          className={classNames({ sidebar_items: true, sidebar_active_items: currentTab === 1 })}>

          <UserOutlined />&nbsp;Net Banking</div>
        <div
          onClick={() => handleSidebarItemsClick(2)}
          className={classNames({ sidebar_items: true, sidebar_active_items: currentTab === 2 })}>

          <UploadOutlined />&nbsp;UPI</div>
        <div
          onClick={() => handleSidebarItemsClick(3)}
          className={classNames({ sidebar_items: true, sidebar_active_items: currentTab === 3 })}>

          <UserOutlined />&nbsp;Quick Pay</div>
      </div>

      <div className='centerdiv' style={{ display: 'flex', flexGrow: 1 }} >
        <div className='bg' style={{ width: '80%', padding: '50px'}}>
          {currentTab === 0 && <form style={{ marginTop: '150px' }} >
            <label>Enter Card Number</label>
            <Input
              type="text"
              name="username"
            />
            <br />
            <label>Enter Card Holder's Name</label>
            <Input
              type="text"
              name="username"
            />
            <br />
            <label>Expiry Month and Year: </label>
            <br /><br />
            <Input
              type="month"
            />
            <br />
            <label>CVV</label>
            <br />
            <Input
              type='password'
            />
            <br />
            <br />
            <Button type='primary' shape='round' onClick={BookNow}>Proceed</Button>

          </form>}

          {currentTab === 1 && <form style={{ marginTop: '150px' }} >
            <label>Enter user id</label>
            <Input
              type="text"
              name="username"
            />
            <br />
            <label>Enter password</label>

            <Input
              type='password'
            />
            <br />
            <br />
            <Button type='primary' shape='round' onClick={BookNow} >Proceed</Button>

          </form>}
        
          {currentTab === 2 && <form style={{ marginTop: '150px' }} >
            <label>Please Enter UPI ID</label>
            <Input
              type="text"
              name="username"
            />
            <br />
            <br />
            <Button type='primary' shape='round' onClick={BookNow}>Verify and Pay</Button>

          </form>}
          {currentTab === 3 && <form style={{ marginTop: '150px' }} >
            <label>Enter User Name </label>
            <Input
              type="text"
              name="username"
            />
            <br />
            <label>Enter CVV</label>

            <Input
              type='password'
            />
            <br />
            <br />
            <Button type='primary' shape='round' onClick={BookNow}>Proceed</Button>

          </form>}


        </div>
        <div style={{ width: '20%', borderLeft: 'solid silver 5px', padding: '10px', backgroundColor: 'whitesmoke' }}>
          <h3>Order Summary</h3>
        </div>
      </div>

    </div>





  </>

}

export default Payment