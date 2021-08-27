import { lazy, Suspense, useEffect, useState } from "react";
import Input from "../../components/input/Input";
const Button = lazy(() =>
  import(/* webpackChunkName: 'button' */ "../../components/button/Button")
);

export default function Home() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  // input.length > 10 && button 5 time => flag = true
  // !dependency array => useEffect executes on every change
  // empty dependency array => executes only once during component initialization => api calls
  // dependency array has values => executes only once when value changes
  useEffect(() => {
    if (input.length > 10 && count === 5) {
      setFlag(true);
    } else {
      setFlag(false);
    }
    return () => {
      console.log("cleanup");
    };
  }, [input, count]);

  function handleSubmit(event) {
    alert(input);
  }

  // input -> enter
  // button -> add -> list

  // list =>
  // name <x>
  //

  return (
    <div>
      <Input value={input} setValue={setInput} />
      <Suspense fallback={<div>Loading...</div>}>
        <Button value={count} setValue={setCount} />
      </Suspense>

      <p>
        {input || "Button"} is clicked: {count} times
      </p>

      {flag && <p>True</p>}

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
