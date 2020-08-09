import React from 'react'
import firebase from 'firebase';

export default function EditCategories(props) {

  function addCategory() {
    let tempArray = props.categories === null ? [] : props.categories
    firebase.database().ref('categories/').set([
      ...tempArray,
      document.querySelector("#NewCategory").value
    ])
  }

  function updateCategory() {
    let tempArray = props.categories;
    tempArray[tempArray.indexOf(props.selectedCategory.value)] = document.querySelector("#NewCategory").value;
    firebase.database().ref('categories/').set(tempArray)
  }

  function deleteCategory() {
    let tempArray = props.categories;
    tempArray.splice(tempArray.indexOf(props.selectedCategory.value), 1);
    firebase.database().ref('categories/').set(tempArray)
  }

  return (
    <div className="form-group bg-light border p-3 w-100">
      <p className='mb-2'>Update or delete currently selected category or add new one</p>
      <div className="d-flex flex-wrap">
        <input type="text" id="NewCategory" className="form-control my-2" placeholder='New category name' />
        <input type="button" className="btn btn-success mx-1" value='✏' onClick={() => { updateCategory() }} />
        <input type="button" className="btn btn-info mx-1" value='✔' onClick={() => { addCategory() }} />
        <input type="button" className="btn btn-danger mx-1" value='🗑' onClick={() => { deleteCategory() }} />
      </div>
    </div>
  )
}
