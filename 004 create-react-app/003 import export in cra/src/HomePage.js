// Complete the HomePage Component and export it
import Form from "./Form.js";

export const name ="xyz";
export const email ="abc@xyz.com"



function HomePage() {
  return (
    <div className="Homepage">
      {/* Create a h1 tag and render Form Component here */}
      <h1>HomePage</h1>
      <Form />
    </div>
  );
}

export default HomePage;
