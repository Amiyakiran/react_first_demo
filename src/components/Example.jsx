import './Example.css'
import styles from '../myStyle.module.css';

function Example({subject}){
/* console.log(props); */
//OBJECT DESTRUCTURING - {data} = props
return(
    <div >
        { subject ==='REACT' &&
            <div className='divStyle'>
                <h1>inside example functional component</h1>
            <p>subject is : <span className={styles.reactSubject}>{subject}</span></p>
            </div>
        }
    </div>
)
}

export default Example;