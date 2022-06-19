import React, {Component} from 'react'

const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
    )
  }

  const TableBody = (props) => {
 
    // const {characterData, removeCharacter} = props

    const rows = props.characterData.map((row, index) => {
        return (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
            <td>
    <button onClick={() => props.removeCharacter1(index)}>Delete</button>
  </td>

          </tr>
        )
      })
    

    return (
      <tbody>
        {rows}
        
      </tbody>
    )
  }
  

  const Table = (props) => {
    const {characterData, removeCharacter} = props
  
    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter1={removeCharacter} />
      </table>
    )
  }
  

export default Table
