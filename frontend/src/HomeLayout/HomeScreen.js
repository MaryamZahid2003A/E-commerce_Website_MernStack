import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { useLoginMutation,useRegisterMutation,useLogoutMutation } from '../store/UserApiSlice';
import { setCredentials,setLogout} from '../store/UserSlice';
import { useDispatch } from 'react-redux';
import MainMart from '../Mart/MainMart';


export default function HomeScreen() {
  const [address,setAddress]=useState('')
    const {userInfo}=useSelector((state)=>state.auth1)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [name,setName]=useState('')
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [login]=useLoginMutation();

    const handleSubmitLogin=async(e)=>{
        try{
          e.preventDefault();
          const res = await login({ email, password }).unwrap();
          dispatch(setCredentials(res));
          navigate('/mart')
          console.log('successfully logged in');
        }
        catch(error){
          console.log(error?.data?.message || error.message)
        }
    }
    useEffect=()=>{
        localStorage.setItem('address',JSON.stringify(address))
    }
  return (
    <div>
    <section className="d-flex justify-content-around bg-light flex-wrap">
            <img 
                src="https://cdn-icons-gif.flaticon.com/15547/15547234.gif" 
                className="responsive-img me-5 my-5 mx-5"
                alt="Grocery Store" 
            />
            <div className="my-5 d-flex flex-column justify-content-center align-items-center mx-4">
                <h1 className="fs-1 text-black text-center opacity-100 h1">
                It's the food and groceries you love, we delivered 
                <span>
                    <img src='https://cdn-icons-png.flaticon.com/256/12114/12114266.png' height='70' width='70' alt="Icon"/>
                </span>
                </h1>
                <div className="input-group my-3">
                <input type="text" className="form-control border" placeholder='H.No - Street - City - Country ( Address)' required value={address} onChange={(e)=>setAddress(e.target.value)}/>
                <button className="input-group-text btn btn-primary text-white text-center"  data-bs-toggle="modal" data-bs-target="#loginModal"
                > Find Food </button>
                </div>
            </div>
            {!userInfo?
                    <div className="modal fade" id="loginModal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h1 className="modal-title fs-5 loginForm">Sign In</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <form onSubmit={handleSubmitLogin}>
                            <input className="form-control my-3" type="text" placeholder="Name" required value={name} onChange={(e)=>setName(e.target.value)}/>
                            <input className="form-control my-3" type="email" placeholder="E-mail" required  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            <input className="form-control my-3" type="password" placeholder="Password" required  value={password} onChange={(e)=>setPassword(e.target.value)}/>
                            <button className="btn btn-primary">Sign Up</button>
                        </form>
                        </div>

                    </div>

                    </div>
                </div> :  <div className="modal fade" id="#loginModal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h1 className="modal-title fs-5 loginForm">Please Login ! </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <h1>You Must Login Or Signup To Continue Grocery !</h1>
                        </div>

                    </div>

                    </div>
                </div>}
                
                </section>
                <section className=''>
                        <h1 className='fs-2 opacity-100 mx-5 my-5 home-heading'>You prepared the grocery , we handle the rest</h1>
                        <div className='image-container '>
                            <div class="card image-card bg-white" >
                                <div class="card-body">
                                    <h5 class="card-title text">Pick favourite items from grocery store. <img src='https://cdn-icons-png.flaticon.com/256/8663/8663588.png' height='60' width='60'/></h5>
                                    <br />
                                    <p className='card-text'>Would you like millions of new customers to enjoy your amazing food and groceries? So would we! </p>
                                    <p className='card-text'>It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them 
                                            Interested? Let's start Shopping!
                                            <img src='https://cdn-icons-png.flaticon.com/256/7506/7506629.png' height='30' width='30'/>
                                            </p>
                                    <a href="#" class="btn btn-primary">Go Started</a>
                                </div>
                                </div>
                        </div>
                    
                </section>

    <section className=''>
        <div>
            <h1 className='fs-2 opacity-100 mx-5 my-3 home-heading'>Order grocery online from the best shops on our Mart ! </h1>
           <p className='mx-5 text-secondary'>Are you busy? Did you have a long and stressful day? Interested in getting a fast delivery to your
             house or looking to avoid the weekly shop? Then our mart is the right destination for you! 
            Pick & Save mart  offers you a long and detailed list of the best and pick good quality grocery items that make your every day easier.</p>
            </div>
        <div>
         <div>
                <h1 className='fs-4 opacity-100 mx-5 text-black'>What's! New ? </h1>
                    <ul className='custom-list mx-5'>
                        <li><p>Wide variety of restaurants and shops, an abundance of cuisines & products.</p></li>
                        <li><p>High quality delivery service.</p></li>
                        <li><p> Live chat feature to give App users instant help when they need it.</p></li>
                        <li><p>NEW: foodpanda grocery delivery! Discover the best shops, pharmacies, bakeries and more near you.</p></li>

                    </ul>
             </div>
        </div>
        
        <div>
            <h1 className='mx-5 my-5 fs-4 faq-heading'>Frequently Asked Questions (FAQ'S)</h1>
           <div className='accordion mx-5'>
                <div className='accordion-item'>
                    <h1 className='accordion-heading'>
                        <button className='accordion-button fs-6 ' type='button' data-bs-toggle='collapse' data-bs-target='#item1'>How can I get foodpanda delivery?</button>
                        </h1>  
                        <div id="item1" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p className='fs-6'>To get foodpanda delivery, simply locate the restaurants and shops near you by typing in your address,
                                    browse through a variety of restaurants and cuisines, check menus and prices, choose your dishes and 
                                    add them to the basket. Now you only need to checkout and make the payment. Soon your delicious food 
                                    will arrive at your doorstep!</p>
                            </div>
                        </div>
                    </div>
                    <div className='accordion-item'>
                    <h1 className='accordion-heading'>
                        <button className='accordion-button fs-6' type='button' data-bs-toggle='collapse' data-bs-target='#item2'>Does foodpanda deliver 24 hours?</button>
                        </h1>  
                        <div id="item2" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p className='fs-6'>Yes, foodpanda in Pakistan delivers 24 hours.
                                     However, many restaurants may be unavailable for a late-night delivery. Please check which places in 
                                    Pakistan deliver to you within 24 hours by using your address. 
                                    You can also order groceries 24 hours a day via pandamart.</p>
                            </div>
                        </div>
                    </div>
                    <div className='accordion-item'>
                    <h1 className='accordion-heading'>
                        <button className='accordion-button fs-6' type='button' data-bs-toggle='collapse' data-bs-target='#item3'>Can I order foodpanda for someone else?</button>
                        </h1>  
                        <div id="item3" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p className='fs-6'>Yes, foodpanda Pakistan allows you to place an order for someone else.
                                     During checkout, just update the name and delivery address of the person you're ordering for. Please keep in mind that if the 
                                    delivery details are not correct and the order cannot be delivered, we won't be able to process a refund.</p>
                            </div>
                        </div>
                    </div>
                    <div className='accordion-item'>
                    <h1 className='accordion-heading'>
                        <button className='accordion-button fs-6' type='button' data-bs-toggle='collapse' data-bs-target='#item4'>How much does foodpanda charge for delivery?</button>
                        </h1>  
                        <div id="item4" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p className='fs-6'>Delivery fee charged by foodpanda in Pakistan depends on many operational 
                                    factors, most of all - location and the restaurant you are ordering from. You can always check the delivery
                                     fee while forming your order. Besides,
                                     you can filter the restaurants by clicking on the "Free Delivery" icon at the top of your restaurant listing.</p>
                            </div>
                        </div>
                    </div>
           </div>
        </div>
    </section>
    </div>
  );
}
