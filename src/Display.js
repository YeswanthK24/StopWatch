const Display = ({ time }) => {
  const { ms, s, m, h } = time;
  return (
    <div>
      H<span>{h >= 10 ? h : "0" + h}</span>: M
      <span>{m >= 10 ? m : "0" + m}</span>: S
      <span>{s >= 10 ? s : "0" + s}</span>: MS
      <span>{ms >= 10 ? ms : "0" + ms}</span>
    </div>
  );
};
export default Display;
