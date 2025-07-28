const TopImage = () => {
  return (
    <div>
      <img
        src="/image 5.png" // ✅ use public path
        alt="Top Right"
        className="rounded-circle"
        style={{
          width: "50px",
          height: "50px",
          float: "right",
        }}
      />
    </div>
  );
};

export default TopImage;
