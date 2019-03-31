import React,{Component} from 'react'
import Comment from './comment'



class Post extends Component{
    constructor(props){
        super(props);
        this.state = {
            comments:this.props.comments,
            ccount:this.props.commentcount,
            lcount:this.props.likes,
            userComment:'',
            visible:false,
            liked:false,
        }
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        this.toggleComments = this.toggleComments.bind(this);
        this.handleLikes = this.handleLikes.bind(this);
        this.ten = 10;
        console.log(this.commentStyle);
    }

    handleLikes(e){
        let lval = 1;
        let ll = true;
        if(this.state.liked){
            lval=-1;
            ll=false;
        }
        this.setState(prevState => ({
            lcount:prevState.lcount+lval,
            liked:ll
        }))
    }

    toggleComments(e){
        let disp = true;
        if(this.state.visible){
            disp = false;
        }
        this.setState({
            visible:disp
        })
    }

    handleCommentSubmit(e){
        e.preventDefault();
        const comContent = {
            user: localStorage.getItem('name'),
            avatar: localStorage.getItem('pic'),
            content: this.state.userComment,
        }
        this.setState(prevState => ({
            comments:[comContent,...prevState.comments],
            userComment: '',
            ccount:prevState.ccount+1,
            visible:true,
        }))
        
    }
    handleCommentChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        const val  = this.state.visible;
        const lval = this.state.liked;
        let sval = 'none';
        let slval = 'outline-icons';
        if(val){
            sval = 'block';
        }
        if(lval){
            slval = '';
        }
        const styles = {
            container: {
                'display' : sval
            },
            like: {
                'font-family':slval
            }
        };

        return(
                <div className="ui card fluid">
                    <div className="content">
                        <div className="right floated meta">{this.props.ptime} hrs ago</div>
                        <img className="ui avatar image" src={this.props.avatar} />
                        <span>{this.props.name}</span>
                    </div>
                    <div className="image">
                        <img src={this.props.img}/>
                    </div>
                    <div className="content">
                        <div className="description">
                            {this.props.desc}
                            <br />
                        </div>
                        <span className="right floated">
                            <i onClick={this.handleLikes} style={styles.like} className="heart like icon" />
                            {this.state.lcount} likes
                        </span>
                        <i className="comment icon" />
                        <a onClick={this.toggleComments}>
                            {this.state.ccount} comments
                        </a>    
                    </div>
                    <form className="extra content" onSubmit={this.handleCommentSubmit} autoComplete="off">
                        <div className="ui large transparent left icon input">
                            <i className="heart icon" />
                                <input name="userComment" value={this.state.userComment} onChange={this.handleCommentChange} type="text" placeholder="Add Comment..." />  
                        </div>
                    </form>
                    <div className="ui comments" style={styles.container}>
                        <Comment {...this.state} />
                    </div>
                </div>
           )
    }
}

export default Post