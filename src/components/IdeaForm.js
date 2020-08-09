import React, { useEffect, useState } from 'react'
import firebase from 'firebase';

export default function IdeaForm(props) {
  const [categories, setCategories] = useState();

  useEffect(() => {
    firebase.database().ref('categories/')
      .on('value', function (snapshot) {
        setCategories(snapshot.val());
      });
  }, []);

  function createIdea() {
    const time = Date.now();
    firebase.database().ref('ideas/' + time).set({
      id: time,
      date: time,
      shortName: document.querySelector('#IdeaName').value,
      description: document.querySelector('#IdeaDescription').value,
      rating: document.querySelector('#IdeaRating').value,
      category: document.querySelector('#IdeaCategory').value,
      expectations: document.querySelector('#IdeaExpectations').value,
    });
  }

  function updateIdea(id) {
    firebase.database().ref('ideas/' + id).update({
      shortName: document.querySelector('#IdeaName').value,
      description: document.querySelector('#IdeaDescription').value,
      rating: document.querySelector('#IdeaRating').value,
      category: document.querySelector('#IdeaCategory').value,
      expectations: document.querySelector('#IdeaExpectations').value,
    })
  }

  function renderCategories() {
    return categories.map((category, i) => {
      return <option
        selected={(props.updateIdea.update && props.updateIdea.idea.category === category) ? true : false}
        key={category}
      >{category}</option>
    })
  }

  return (
    <form className="col-lg-8 col-12 my-5">
      <div className="form-group">
        <label>Idea name</label>
        <input
          type="text"
          id="IdeaName"
          className="form-control"
          placeholder='"App that is going to work instead of me"'
          defaultValue={props.updateIdea.update ? props.updateIdea.idea.shortName : ''}
        />
      </div>
      <div className="d-flex flex-wrap">
        <label>Idea category</label>
        <select id="IdeaCategory" className="form-control" >
          {categories ? renderCategories() : ''}
        </select>
      </div>
      <div className="form-group">
        <label>Idea description</label>
        <textarea
          className="form-control"
          rows="3"
          id="IdeaDescription"
          placeholder='"This app is going to work instead of me while i take a break and play video games"'
          defaultValue={props.updateIdea.update ? props.updateIdea.idea.description : ''}
        />
      </div>
      <div className="form-group">
        <label>Idea expectations</label>
        <textarea
          className="form-control"
          id="IdeaExpectations"
          rows="3"
          placeholder='"Makes money by doing my job/work"'
          defaultValue={props.updateIdea.update ? props.updateIdea.idea.expectations : ''}
        />
      </div>
      <div className="form-group">
        <label>Rate idea</label>
        <input
          className="form-control"
          id="IdeaRating"
          type="number"
          min="0"
          max="10"
          placeholder="0-10"
          defaultValue={props.updateIdea.update ? props.updateIdea.idea.rating : ''}
        />
      </div>
      {
        props.updateIdea.update ?
          <input type="button" className="btn btn-success" value="Update idea" onClick={() => { updateIdea(props.updateIdea.idea.id) }} />
          :
          <input type="button" className="btn btn-primary" value="Create idea" onClick={() => { createIdea() }} />
      }
    </form>
  )
}
