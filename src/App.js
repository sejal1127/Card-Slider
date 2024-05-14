import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'

function App() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    
    <div className=" w-1/3 m-auto">
      <h1 className="text-center mt-8 text-4xl font-semibold ">Axiom's Interns Information</h1>
    <div className="mt-10">
    <Slider {...settings}>
      {data.map((d) => (
        <div className="bg-white h-[500px] text-black rounded-xl flex">
          <div className="rounded-t-xl bg-indigo-500 flex justify-center items-center">
            <img src={d.img} alt="" className="h-44 w-44 rounded-full p-4" />
          </div>

          <div className='flex flex-col justify-center items-center gap-4  font-semibold '  >
            <p className="text-3xl p-4">Axiom TechGuru Pvt. Ltd.</p>
            <p className="text-2xl pt-4">Name: {d.name}</p>
            <p className="text-2xl">Date of Birth: {d.dob}</p>
            <p className="text-2xl">Address: {d.address}</p>
            <p className="text-2xl">Joining Date: {d.join}</p>
          </div>
        </div>
      ))}
      </Slider>
    </div>
  </div>
   
  );
}

const data = [
  {
    name: "Rahul Borkar",
    img: "/images/boy1_img.png",
    dob: "02-2-2001",
    address: "It park, Nagpur-440012",
    join: "12-2-2017",
  },
  {
    name: "Sejal Tirpude",
    img: "/images/girl_img.jpg",
    dob: "20-8-2001",
    address: "Hingna, Nagpur-442233",
    join: "12-8-2021",
  },
  {
    name: "Himanshu Kasar",
    img: "/images/boy2_img.png",
    dob: "02-2-2001",
    address: "Digori, Nagpur-442203",
    join: "12-10-2021",
  },
  {
    name: "Sahil Rangari",
    img: "/images/user_boy.jpeg",
    dob: "02-2-2001",
    address: "Manewada, Nagpur-440020",
    join: "12-11-2021",
  },
  {
    name: "Rashmi Nagose",
    img: "/images/hande-ercel-125917-1.jpeg",
    dob: "02-2-2003",
    address: "Lokmanya Nagar, Nagpur-440016",
    join: "16-8-2021",
  },
  {
    name: "Rohit Sawaitul",
    img: "/images/boy1_img.png",
    dob: "10-12-1998",
    address: "Gayatri Nagar, Nagpur- 440022",
    join: "2-8-2021",
  },
  {
    name: "Saloni Bais",
    img: "/images/comment-author-3.jpg",
    dob: "02-5-2003",
    address: "Sitaburdi, Nagpur-441222",
    join: "5-2-2024",
  },
  {
    name: "Aditya Sawarkar",
    img: "/images/Tom-Cruise.jpg",
    dob: "02-2-2000",
    address: "Besa, Nagpur-445520",
    join: "24-2-2022",
  },
  {
    name: "Aarti Patil",
    img: "/images/comment-author-1.jpg",
    dob: "2-12-1999",
    address: "Swalambi Nagar, Nagpur-442222",
    join: "15-5-2023",
  },
  {
    name: "Mohit Sendurkar",
    img: "/images/comment-author-2.jpg",
    dob: "05-5-2002",
    address: "Vaishali nagar, Nagpur-440028",
    join: "12-2-2024",
  },
];

export default App;
