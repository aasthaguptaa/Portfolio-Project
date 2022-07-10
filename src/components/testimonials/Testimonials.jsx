import React from 'react'
import "./Testimonials.scss"

export default function Testimonials() {

    const data = [
        {
            id: 1,
            name: "Barun Das",
            title: "Senior System Analyst at IBM",
            img: "assets/BarunDa.png",
            desc:
                "Astha is a quick learner. She has picked up many new technologies in frontend part. I think with this learning ability she should also start to take the ownership. Wish her a bright career ahead.",
        },
        {
            id: 2,
            name: "ManuKoushik Chanda",
            title: "Management Consulting Analyst at Accenture",
            img: "assets/ManuSir.png",
            desc:
                "Zeal and perseverance to achieve great things is one of the several special qualities, Astha possesses. Her agile learning capability provides a great competitive edge to whichever team she works in and also aids a lot in achieving wonderful progress in stipulated time. I wish her all the best in all her future endeavors.",
            featured: false,
        },
        {
            id: 3,
            name: "Naseem Ahmad",
            title: "Developer at LearningMate",
            img:
                "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            desc:
                "A creative genius personality. I’ve had the pleasure of knowing Astha for the last one year, during which we have worked on multiple start up projects & Innovation. Above all, I was impressed with Astha’s ability in time management & project control. And of course, her project planning & control would be a true asset for any position which would require strategic or leadership skills and it comes with my heartfelt recommendation.",
        },
        {
            id: 4,
            name: "Mrinal Pal",
            title: "Advisory System Analyst at IBM",
            img: "assets/MrinalDa.png",
            desc:
                "Astha has developed the html report template for DMA DQX. She has done it very well. She needs to learn Carbon & React in-depth.",
        }
    ];

    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className='container'>
            {data.map((d) => (
                <div className = {d.featured ? "card featured" : "card"}>
                    <div className='top'>
                        <img
                            className="user"
                            src={d.img}
                            alt=""
                        />
                    </div>
                    <div className='center'>
                    {d.desc}
                    </div>
                    <div className='bottom'>
                    <h3> {d.name}</h3>
                    <h4 className=''>{d.title}</h4>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
