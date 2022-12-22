import "./styles.css";

const PaginationButtons = ({ buttonText, onClick }) => {

  return (
    <section className="card-pagination-button" onClick={onClick}>
      {buttonText}
    </section>
  );
};

export default PaginationButtons;
