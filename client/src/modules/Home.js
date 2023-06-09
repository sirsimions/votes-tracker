import React from 'react'
import Card from 'react-bootstrap/Card';
import '../App.css'

function Home({ data }) {
    // const arr = Object.entries(data).map(([name, obj]) => ({ name, ...obj }))
    console.log(data)

    let arr = data.map((det) => { return (det.votes) })
    console.log(arr)
    const sum = arr.reduce((result, number) => result + number, 0);

    return (

        <>
            <div className='log'></div>
            <div className='acc'>
                <div className='txt'>Live Votes Tracking</div>
            </div>
            

            <div className='crd'>
            <Card >
                <div className='live'><Card.Header as="h5">Live</Card.Header></div>
                <Card.Body>
                   <div className='totit'><Card.Title>Counted Number of votes</Card.Title></div> 
                   <div className='tot'>Total: {sum}</div> 
                    
                </Card.Body>
            </Card>
            </div>
            

        </>
    )
}
export default Home;