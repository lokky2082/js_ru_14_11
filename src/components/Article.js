import React, { Component } from 'react'
import Comment from './Comment'

class Article extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false,
          //компонент перегруженный выходит, внеси этот стейт в CommentList
            isOpenComment:false
        }
    }

    render() {
        const { article } = this.props
        const comments = article.comments
        let commentList;
        if(comments){
           commentList = comments.map(comment => <li key={comment.id} ><Comment comment = {comment} /></li>)
        }
        const body = this.state.isOpen ? <p>{article.text}</p> : null
        const commentLink = (this.state.isOpen && (this.state.isOpenComment == false)) ? <a onClick = {this.openComment} href="#" key={article.id}>показать комментрарии</a> : null
        const commentLinkActive = this.state.isOpenComment ?  <a onClick = {this.openComment} href="#" key={article.id}>скрыть коментарии</a> : null
        const bodyCommentList = this.state.isOpenComment ? <ul>{commentList}</ul> : null
        return (
            <section>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                {body}
                {commentLink}
                {commentLinkActive}
                {bodyCommentList}
            </section>
        )
    }

    handleClick = ev => {
        this.setState({
            isOpen: !this.state.isOpen,

        })
    }
    openComment = e =>{
      this.setState({
          isOpenComment: !this.state.isOpenComment
      });
  }

}

export default Article
