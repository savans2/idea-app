import React, { useState, useEffect } from 'react'
import firebase from 'firebase';
import IdeaPreview from './IdeaPreview';
import IdeaForm from './IdeaForm';
import { chunkObj } from '../utility/helperFunctions';

export default function IdeaList() {
  const [ideas, setIdeas] = useState([]);
  const [updateIdea, setUpdateIdea] = useState({ update: false, key: '' });
  const [ideaPage, setIdeaPage] = useState(1);

  useEffect(() => {
    firebase.database().ref('ideas/')
      .on('value', function (snapshot) {
        setIdeas(chunkObj(snapshot.val(), 10));
      });
  }, []);

  function renderIdeas() {
    if (ideas && ideas.length !== 0) {
      return ideas[ideaPage - 1].map((idea, i) => {
        return (
          <li className={`list-group-item d-flex justify-content-between ${i === 0 ? 'active' : ''}`} key={idea.id} >
            <span>{idea.shortName}</span>
            <div className="d-flex align-items-center">
              <span
                style={{ height: '31px', width: '32px' }}
                className="user-select-none border border-success mx-1 p-1"
                onClick={() => {
                  setUpdateIdea({ update: !updateIdea.update, idea })
                }}>
                {updateIdea.update ? '❌' : '✏'}
              </span>
              <span style={{ height: '31px', width: '32px' }} className="user-select-none border border-danger border mx-1 p-1" onClick={() => { deleteIdea(idea.id) }}>🗑</span>
            </div>
          </li >
        );
      });
    }

  }

  function deleteIdea(id) {
    firebase.database().ref('ideas/' + id).remove();
  }

  return (
    <div className="w-100 d-flex flex-wrap">
      <div className="col-12 col-lg-4 my-5">
        <ul className="list-group">
          <p className="mb-2">List of ideas</p>
          {renderIdeas()}
        </ul>
        <div className="my-5 mx-auto">
          <input className="btn btn btn-outline-primary mx-1" type="button" value="&laquo;" />
          <input className="btn btn-primary mx-1" type="button" value={ideaPage - 1} disabled={ideaPage - 1 <= 0 ? true : false} onClick={() => setIdeaPage(ideaPage - 1)} />
          <input className="btn btn-primary mx-1" type="button" value={ideaPage} disabled />
          <input className="btn btn-primary mx-1" type="button" value={ideaPage + 1} disabled={ideaPage + 1 > ideas.length ? true : false} onClick={() => setIdeaPage(ideaPage + 1)} />
          <input className="btn btn btn-outline-primary mx-1" type="button" value="&raquo;" />
        </div>
      </div>
      <IdeaForm updateIdea={updateIdea} />
      <IdeaPreview />
    </div>
  )
}
