import React from 'react'
import Heading from './Heading';
import Card from './Card';



const data = [
    {
        id: 0,
        title:"Todo List",
        desc: "A  React & Typescript based app for managing and organizing your tasks efficiency.",
        img: "/Project _1.png",
        tags : ["React", "Node", "Css", "Typescript"]
    },
    
    {
        id: 1,
        title:"Countdown Timer",
        desc: "A Next js & Typescript powered website to track time with an interactive countdown feature.",
        img: "/Project _2.gif",
        tags : ["Next.js", "Node", "Css", "Typescript"],
    },
    
    {
        id: 2,
        title:"Weather Widget",
        desc: "A Next js & Typescript powered tool for fetching and displaying real time weather data.",
        img: "/Project_3.jpg",
        tags : ["Next.js", "Node", "Css", "Typescript"],
    },
    
    {
        id: 3,
        title:"Currency Converter Project",
        desc: "A Simple HTML and Typescript powered tool for converting currencies with real rates.",
        img: "/Project _4.gif",
        tags : ["HTML", "Node", "Css", "Typescript"],
    },
    
    {
        id: 4,
        title:"Static Interactive Resume",
        desc: "A Typescript based interactive Resume built with HTMl and Css, Allow user to showcase thier skills dynamically.",
        img: "/Project _5.png",
        tags : ["HTML", "Node", "Css", "Typescript"],
    },
    
    {
        id: 5,
        title:"Simple Calculator",
        desc: "A basic HTML CSS & Typescript calculator for performing essential Arithmetic Operation.",
        img: "/Project_6.png",
        tags : ["HTML", "Node", "Css", "Typescript"],
    },
        
    ]
const Project = () => {
  return (
    <div id='project' className='container pb-32'>
    <Heading title='My Projects'/>
    <br />
    <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center' >
     {data.map((el) => (<Card 
     key={el.id}
     title={el.title}
     desc ={el.desc}
     img={el.img}
     tags={el.tags}
     />))}
    </div>
      
    </div>
  )
}

export default Project
