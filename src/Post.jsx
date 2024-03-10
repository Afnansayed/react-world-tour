import './Post.css'
export default function Post ({post}){
   // console.log(post)
    const {title,id,userId} = post;
    return(
        <div className='post'>
            <h3> Title : {title}</h3>
            <h3> Id: {id} </h3>
            <h3> UserID: {userId} </h3>
        </div>
    )
}