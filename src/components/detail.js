import React from "react";
import img1 from "../img/exmpl.jpg"


const Carddetail = ({title,img,description}) =>(
    <div className="bg-neutral-900 rounded-xl text-white flex flex-col items-start p-8  pb-9 text-start shadow-lg mb-20">
        
        <h1 className="font-medium text-xl mb-7">{title}</h1>
        <div className="flex flex-col md:flex-row "> 
        <img src={img} className="w-full md:w-96 md:h-56 rounded-2xl"></img>
        <p className="mt-4 md:ml-36 md:pr-96 font-normal text-start  text-neutral-400 leading-relaxed ">{description}</p>
        </div>
        
    </div>
)

const Detaildes = [
    {
        title : "project 1",
        img : img1,
        description : "lorem ipsum dolor sit amet ",
    },
    {
        title : "project 1",
        img : img1,
        description : "lorem ipsum dolor sit amet",
    },
    {
        title : "project 1",
        img : img1,
        description : "lorem ipsum dolor sit amet",
    },
    
]



const detail = ()=>{
    return (
        <section className="flex flex-col text-center item-center bg-black w-full pt-20 pb-16">
            <div className=" px-4 md:px-16">
                {Detaildes.map((detail)=>(
                    <Carddetail
                    title={detail.title}
                    img ={detail.img}
                    description={detail.description}
                    />

                ))}
            <button className="bg-neutral-500 h-14 w-32 rounded-2xl text-white font-bold">MORE PROJECT</button>
            </div>
        </section>
    )
}

export default detail;