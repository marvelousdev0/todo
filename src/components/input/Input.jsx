export default function Input({ value, setValue }) {
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}
