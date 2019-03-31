import React, { Component } from 'react'
import Faker from 'faker'
import Post from './post'
 
class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
    }
    alert("Welcome "+localStorage.getItem('name')+" !!! ");
  }
 
  componentWillMount() {
    for (let i = 0; i < 10; i++) {
      const user = {
        name: Faker.internet.userName(),
        email: Faker.internet.email(),
        avatar: Faker.internet.avatar(),
        img : Faker.image.image(),
        likes : Math.ceil(Math.random() * 100),
        commentcount : Math.ceil(Math.random()*10),
        comments : [],
        desc : Faker.lorem.sentence(),
        ptime : Math.ceil(Math.random()*20),
      }
      for(let i=0;i < user.commentcount;i++){
        const comment = {
          user: Faker.internet.userName(),
          avatar: Faker.internet.avatar(),
          content: Faker.lorem.sentence(),
          ctime : user.ptime - (10-Math.ceil(Math.random()*10)),
        }
        user.comments = [...user.comments,comment]
      }
      
      this.setState(prevState => ({
        users: [...prevState.users, user],
      }))
    }
  }
 
  renderUsers(user) {
    return <Post {...user} />
        
  }
 
  render() {
    return(
        <div className="ui stackable grid container">
            
            <div className="four wide column"></div>
            <div className="eight wide column">
                <div>{this.state.users.map(user => this.renderUsers(user))}</div>
            </div>
    
        </div>
    )
  }
}
 
export default Posts