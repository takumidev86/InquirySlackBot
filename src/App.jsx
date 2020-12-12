import React from 'react';
import defaultDataset from "./dataset"
import './assets/styles/style.css'
import {AnswersList,Chats} from "./components/index"
import FormDialog from './components/Forms/FormDialog'

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            answers: [],
            chats: [],
            currentId: "init",
            dataset: defaultDataset,    //連想配列
            open: false
        };
        this.selectAnswer = this.selectAnswer.bind(this);
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    initAnswer = () =>{
        const initDataset = this.state.dataset[this.state.currentId];
        const initAnswers = initDataset.answers;
        this.setState({
            answers: initAnswers
        })
    }

    displayNextQuestion = (nextQuestionId) =>{
        const chats = this.state.chats
        chats.push({
            text: this.state.dataset[nextQuestionId].question,
            type: 'question'
        })

        this.setState({
            answers: this.state.dataset[nextQuestionId].answers,
            chat: chats,
            currentId: nextQuestionId
        })
    }
// 回答を選択する
    selectAnswer = (selectedAnswer,nextQuestionId) =>{
        switch(true){
            case (nextQuestionId ==='init'):
                setTimeout(() => this.displayNextQuestion(nextQuestionId),500);
            case(/^https:*/.test(nextQuestionId)):
                const a = document.createElement('a');
                a.href = nextQuestionId;
                a.target = '_blank';
                a.click();
                break;
            case(nextQuestionId ==='contact'):
                this.handleClickOpen();
                break;
            default:
                const chats = this.state.chats;
                chats.push({
                    text: selectedAnswer,
                    type: 'answer'
                })
                this.setState({
                    chats: chats
                })

                setTimeout( () => this.displayNextQuestion(nextQuestionId),500);
                break;
        }
    }
    
    handleClickOpen = () => {
        this.setState({open:true});
    };
    handleClose = () => {
        this.setState({open:false});
    };

    componentDidMount(){
        const initAnswer = "";
        this.selectAnswer(initAnswer,this.state.currentId)
    }
        componentDidUpdate(){
            const scrollArea = document.getElementById('scroll-area')
            if(scrollArea){
                scrollArea.scrollTop = scrollArea.scrollHeight

            }

    }

    render(){
        return (
        <section className="c-section">
            <div className="c-box">
                <Chats chats={this.state.chats} />
                <AnswersList answers={this.state.answers} select={this.selectAnswer}/>
                <FormDialog open={this.state.open} handleClose={this.handleClose} />
            

            </div>
        </section>

  );
}
}