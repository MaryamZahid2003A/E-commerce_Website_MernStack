import React from 'react'
import { Link } from 'react-router-dom'

export default function MainPageMart() {
  return (
    <div className='mx-5' >
      <section>
        <h1 className='mx-5 my-5 fs-2'>All Categories !</h1>
      </section>
    <section className=''>
        <div className='MainPageMart'>
            <div >
                <button className='categories'>
                    <img src='https://images.deliveryhero.io/image/darkstores/nv-global-catalog/pk/5229217c-7746-41ba-96ad-d17081976c27.png?height=104&dpi=1' width='80' height='80'/>
                </button>
                <p className='mx-4 text-center' >Shan</p>
            </div>
            <div >
                <button className='categories'>
                    <img src='https://images.deliveryhero.io/image/nv/APAC-Category-3D-Icon/PK-3D-ICONS/Native_Fruits-vege_216x216px.png?height=104&dpi=1' width='80' height='80'/> 
                </button>
                <p className='mx-4 text-center'>Fruits</p>
            </div>
            <div >
                <button className='categories'>
                    <img src='https://images.deliveryhero.io/image/nv/APAC-Category-3D-Icon/PK-3D-ICONS/Native_Meat%20&%20Seafood_216x216px_v02_B.png?height=104&dpi=1' width='80' height='80'/>
                </button>
                <p className='mx-4 text-center'>Meat </p>
            </div>
            <div >
                <button className='categories'>
                    <img src='https://images.deliveryhero.io/image/nv/Pakistan/category_tile/19_Milk_Only.png?height=104&dpi=1' width='80' height='80'/>
                </button>
                <p className='mx-4 text-center'>Dairy Item</p>
            </div>
            <div >
                <button className='categories'>
                    <img src='https://images.deliveryhero.io/image/nv/Pakistan/banner/Non-native_bakery-and-breakfast_216x216px%20copy.png?height=104&dpi=1' width='80' height='80'/>
                </button>
                <p className='mx-4 text-center'>Bakery </p>
            </div>
            <div >
                <button className='categories'>
                    <img src='https://images.deliveryhero.io/image/nv/APAC-Category-3D-Icon/PK-3D-ICONS/Native_ice-cream_216x216px.png?height=96&dpi=1' width='80' height='80'/>
                </button>
                <p className='mx-4 text-center'>Icecream </p>
            </div>
            <div >
                <button className='categories'>
                    <img src='https://images.deliveryhero.io/image/nv/Pakistan/category_tile/46_Snacks.png?height=96&dpi=1' width='80' height='80'/>
                </button>
                <p className='mx-4 text-center'>Snacks </p>
            </div>
            <div >
                <button className='categories'>
                    <img src='https://images.deliveryhero.io/image/nv/Pakistan/banner/Lipton.png?height=96&dpi=1' width='80' height='80'/>
                </button>
                <p className='mx-4 my-2 text-center'>Lipton </p>
            </div>
            <div >
                <Link to='/beverage'>
                <button className='categories'>
                    <img src='https://images.deliveryhero.io/image/nv/APAC-Category-3D-Icon/PK-3D-ICONS/WhatsApp%20Image%202024-05-08%20at%2010.11.11%20AM.jpeg?height=96&dpi=1' width='80' height='80'/>
                </button>
                
                <p className='mx-4 text-center' >Beverages</p>
                </Link>
            </div>
            <div >
                <button className='categories'>
                    <img src='https://images.deliveryhero.io/image/nv/Pakistan/banner/Non-native_bakery-and-breakfast_216x216px%20copy.png?height=104&dpi=1' width='80' height='80'/>
                </button>
                <p className='mx-4 text-center'>Bakery </p>
            </div>
            <div >
                <button className='categories'>
                    <img src='https://images.deliveryhero.io/image/nv/Pakistan/banner/olpers%20tile.jpg?height=96&dpi=1' width='80' height='80'/>
                </button>
                <p className='mx-4 text-center'>Milk</p>
            </div>
            <div >
                <button className='categories'>
                    <img src='https://cdn-icons-png.flaticon.com/128/11513/11513182.png' width='70' height='70'/>
                </button>
                <p className='mx-4 text-center'>Stationary</p>
            </div>
            <div >
                <button className='categories'>
                    <img src='https://images.deliveryhero.io/image/nv/APAC-Category-3D-Icon/PK-3D-ICONS/Native_Cooking-and-packaged-food_216x216px.png?height=96&dpi=1' width='80' height='80'/>
                </button>
                <p className='mx-4 text-center'>Oil & Ghee</p>
            </div>
            <div >
                <button className='categories'>
                    <img src='https://cdn-icons-png.flaticon.com/256/9434/9434778.png' width='80' height='80'/>
                </button>
                <p className='mx-4 text-center'>Chocolates</p>
            </div>
        </div>
      </section>
    </div>
  )
}
