import React from 'react'
import firebase from 'firebase';

export default function IdeaForm() {

  function createIdea() {
    firebase.database().ref('ideas/' + Date.now()).set({
      id: 1,
      date: Date.now(),
      shortName: document.querySelector('#IdeaName').value,
      description: document.querySelector('#IdeaDescription').value,
      rating: document.querySelector('#IdeaRating').value,
      category: document.querySelector('#IdeaCategory').value,
      expectations: document.querySelector('#IdeaExpectations').value,
    });
  }

  return (
    <form className="col-lg-8 col-12 my-5">
      <div className="form-group">
        <label>Idea name</label>
        <input type="text" id="IdeaName" className="form-control" placeholder='"App that is going to work instead of me"' />
      </div>
      <div className="d-flex flex-wrap">
        <label>Idea category</label>
        <select id="IdeaCategory" className="form-control" >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div className="form-group">
        <label>Idea description</label>
        <textarea className="form-control" rows="3" id="IdeaDescription" placeholder='"This app is going to work instead of me while i take a break and play video games"'></textarea>
      </div>
      <div className="form-group">
        <label>Idea expectations</label>
        <textarea className="form-control" id="IdeaExpectations" rows="3" placeholder='"Makes money by doing my job/work"'></textarea>
      </div>
      <div className="form-group">
        <label>Rate idea</label>
        <input className="form-control" id="IdeaRating" type="number" min="0" max="10" placeholder="0-10" />
      </div>
      <input type="button" className="btn btn-primary" value="Create idea" onClick={() => { createIdea() }} />
    </form>
  )
}
