import { IoLogoWhatsapp } from "react-icons/io5";
import Img from '../assets/images/Group 48095409.svg'

export default function GetQuote() {
  return (
  <section className="w-full bg-white h-screen flex Quote items-center  ">
<div className="w-1/2 Quote-1 flex flex-col pl-28 gap-4  ">
<h1 className="text-4xl  text-left font-bold w-full ">
Fasilitas Mewah yang memanusiakan manusia
</h1>
<p className=" text-[#6c87ae] w-full ">
Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif).
</p>
<div><button className="rounded-full items-start bg-gradient-to-r from-[#3A8EF6] to-[#6F3AFA] font-lg font-semiBold text-white p-2 flex gap-1 flex-row px-6"><IoLogoWhatsapp className="mt-1 "/>
Get Quote</button></div>
</div>
<div className="flex justify-center Quote-2 w-1/2">
   {/* <img src="https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg" className= "w-20 z-10 h-20 bg-cover rounded-full"/>
   
  <div className="rounded-full border-2 border-dashed border-[#506cf8] outline-dashed outline-2 outline-[#506cf8]  outline-offset-[60px] border-sky-500 flex justify-center items-center w-80 h-80">
  <img src="https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg" className= "w-20 z-10 h-20 ml-[-4rem] rounded-full"/>
<div className="rounded-full w-60 h-60  bg-[#eef0fe]"></div>
</div>
<img src="https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg" className= "w-20 z-10 h-20 mt-44  rounded-full"/> */}
<img src={Img} alt="My Image" />;
</div>
  </section>
  )
}
