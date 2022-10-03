import React from "react";
import Comment from "./Comment";

const commnets = [
    {
        name : "유지예",
        comment: "안녕하세요, 저는 지금 밤샘해야할 것 같아요",
    },
    {
        name: "박재민",
        comment: "안녕하세요, 저는 지금 3강에서 막혔어요 어떡하죠 ㅠㅠ",
    },
    {
        name: "get it",
        comment: "어서 와, getit은 처음이지? (뚜둔뚜둔)",
    }

]
function CommentList(props){
    return(
        <div>
            {commnets.map((comment)=>{
                return(
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
        </div>
    );
}

export default CommentList;