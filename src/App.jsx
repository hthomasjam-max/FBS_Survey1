import React, {useState, useEffect} from 'react'
import ResponseTable from './ResponseTable'

const QUESTION = 'Are you interested in participating in the Bible Study?'

export default function App(){
  const [name, setName] = useState('')
  const [responses, setResponses] = useState([])

  useEffect(()=>{
    try{
      const raw = localStorage.getItem('bbs_responses')
      if(raw) setResponses(JSON.parse(raw))
    }catch(e){
      console.error(e)
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem('bbs_responses', JSON.stringify(responses))
  }, [responses])

  function addResponse(answer){
    const newResp = {
      name: name.trim() || 'Anonymous',
      question: QUESTION,
      answer,
      datetime: new Date().toLocaleString()
    }
    setResponses(prev=>[newResp, ...prev])
    setName('')
  }

  function clearResponses(){
    if(window.confirm('Clear all responses?')) setResponses([])
  }

  function exportCSV(){
    const headers = ['No.','Member Name','Answer','Date/Time']
    const rows = responses.map((r, idx)=>[idx+1, r.name, r.answer, r.datetime])
    const csv = [headers, ...rows].map(r=>r.map(c=>`"${String(c).replace(/"/g,'""')}"`).join(',')).join('\r\n')
    const blob = new Blob([csv], {type: 'text/csv;charset=utf-8;'})
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'bible-study-responses.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="container">
      <h1>WhatsApp Bible Study Survey</h1>
      <div className="card">
        <label className="label">Member Name</label>
        <input className="text" value={name} onChange={e=>setName(e.target.value)} placeholder="Enter member name" />

        <p className="question">{QUESTION}</p>

        <div className="buttons">
          <button className="btn yes" onClick={()=>addResponse('Yes')}>Yes</button>
          <button className="btn no" onClick={()=>addResponse('No')}>No</button>
        </div>

        <div className="actions">
          <button className="small" onClick={exportCSV} disabled={responses.length===0}>Export CSV</button>
          <button className="small" onClick={clearResponses} disabled={responses.length===0}>Clear All</button>
        </div>
      </div>

      <ResponseTable responses={responses} />
    </div>
  )
}
