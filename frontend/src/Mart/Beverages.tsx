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

export default function Beverages() {
    const [beverageProduct, setBeverageProduct] = useState<ProductFormat[]>([]);
    const [beverage] = useBeverageMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userInfo } = useSelector((state) => state.auth1);
    const [logout] = useLogoutMutation();

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
                console.log(res.data);
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
                <Link to='/mart'>
                    <p>Back To Store </p>
                </Link>
            </div>
            <div className="ImageContainer mx-5">
                {beverageProduct.length > 0 ? (
                    beverageProduct.map((product) => (
                        <div className='bg-light p-1 border-1 border-light productContainer ' key={product._id}>
                            <img src={product.img} alt={product.name} height='100' width='100' className='rounded-1 ProductImage ' />
                            <p className='text-wrap '>{product.name}</p>
                            <p className='text-danger'>Rs .{product.price}</p>
                        </div>
                    ))
                ) : (
                    <span>No beverages found</span>
                )}
            </div>
            <section className="homecart d-none d-lg-block">
                <h1 className='text-center fs-4'>My Cart</h1>
                <button className='btn btn-primary ' type='button'> checkout</button>
            </section>
        </div>
    );
}
