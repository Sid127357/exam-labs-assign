import { Link } from "react-router-dom";

const Breadcrumb = () => {
  const breadcrumbItems = [{ label: "Home" }, { label: "Checkout" }];
  const breadcrumbStyle = {
    "--bs-breadcrumb-divider": "'>'", // Custom property for breadcrumb divider
  };
  return (
    <>
      <section className="breadcrumb-block py-4">
        <div className="container">
          <nav aria-label="breadcrumb" style={breadcrumbStyle}>
            <ul className="breadcrumb mb-0">
              {breadcrumbItems.map((item, index) => (
                <li key={index} className="breadcrumb-item ">
                  {index === 0 ? (
                    <Link to="/" className="text-decoration-none ">{item.label}</Link>
                  ) : (
                    <span className="gray">{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
