import "./styles.css";
//create a object to store all the styles.

const styles = {
  App: {
    display: "flex",
    flexDirection: "column"
  },

  Form: {
    width: "60%",
    margin: "50px auto",
    display: "flex",
    flexDirection: "column",
    gap: 20
  },

  Div : {
    width: "60%",
    margin: "50px auto",
    display: "flex",
    flexDirection: "column",
    gap: 20
  },

  cancelButton : {
    outline: "none",
    paddingBlock: 5,
    width: 100,
    backgroundColor: "red",
    color: "white",
    cursor: "pointer"
  },

  Login : {
    outline: "none",
    paddingBlock: 5,
    width: 100,
    backgroundColor: "red",
    color: "white",
    cursor: "pointer"
  }
  

}


export default function App() {
  return (
    <div className={styles.App}>
      {/* Refactor the inline style to use the internal style. */}
      <form
        style={styles.Form}
      >
        {/* Refactor the inline style to use the internal style. */}
        <h3 style={{ fontSize: "2rem", letterSpacing: 2 }}>Sign Up</h3>
        <input style={{ padding: 10 }} placeholder="Username" />
        <input style={{ padding: 10 }} placeholder="Email" />
        <input style={{ padding: 10 }} placeholder="Password" />
        {/* Refactor the inline style to use the internal style. */}
        <div
          style={styles.Div}
        >
          {/* Refactor the inline style to use the internal style. */}
          <button
            style={styles.cancelButton}
          >
            Cancel
          </button>
          {/* Refactor the inline style to use the internal style. */}
          <button
            style={styles.Login}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
