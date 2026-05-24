import React from 'react'

export default function ResponseTable({responses}){
  return (
    <div className="table-wrap">
      <h2>Responses ({responses.length})</h2>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Member Name</th>
            <th>Answer</th>
            <th>Date/Time</th>
          </tr>
        </thead>
        <tbody>
          {responses.length===0 && (
            <tr><td colSpan="4" className="muted">No responses yet</td></tr>
          )}
          {responses.map((r, idx)=> (
            <tr key={idx}>
              <td>{responses.length - idx}</td>
              <td>{r.name}</td>
              <td>{r.answer}</td>
              <td>{r.datetime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
