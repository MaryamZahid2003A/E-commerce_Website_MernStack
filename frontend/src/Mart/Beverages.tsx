import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useBeverageMutation } from '../store/productApiSlice.js';
import { useDispatch } from 'react-redux';
import { ProductFormat } from './format.tsx';
import { setLogout } from '../store/UserSlice.js';
import { useLogoutMutation } from '../store/UserApiSlice.js';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Cart from './Cart.tsx'; 
import { useLocation } from 'react-router-dom';
let count=0;

export default function Beverages() {
    console.log('hello i am in beverages section')
    const location = useLocation();
    const [beverageProduct, setBeverageProduct] = useState<ProductFormat[]>([]);
    const [beverage] = useBeverageMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {cartProduct}=location.state || {} ;
    console.log(`what happend${cartProduct}`)
    const { userInfo } = useSelector((state) => state.auth1);
    const [logout] = useLogoutMutation();

    const handleIncrement=(id)=>{
        const update=beverageProduct.map((product)=>(
            product._id==id? {...product,quantity:product.quantity+1} : product

                
        ))
        setBeverageProduct(update)
        beverageProduct.map((product)=>(
            product._id==id? (product) : <p></p>    
        ))
        console.log(' i am in increment')
        console.log(cartProduct)

    }
    const handleDecrement=(id)=>{
       const update= beverageProduct.map((product)=>(
            (product._id==id? (product.quantity>0? {...product,quantity:product.quantity-1 }:product)
             :product)        
        ))
        setBeverageProduct(update)
        beverageProduct.map((product)=>(
            product._id==id? setCartProduct(product) : <p></p>    
        ))
    }

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

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get('/api/user/beverage');
                setBeverageProduct(res.data);
                console.log(res.data)

            } catch (error) {
                console.log('Error in fetching the beverages');
            }
        };
        fetchProduct();
    }, []);

    return (
        <div>
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
            <div className=''>
                <Link to='/mart' className='text-decoration-none'>
                    <div className=' h-100 d-flex flex-row text backListing'>
                        <img src='https://cdn-icons-png.flaticon.com/128/9312/9312240.png' className='mx-4' height='30' width='30'/>
                            <div className="dropdown">
                                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Shop By Department
                                </a>

                                <ul className="dropdown-menu">
                                    <Link to='/shan' className='text-decoration-none text-black'><a className="dropdown-item" href="#">Shan</a></Link>
                                    <li><a className="dropdown-item" href="#">Fruits</a></li>
                                    <li><a className="dropdown-item" href="#">Meat</a></li>
                                    <li><a className="dropdown-item" href="#">Dairy Item</a></li>
                                    <li><a className="dropdown-item" href="#">Bakery</a></li>
                                    <li><a className="dropdown-item" href="#">Icecream</a></li>
                                    <li><a className="dropdown-item" href="#">Snacks</a></li>
                                    <li><a className="dropdown-item" href="#">Lipton</a></li>
                                    <Link to='/beverage' className='text-decoration-none text-black'><a className="dropdown-item">Beverages</a></Link>
                                    <li><a className="dropdown-item" href="#">Bakery</a></li>
                                    <li><a className="dropdown-item" href="#">Milk</a></li>
                                    <li><a className="dropdown-item" href="#">Stationary</a></li>
                                    <li><a className="dropdown-item" href="#">Oil & Ghee</a></li>
                                    <li><a className="dropdown-item" href="#">Chocolates</a></li>
                                </ul>
                                </div>
                    </div>
                   
                </Link>
            </div>
            <div className="ImageContainer mx-5">
                {beverageProduct.length > 0 ? (
                    beverageProduct.map((product) => (
                        <div className='bg-light p-2 border-1 border-light productContainer ' key={product._id}>
                            <img src={product.img} alt={product.name} height='100' width='100' className='rounded-1 ProductImage ' />
                            <p className='text-wrap '>{product.name}</p>
                            <div className='d-flex flex-row justify-content-between'>
                            <p className='text-danger '>Rs.{product.price}</p>
                                <div className='d-flex flex-row '>
                                    {product.quantity<2?
                                    <div className='d-flex w-100  h-75 imageHolder '>
                                        <img src='https://cdn-icons-png.flaticon.com/128/3917/3917242.png' className='mx-2 my-1 ' height='18' width='18' onClick={()=>handleDecrement(product._id)}/>
                                        <p >{product.quantity}</p>
                                        <img src='https://cdn-icons-png.flaticon.com/128/3917/3917179.png' className='mx-2 my-1 incrementimage' height='20' width='20' onClick={()=>handleIncrement(product._id)}/>
                                    </div>
                                    :
                                    <div className='d-flex flex-row h-75 imageHolder'>
                                        <img src='https://cdn-icons-png.flaticon.com/128/6797/6797369.png' className='mx-2 my-1 incrementimage' height='18' width='18' onClick={()=>handleDecrement(product._id)}/>
                                        <p >{product.quantity}</p>
                                        <img src='https://cdn-icons-png.flaticon.com/128/3917/3917179.png'  className='mx-2 my-1 incrementimage' height='20' width='20' onClick={()=>handleIncrement(product._id)}/>
                                    </div>
                                        
                                }
                                    
                                </div>
                            </div>

                        </div>
                    ))
                ) : (
                    <span>No beverages found</span>
                )}
            </div>
            <div>
                <section className="homecart d-none d-lg-block">
                    {cartProduct.length === 0 ? (
                        <p>Nothing in the cart</p>
                    ) : (
                        <Cart cartProduct={cartProduct} setCartProduct={setCartProduct} />
                    )}
                </section>
            </div>
        </div>
    );
}
