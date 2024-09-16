function OrgTextFormat({ title, text }) {
  return (
    <div>
      <h3 className="mb-2 mt-2 font-bold text-xl">{title}</h3>
      <p className="font-regular">{text}</p>
    </div>
  );
}

export default OrgTextFormat;
