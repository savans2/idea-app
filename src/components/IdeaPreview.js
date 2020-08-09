import React from 'react'

export default function IdeaPreview(props) {

  let date = new Date(props.idea.date)
  date = `${date.getDay()}.${date.getDate()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  console.log(props.idea.shortName ? 'a' : 'b');

  return (
    <div className="bg-light my-3 col-12">
      <div className="p-3">
        <div className="blockquote">
          <div className="d-flex flex-wrap justify-content-between">
            <p className="mb-0">{props.idea.shortName ? props.idea.shortName : 'No idea is selected ☹'}</p>
            <p className="blockquote-footer mb-1 pl-2"><em>{props.idea.date ? date : '00.00.0000 00:00'}</em></p>
          </div>
          <p className="blockquote-footer mb-1 pl-2">Category: <em>{props.idea.category ? props.idea.category : 'none'}</em></p>
          <p className="blockquote-footer mb-1 pl-2">Rating: <em>{props.idea.rating ? props.idea.rating : 0}/10</em></p>
        </div>
        <div className="d-flex flex-wrap my-5">
          <div className="col-md-6">
            <h6>Description:</h6>
            <p className="pl-2">
              {props.idea.description ? props.idea.description : 'none'}
            </p>
          </div>
          <div className="col-md-6">
            <h6>Expectations:</h6>
            <p className="pl-2">
              {props.idea.expectations ? props.idea.expectations : 'none'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}