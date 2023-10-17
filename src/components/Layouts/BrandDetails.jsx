import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Phone from '../../brand/Phone';
import Laptop from '../../brand/Laptop';
import Table from '../../brand/Table';
import Headphone from '../../brand/Headphone';

const BrandDetails = () => {
    const loaderData = useLoaderData()
    const brandData = loaderData.brand;
    const {id} = useParams();
    const brand = brandData.find(brand => brand.id === parseInt(id))
    const {brand_name,slider_image1,slider_image2,slider_image3,slider_image4} =brand
    return (
        <div>
            <h3>{brand_name}</h3>

            {/* slider  */}

            <div>
            <div className="carousel w-full h-[500px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={slider_image1} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={slider_image2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={slider_image3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={slider_image4} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  </div>

  {/* phone type */}
  <div>
    <Phone></Phone>
  </div>
  {/* laptop */}
  <div>
    <Laptop></Laptop>
  </div>
  {/* tablet */}

<div>
    <Table></Table>
</div>
{/* headphone */}
<div>
    <Headphone></Headphone>
</div>

            
        </div>
    );
};

export default BrandDetails;