import React from 'react'

export default function IdeaPreview() {
  return (
    <div className="bg-light my-3 col-12">
      <div className="p-3">
        <div className="blockquote">
          <div className="d-flex flex-wrap justify-content-between">
            <p className="mb-0">1 Idea name that is a bit longer bla bla hey ho ha hi</p>
            <p className="blockquote-footer mb-1 pl-2"><em>02.10.2020</em></p>
          </div>
          <p className="blockquote-footer mb-1 pl-2">Category: <em>Work</em></p>
          <p className="blockquote-footer mb-1 pl-2">Rating: <em>7/10</em></p>
        </div>
        <div className="d-flex flex-wrap my-5">
          <div className="col-md-6">
            <h6>Description:</h6>
            <p className="pl-2">
              Lorem ipsum dolor sit amet conse
              ctetur adipisicing elit. Perferendis excepturi, ipsa
              molestiae ducimus nobis,
              inventore quos, id accusantium veniam
              saepe asperiores porro dignissimos dolore praese
              ntium ex veritatis alias error amet.
            </p>
          </div>
          <div className="col-md-6">
            <h6>Expectations:</h6>
            <p className="pl-2">
              Lorem ipsum dolor sit amet conse
              ctetur adipisicing elit. Perferendis excepturi, ipsa
              molestiae ducimus nobis,
              inventore quos, id accusantium veniam
              saepe asperiores porro dignissimos dolore praese
              ntium ex veritatis alias error amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}