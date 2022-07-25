import Button from '../Components/Button'
import React from 'react'
// import "./styles.scss"
import facebook from '../assets/svg/facebook.svg'
import twitter from '../assets/svg/twitter.svg'
import instagram from '../assets/svg/instagram.svg'
import linkedin from '../assets/svg/linkedin.svg'
import youtube from '../assets/svg/youtube.svg'
import { blogList, companyList, supportList } from '../utilities'
import FooterLogo from '../Components/FooterLogo'
import Image from 'next/image'
export default function Footer() {
  return (
    <div className='bg-grayshadow pt-5 pb-5'>
      <div className='row p-0 m-0'>
        <div className='col-lg-4 pl-5'>
          <h5 className='heading2 pt-0 mt-0'><FooterLogo logoImg='2' /></h5>
          <h5 className='heading2'>Become a People Engagement pro!</h5>
          <p className='signuptext'>Sign up today to receive all the best practices, news and product updates about the world of employee performance management.</p>
          <div className='boxContainer'>
            <input type="text" placeholder='Enter your email' className='inputBox' />
            <Button text='Subscribe' className='bg-green text-white border-0 subscribeBtn' handleClick={() => { }} />
          </div>
          <div className='d-flex justify-content-between p-3 mr-4'>
            <Image src={facebook} alt="facebook" className='socialIcon' />
            <Image src={twitter} alt="twitter" className='socialIcon' />
            <Image src={instagram} alt="instagram" className='socialIcon' />
            <Image src={linkedin} alt="linkedin" className='socialIcon' />
            <Image src={youtube} alt="youtube" className='socialIcon' />
          </div>
        </div>
        <div className='col-lg-8 row'>
          <FooterList heading="Company" list={companyList} />
          <FooterList heading="Blog" list={blogList} />
          <FooterList heading="Support" list={supportList} />
          <FooterList heading="Apps" list={[]} />
        </div>
      </div>
      <div className='row m-3'>
        <div className='col-lg-4 d-flex justify-content-between '>
          <a href="!#" className='text-dark fs10'>Terms and Conditions</a>
          <a href="!#" className='text-dark fs10'>Privacy Policy</a>
          <a href="!#" className='text-dark fs10'>Compliance</a>
        </div>
        <div className='col-lg-8 d-flex justify-content-end'>
          <a href="!#" className='text-dark fs10'>People Mesh, Inc. | All rights reserved.</a>
        </div>
      </div>
    </div>
  )
}

const FooterList = ({ list = [], heading }) => {
  return (
    <div className='col-lg-3'>
      <h5 className='heading3 pb-2'>{heading}</h5>
      {list.length > 0 && list.map((item, index) => (
        <a href="!#" className='text-dark' key={index}><p key={index} className="link-item">{item.key}</p></a>
      ))}
    </div>
  )
}