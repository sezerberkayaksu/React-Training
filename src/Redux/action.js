function addPost(post){
  return{
    type : "ADD_POST",
    payload : {text : post.text, id : post.id}
  }
}

export {addPost}