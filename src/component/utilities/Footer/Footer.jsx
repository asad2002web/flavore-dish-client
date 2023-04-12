import React from 'react';
import Logo from '../../../assets/Logo/JobScape.png'

const Footer = () => {
    return (
        <div>
           <footer className="footer p-10 bg-gray-900 text-white ">
  <div>
    <span className="footer-title">Job Portal</span> 
    <span>There are many variations of passages of Lorem Ipsum ,<br /> but the majority have suffered alteration in some form.</span>
    <a className="link link-hover w-36"><img src={Logo} alt="" /></a> 
  
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Developer</a>
  </div>
  <div>
    <span className="footer-title">Support</span> 
    <a className="link link-hover">Help deck</a> 
    <a className="link link-hover">salse</a> 
    <a className="link link-hover">Become Partner</a>
  </div>
  <div>
    <span className="footer-title">Contuct</span> 
    <a className="link link-hover">524 Broadway , NYC
+1 777 - 978 - 5570</a> 
  
  </div>
</footer> 
<footer className="footer px-10 py-4 border-t  bg-gray-800 text-white border-gray-500">
  <div className="items-center grid-flow-col">
  @2023 JobScape. All Rights Reserved
  </div> 
  <div className="md:place-self-center md:justify-self-end">
 <h4 className=''>Powered by JobScape</h4>
  </div>
</footer>
        </div>
    );
};

export default Footer