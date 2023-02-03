//=========================================Rock,Paper,Scissors==============================================================\\


const { Component, mount, xml, reactive, useRef, useExternalListener, useState } = owl;

function useStore() {
const env = useEnv();
return useState(env.store);
}

class Results extends Component {
    static template = xml/*xml*/`
        <div style="border: 1px solid black; height: 10vh; text-align:center">
        <t t-out="props.data.user"/>:<t t-out="props.data.computer"/>
        </div>
        <div style="border: 1px solid black; height: 10vh;text-align:center">
        <label id="status">Status</label> : <t t-out="props.data.state"/>
        </div>`;
    static props = ['data'];

}

class UserInteraction extends Component {
    static template = xml/*xml*/ `
    <Results data="update"/>
    <div style="border: 1px solid black;text-align:center">
    <button t-on-click="newClick" id="Rock">Rock</button>
    <button t-on-click="newClick" id="Paper">Paper</button>
    <button t-on-click="newClick" id="Scissor">Scissor</button>
    </div>` ;
    static components = { Results };
    data = "";
    update = useState({user: 0, computer: 0, state: 'Make your move'});
    newClick(ev) {
        this.data =  ev.target.textContent;
        let computerMove = ['Rock', 'Paper', 'Scissor'][Math.floor(Math.random() * 3)];
        if (this.data === 'Rock' && computerMove === 'Scissor' ||
            this.data === 'Paper' && computerMove === 'Rock' ||
            this.data === 'Scissor' && computerMove === 'Rock') {
            this.update.user +=1;
            this.update.state = 'You Win';
        } else if (this.data === computerMove) {
            this.update.state = 'Its a draw';
        } else {
            this.update.computer += 1;
            this.update.state = 'Computer Wins';
        }
    }  
    
}

class Root extends Component {
    static template = xml/*xml*/ `
    <div id="container" style="width:50%;text-align:center">
    <UserInteraction/>
    </div>`;
    static components = { UserInteraction }
}

mount(Root, document.body, { dev : true });
