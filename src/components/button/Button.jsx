export default function Button({ value, setValue }) {
  return (
    <button className="button" onClick={() => setValue(value + 1)}>
      Button
    </button>
  );
}
