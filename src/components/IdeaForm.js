import React from 'react'

export default function IdeaForm() {
  return (
    <div>
      <div className="form-group">
        <label>Idea name</label>
        <input type="text" className="form-control" placeholder='"App that is going to work instead of me"' />
      </div>
      <div className="d-flex flex-wrap">
        <label>Idea category</label>
        <select className="form-control" >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div className="form-group">
        <label>Idea description</label>
        <textarea className="form-control" rows="3" placeholder='"This app is going to work instead of me while i take a break and play video games"'></textarea>
      </div>
      <div className="form-group">
        <label>Idea expectation</label>
        <textarea className="form-control" rows="3" placeholder='"Makes money by doing my job/work"'></textarea>
      </div>
      <input type="button" className="btn btn-primary" value="Submit idea" />
    </div>
  )
}
