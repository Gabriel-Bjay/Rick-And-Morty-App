import FilterBTN from "../FilterBTN";

const Status = ({ setStatus, setPageNumber }) => {
  let status = ["Alive", "Dead", "Unknown"];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button" type="button"
          data-bs-toggle="collapse" data-bs-target="#collapseOne"
          aria-expanded="true" aria-controls="collapseOne"
        > {status} </button>
      </h2>

        <div
            id="collapseOne" className="accordion-collapse collapse show"
            aria-labelledby="headingOne" data-bs-parent="#accordionExample"
            >
            <div className="accordion-body d-flex flex-wrap gap-3">
            {status.map((item, index) => (
                <FilterBTN
                key={index}
                index={index}
                name="status"
                task={setStatus}
                setPageNumber={setPageNumber}
                input={item}
                />
            ))}
            </div>
        </div>
    </div>
  );
};

export default Status;