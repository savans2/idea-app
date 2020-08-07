import React from 'react'

export default function IdeaList() {
  return (
    <div className="col-12 col-lg-4">
      <ul class="list-group">
        <p className="mb-2">List of ideas</p>
        <li class="list-group-item active">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Morbi leo risus</li>
        <li class="list-group-item">Porta ac consectetur ac</li>
        <li class="list-group-item">Vestibulum at eros</li>
        <li class="list-group-item">Vestibulum at eros</li>
        <li class="list-group-item">Vestibulum at eros</li>
        <li class="list-group-item">Vestibulum at eros</li>
        <li class="list-group-item">Vestibulum at eros</li>
        <li class="list-group-item">Vestibulum at eros</li>
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
