import React from 'react'
import Card from './card'
import './style/index.css'
import StateCard from './state/state'

const App = () => {
    const data = [
        {
            id: 1,
            title: "Next.js",
            category: "Fullstack",
            image: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Fqk9g5hsrut.ufs.sh%2Ff%2Fxu965PmyvPo041nrlbd9utCZemPzyoJSOTAbr18IvF0MYQ6H&w=1920&q=75&dpl=dpl_9sBEKp6Vtq4rX75YeLkgkG6tPcnw"
        },
        {
            id: 2,
            title: "React.js",
            category: "Frontend",
            image: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Fqk9g5hsrut.ufs.sh%2Ff%2Fxu965PmyvPo0iUp6fYhocXUlvFEwuZWOT81zHSksDrGxN4f9&w=1920&q=75&dpl=dpl_9sBEKp6Vtq4rX75YeLkgkG6tPcnw"
        },
        {
            id: 3,
            title: "Node.js",
            category: "Backend",
            image: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Fqk9g5hsrut.ufs.sh%2Ff%2Fxu965PmyvPo0Dt6eWDpQTl9a4CLgOmnEFkfdiNbwx068Xc3o&w=1920&q=75&dpl=dpl_9sBEKp6Vtq4rX75YeLkgkG6tPcnw"
        }
    ]
    
    return (
        <div>
            <code className='mt-5   ms-4 fs-3'>Components</code>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 20
                }}
                className='app'
            >
                {/* --- Componentning contentini propslar orqali berish usuli --- */}
            
                {/* <Card
                    title={"Next.js"}
                    category={"Fullstack"}
                    image={
                        "https://www.sammi.ac/_next/image?url=https%3A%2F%2Fqk9g5hsrut.ufs.sh%2Ff%2Fxu965PmyvPo041nrlbd9utCZemPzyoJSOTAbr18IvF0MYQ6H&w=1920&q=75&dpl=dpl_9sBEKp6Vtq4rX75YeLkgkG6tPcnw"
                    }
                />
                <Card
                    title={"React.js"}
                    category={"Frontend"}
                    image={
                        "https://www.sammi.ac/_next/image?url=https%3A%2F%2Fqk9g5hsrut.ufs.sh%2Ff%2Fxu965PmyvPo0iUp6fYhocXUlvFEwuZWOT81zHSksDrGxN4f9&w=1920&q=75&dpl=dpl_9sBEKp6Vtq4rX75YeLkgkG6tPcnw"
                    }
                />
                <Card
                    title={"Node.js"}
                    category={"Backend"}
                    image={
                        "https://www.sammi.ac/_next/image?url=https%3A%2F%2Fqk9g5hsrut.ufs.sh%2Ff%2Fxu965PmyvPo0Dt6eWDpQTl9a4CLgOmnEFkfdiNbwx068Xc3o&w=1920&q=75&dpl=dpl_9sBEKp6Vtq4rX75YeLkgkG6tPcnw"
                    }
                />*/} {/* Bu usul component'ga props'larni takrorlash orqali berish usuli */}
                {/* --- Componentning contentini data orqali berish usuli --- */}
            
                {
                    // data.map((item) => {
                    data.map(({id, title, category, image}) => {
                        return (
                            // <Card
                            //     key={item.id}
                            //     title={item.title}
                            //     category={item.category}
                            //     image={item.image}
                            // />
                            <Card
                                key={id}
                                title={() =>title}
                                category={{category: category}}
                                image={image}
                            />
                        )
                    })
                }
            </div>
            <hr />

            <code className='mt-5 ms-4 fs-3'>Class component:</code>
            <div
                className='app' 
                style={{
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(3, 1fr)', 
                    gap: 20
                }}
            >
                {
                    data.map(({id, title, category, image}) => {
                        return (
                            <StateCard 
                                key={id}
                                title={title}
                                category={category}
                                image={image}
                            />
                        )
                    })
                }
            </div>
            <hr />
        </div>
    )
}

export default App