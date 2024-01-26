// Complete the Form Component and export it
import {name , email} from './HomePage.js'

function preventDefault(event){
  event.preventDefault();
}

const Form = () => (
  <>
    <div>
      <form onSubmit={preventDefault}>{/* Create a h3, 2 inputs and 1 button here */}
      <h3>Login Page</h3>
      <input type="text" placeholder="YourName" value={name}/>
      <br/>
      <br/>
      <input type="text" placeholder="xyz@pqr.com" value={email}/>
      <br/>
      <br/>
      <button >submit</button>
      </form>
    </div>
  </>
);

export default Form;
