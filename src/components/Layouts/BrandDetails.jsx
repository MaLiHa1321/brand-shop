import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Phone from '../../brand/Phone';
import Laptop from '../../brand/Laptop';
import Table from '../../brand/Table';
import Headphone from '../../brand/Headphone';

const BrandDetails = () => {
 
    const loaderData = useLoaderData()
    const brandData = loaderData.brand;
    const {id} = useParams();
    const brand = brandData.find(brand => brand.id === parseInt(id))
    const targetBrand = brand.brand_name;
    const [phoneData, setPhoneData] = useState(null);
    useEffect(() => {
      // Fetch phone data when the component mounts
      fetch('http://localhost:5000/phones')
          .then((response) => response.json())
          .then((data) => {
              setPhoneData(data);
          });
  }, []);
    // const {brand_name,slider_image1,slider_image2,slider_image3,slider_image4} =brand
    return (
        <div>
            <h3 className='text-2xl font-bold'>{brand.brand_name}</h3>

            {/* slider  */}

            <div>
            <div className="carousel w-full h-[500px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/Rp0rXNW/laptop.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/LrX7sG8/headphone.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/gvrQjh6/tablet.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/cwvKH1h/mobile.png" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  </div>

  {/* phone type */}
  <div> 
    <h2 className='text-2xl font-bold'>Phone</h2>
                {phoneData ? 
                  <Phone phoneData={phoneData} targetBrand={targetBrand} />
                 : (
                    <p>Loading phone data...</p>
                )}
            </div>
  {/* laptop */}
  <div>
  <h2 className='text-2xl font-bold'>Laptop</h2>
  {phoneData ? 
                  <Laptop phoneData={phoneData} targetBrand={targetBrand} />
                 : (
                    <p>Loading phone data...</p>
                )}
  
  </div>
  {/* tablet */}

<div>
<h2 className='text-2xl font-bold'>Tablets</h2>
                {phoneData ? 
                  <Table phoneData={phoneData} targetBrand={targetBrand} />
                 : (
                    <p>Loading phone data...</p>
                )}
  
</div>
{/* headphone */}
<div>
<h2 className='text-2xl font-bold'>Tablets</h2>
                {phoneData ? 
                  <Headphone phoneData={phoneData} targetBrand={targetBrand} />
                 : (
                    <p>Loading phone data...</p>
                )}

   
</div>

            
        </div>
    );
};

export default BrandDetails;