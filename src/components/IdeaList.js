import React, { useState, useEffect } from 'react'
import firebase from 'firebase';
import IdeaPreview from './IdeaPreview';
import IdeaForm from './IdeaForm';

export default function IdeaList() {
  const [ideas, setIdeas] = useState();

  useEffect(() => {
    firebase.database().ref('ideas/')
      .on('value', function (snapshot) {
        setIdeas(snapshot.val());
      });
  }, []);

  function renderIdeas() {
    if (ideas) {
      return Object.keys(ideas).map((key, i) => {
        return (
          <li className={`list-group-item d-flex justify-content-between ${i === 0 ? 'active' : ''}`} key={key} >
            <span>{ideas[key].shortName}</span>
            <div className="d-flex align-items-center">
              <span style={{ height: '31px', width: '32px' }} className="user-select-none border border-success mx-1 p-1" onClick={() => { updateIdea(key) }}>✏</span>
              <span style={{ height: '31px', width: '32px' }} className="user-select-none border border-danger border mx-1 p-1" onClick={() => { deleteIdea(key) }}>🗑</span>
            </div>
          </li >);
      })
    }
  }

  function updateIdea(key) {
    firebase.database().ref('ideas/' + key).update({
      // update properties
    })
  }

  function deleteIdea(key) {
    firebase.database().ref('ideas/' + key).remove();
  }

  return (
    <div className="w-100 d-flex flex-wrap">
      <div className="col-12 col-lg-4 my-5">
        <ul class="list-group">
          <p className="mb-2">List of ideas</p>
          {renderIdeas()}
        </ul>
        <div className="my-5 mx-auto">
          <input className="btn btn btn-outline-primary mx-1" type="button" value="&laquo;" />
          <input className="btn btn-primary mx-1" type="button" value={0} />
          <input className="btn btn-primary mx-1" type="button" value={1} />
          <input className="btn btn-primary mx-1" type="button" value={2} />
          <input className="btn btn btn-outline-primary mx-1" type="button" value="&raquo;" />
        </div>
      </div>
      <IdeaForm />
      <IdeaPreview />
    </div>
  )
}
