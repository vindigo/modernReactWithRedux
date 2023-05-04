import Accordion from './components/Accordion';


function App() {
  const items = [
    {
      id: 1,
      label: "Alpha",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat vitae lorem ut luctus. Morbi pharetra dui quis imperdiet venenatis. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
    },
    {
      id: 2,
      label: "Sigma",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat vitae lorem ut luctus. Morbi pharetra dui quis imperdiet venenatis. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
    },
    {
      id: 3,
      label: "Omega",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat vitae lorem ut luctus. Morbi pharetra dui quis imperdiet venenatis. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
    }
  ];

  return <Accordion items={items}/>
}

export default App;