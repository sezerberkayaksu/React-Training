import React,{useState}  from 'react'
import { useDispatch } from 'react-redux';
import { addPost } from './action';
import { v4 as uuidv4 } from 'uuid'

export default function NewPost() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (event) =>{
    event.preventDefault();
    dispatch(addPost({text:text,id:uuidv4}));
    setText("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Başlık :
        <input value={text} name="text" type="text" onChange={(e)=>setText(e.target.value)}></input>
      </label>
      <button type="submit">Add Post</button>
    </form>
  )
}
