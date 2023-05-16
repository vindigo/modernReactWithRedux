import Link from './Link';

function Sidebar() {
  const links = [
    { label: 'Accordion', path: '/accordion' },
    { label: 'Buttons', path: '/button' },
    { label: 'Dropdown', path: '/dropdown' },
    { label: 'Modal', path: '/modal' },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link 
        key={link.label} 
        to={link.path} 
        className="mb-3"
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
          {link.label}
      </Link>
    );
  });

  return (
    <div className="flex sticky top-0 overflow-y-scroll flex-col items-start">
      {renderedLinks}
    </div>
  );
}

export default Sidebar;