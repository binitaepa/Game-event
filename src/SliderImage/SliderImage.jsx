
import img1 from '../assets/Slide1.jpg'
import img2 from '../assets/Slide2.jpg'
import img3 from '../assets/Slide3.jpg'
import img4 from '../assets/Slide4.jpg'

const SliderImage = () => {
    return (
        <div className="mb-10"> 
           <div className="flex text-center items-center justify-center mt-5 mb-5">
           <h2 className="text-3xl  text-amber-500 font-bold">Some of our <span className="text-purple-600 italic">Successful</span>  Event pictures</h2>
           </div>
         <div className='items-center h-1/2 flex align-middle justify-center'>
         <div className="carousel w-3/5 h-1/2">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
         </div>
        </div>
    );
};

export default SliderImage;