import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLogout } from '../store/UserSlice.js';
import { useLogoutMutation } from '../store/UserApiSlice.js';
import { useDispatch } from 'react-redux';
import MainPageMart from './MainPageMart.tsx';
import Footer from '../HomeLayout/Footer.js';
import { ProductFormat } from './format.tsx';
import { useState } from 'react';
import Cart from './Cart.tsx'


export default function MainMart(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.auth1);
    const [logout] = useLogoutMutation();
    const [cartProduct,setCartProduct]=useState<ProductFormat[]>([])


    const handleSubmitLogout = async (e) => {
        try {
            e.preventDefault();
            await logout().unwrap();
            dispatch(setLogout());
            navigate('/');
            console.log('Logout Successfully');
        } catch (error) {
            console.log(error?.data?.message || error.message);
        }
    };

    return (
        <div className="">
            <nav className="navbar sticky">
                <div className="container-fluid navbar-expand-lg">
                    <div className="d-flex flex-row navbar-brand">
                        <img
                            src="https://cdn-icons-gif.flaticon.com/15547/15547234.gif"
                            height="70"
                            width="67"
                            alt="grocery store"
                            className="ms-4 rounded-5"
                        />
                        <p className="d-none d-lg-block text-white fs-2 ms-3 my-3 h1">
                            Pick & Save Mart
                        </p>
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#menu"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {userInfo ? (
                        <div className="offcanvas offcanvas-start w-50" id="menu">
                            <ul className="navbar-nav me-5 mb-2 text-white ms-auto text-end d-flex flex-column">
                                <li className="nav-item text-center fs-5 rounded-1 px-3 me-2 py-2">
                                    <div className="d-flex flex-row">
                                        <p className="nav-item text-center fs-5 rounded-1 px-3 me-2">
                                            {userInfo.name}
                                        </p>
                                        <img
                                            src="https://cdn-icons-png.flaticon.com/128/1077/1077012.png"
                                            width="30"
                                            height="30"
                                            alt="user icon"
                                        />
                                    </div>
                                </li>
                                <li className="nav-item text-center fs-5 rounded-1 px-3 me-2 link-opacity-75-hover">
                                    <div className="d-flex flex-row">
                                        <button
                                            type="button"
                                            className="nav-link text-white link-opacity-75-hover"
                                            onClick={handleSubmitLogout}
                                        >
                                            Logout
                                        </button>
                                        <img
                                            src="https://cdn-icons-png.flaticon.com/128/1286/1286853.png"
                                            width="30"
                                            height="30"
                                            className="my-2"
                                            alt="logout icon"
                                        />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <p>hello</p>
                    )}
                </div>
            </nav>
            <div className="d-flex flex-row justify-content-center ">
                <div id="carouselExampleAutoplaying" className="carousel slide w-100 carousel-check" data-bs-ride="carousel">  
                    <div className="carousel-inner">
                        <div className="carousel-item active ">
                            <img
                                src="https://excellentfood.com.bd/blog/wp-content/uploads/2022/02/Untitled-1-2-1.jpg"
                                className="rounded-1 imageCarousel"
                                alt="Slide 1"
                            />
                        </div>
                        <div className="carousel-item   ">
                            <img
                                src="https://assets.klikindomaret.com///products/promopage/IC-NOW_BIG-BANNER-KLIK-IDM-1240x445.png"
                                className="rounded-1 imageCarousel"
                                alt="Slide 2"
                            />
                        </div>
                        <div className="carousel-item  ">
                            <img
                                src="https://i.ytimg.com/vi/9jpIaUnLWQY/maxresdefault.jpg"
                                className="rounded-1 imageCarousel"
                                alt="Slide 3"
                            />
                        </div>
                        <div className="carousel-item  ">
                            <img
                                src="https://www.mycart.pk/media/catalog/product/cache/1/thumbnail/800x/17f82f742ffe127f42dca9de82fb58b1/8/9/8961014014433.png"
                                className="rounded-1 imageCarousel"
                                alt="Slide 4"
                            />
                        </div>
                        <div className="carousel-item  ">
                            <img
                                src="https://olpersmart.pk/admin_assets/sliders/2024_08_16_slider_66bf3f5cafaf6.jpg"
                                className="rounded-1 imageCarousel"
                                alt="Slide 5"
                            />
                        </div>
                    </div>
                    
                </div>
                <section className="homecart d-none d-lg-block">
                    <h1 className='text-center fs-4'>My Cart</h1>
                    <button className='btn btn-primary ' type='button'> checkout</button>
                </section>
            </div>
            <MainPageMart/>
            <div className="d-flex flex-row justify-content-center my-5 ">
                <div id="Autoplaying" className="carousel slide w-100 carousel-check" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active ">
                            <img
                                src="https://i.dawn.com/primary/2023/04/28153423f373445.jpg"
                                className="rounded-1 imageCarousel"
                                alt="Slide 1"
                            />
                        </div>
                        <div className="carousel-item   ">
                            <img
                                src="https://media.licdn.com/dms/image/C4D22AQENdFql20eK1A/feedshare-shrink_800/0/1630659341808?e=2147483647&v=beta&t=U-dLWzrgYSUw8tgFEzFXOZ0PbE4BCico3cKVJKrLjlc"
                                className="rounded-1 imageCarousel"
                                alt="Slide 2"
                            />
                        </div>
                        <div className="carousel-item  ">
                            <img
                                src="https://highfy.pk/cdn/shop/files/Dove-IntenseRepairShampoo650ML.png?v=1708329574"
                                className="rounded-1 imageCarousel"
                                alt="Slide 4"
                            />
                        </div>
                        <div className="carousel-item  ">
                            <img
                                src="https://images.deliveryhero.io/image/darsktores-pk/evaaaa-Banner.png?height=272&dpi=1"
                                className="rounded-1 imageCarousel"
                                alt="Slide 5"
                            />
                        </div>
                    </div>
                    
                </div>
                <section className="   homecart d-none d-lg-block">
                    <h1 className='text-center fs-4'>My Cart</h1>
                    <Cart cartProduct={cartProduct} setCartProduct={setCartProduct}/>
                    <button className='btn btn-primary ' type='button'> checkout</button>
                </section>
            </div>
            <Footer/>
        </div>
    );
}
