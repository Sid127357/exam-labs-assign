 
import { Link } from 'react-router-dom';

const Breadcrumb = () => {
    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Products', path: '/products' },
        { label: 'Checkout' }
      ];
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {breadcrumbItems.map((item, index) => (
          <li 
            key={index} 
            className={`breadcrumb-item${index === breadcrumbItems.length - 1 ? ' active' : ''}`}
          >
            {index === breadcrumbItems.length - 1 ? (
              item.label
            ) : (
              <Link to={item.path}>{item.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;