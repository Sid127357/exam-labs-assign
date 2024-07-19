const Note = ({ primaryHeading, secHeading }) => {
  return (
    <>
      <section className="title-block">
        <div className="container">
          <h1 className="primary-clr fw-bold fs-4 mb-2">{primaryHeading}</h1>
          <h2 className="text-primary fw-semibold fs-5">{secHeading}</h2>
        </div>
      </section>
    </>
  );
};

export default Note;
