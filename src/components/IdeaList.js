import React from 'react'

export default function IdeaList() {
  return (
    <div className="col-12 col-lg-4">
      <ul class="list-group">
        <p className="mb-2">List of ideas</p>
        <li className="list-group-item d-flex justify-content-between active">
          <span>Morbi leo risus</span>
          <div className="d-flex align-items-center">
            <span style={{ height: '31px', width: '32px' }} className="user-select-none border border-success mx-1 p-1">✏</span>
            <span style={{ height: '31px', width: '32px' }} className="user-select-none border border-danger border mx-1 p-1">🗑</span>
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Porta ac consectetur ac</span>
          <div className="d-flex align-items-center">
            <span style={{ height: '31px', width: '32px' }} className="user-select-none border border-success mx-1 p-1">✏</span>
            <span style={{ height: '31px', width: '32px' }} className="user-select-none border border-danger border mx-1 p-1">🗑</span>
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Dapibus ac facilisis in</span>
          <div className="d-flex align-items-center">
            <span style={{ height: '31px', width: '32px' }} className="user-select-none border border-success mx-1 p-1">✏</span>
            <span style={{ height: '31px', width: '32px' }} className="user-select-none border border-danger border mx-1 p-1">🗑</span>
          </div>
        </li>
      </ul>
      <div className="my-5 mx-auto">
        <input className="btn btn btn-outline-primary mx-1" type="button" value="&laquo;" />
        <input className="btn btn-primary mx-1" type="button" value={0} />
        <input className="btn btn-primary mx-1" type="button" value={1} />
        <input className="btn btn-primary mx-1" type="button" value={2} />
        <input className="btn btn btn-outline-primary mx-1" type="button" value="&raquo;" />
      </div>
    </div>
  )
}
