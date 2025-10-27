import sizechart from "../Details/Images/sizechart.png"; // adjust the path as needed

function Sizechart() {
  return (
    <div className="flex justify-center items-center mt-6">
      <img
        src={sizechart}
        alt="Size Chart"
        className="w-auto h-auto rounded-lg shadow-md"
      />
    </div>
  );
}

export default Sizechart;
