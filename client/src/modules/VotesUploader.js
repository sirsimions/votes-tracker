import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

function VotesUploader( {user} ) {
    const [county, setCounty] = useState('')
    const [pollingStation, setPollingStation] = useState('')
    const [votes, setVotes] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    function handleSubmit(e) {
        setIsLoading(true)
        fetch('/poll', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                county: county,
                pollingStation: pollingStation,
                votes: votes
            })
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setIsLoading(true)
        })
        
    }
    return (

        <>
        <div class="container">
                <div class="row justify-content-center" id='frame' >
                    <div class="col-md-5">
                        <div class="card">
                            <h2 class="card-title text-center">Votes Upload Form <a href="http://opensnippets.com"></a></h2>
                            <div class="card-body py-md-4"id='form'>
                                <form _lpchecked="1" className='form' onSubmit={handleSubmit}>
                                    <div class="form-group">
                                        <input value={county} onChange={(e)=>setCounty(e.target.value)} type="text" class="form-control" id="name" placeholder="County" />
                                    </div>
                                    <div class="form-group">
                                        <input value={pollingStation} onChange={(e)=>setPollingStation(e.target.value)} type="text" class="form-control" id="name2" placeholder="Polling Station" />
                                    </div>
                                    <div class="form-group">
                                        <input value={votes} onChange={(e)=>setVotes(e.target.value)} type="number" class="form-control" placeholder="Number of votes" />
                                    </div>
                                    <button class="btn btn-primary" disabled={isLoading}>Upload</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default VotesUploader;