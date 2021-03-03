import React, {useState} from 'react'

const Clock = () => {

    let currDate = new Date().getHours();
    let greeting = '';
    let cssStyle = { };
    let Cdate = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();

    if (currDate >=1 && currDate < 12) {
        greeting='Good Morning...'
        cssStyle.color='green'
      }
      else if (currDate >=12 && currDate < 19) {
        greeting='Good Afternoon...'
        cssStyle.color='orange'
      }
      else{
        greeting='Good Evening...'
        cssStyle.color='black'
      }

    const [ctime,setCtime] = useState();

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCtime(time); 
    }

    setInterval(updateTime,1000);

    return(
    <>
    <h1 className="Show_time"> {`${time}`} </h1>
    <p>  {`${Cdate}`} </p>
    <div className="greet">
        <h1 className="heading"> Hello, <span style={cssStyle}>{greeting}</span> </h1>
    </div>
    <footer>
        <h1>  Made with ❤️ By Yasin Hirani </h1>
    </footer>
    </>
    );
}
export default Clock;