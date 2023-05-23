import SortableTable from '../components/SortableTable';

function TablePage() {

  const data = [
    { name: 'Orange', color: 'bg-orange-500', score: 5},
    { name: 'Apple', color: 'bg-red-500', score: 3},
    { name: 'Bananna', color: 'bg-yellow-500', score: 1},
    { name: 'Lime', color: 'bg-green-500', score: 4},
  ]

  const config = [
    { 
      label: 'Name',
      render: (rowData) => rowData.name,
      sortValue: (rowData) => rowData.name
    },
    { 
      label: 'Color',
      render: (rowData) => <div className={`p-3 m-2 ${rowData.color}`} />
    },
    { 
      label: 'Score',
      render: (rowData) => rowData.score,
      sortValue: (rowData) => rowData.score

    },
  ]

  const keyFn = (rowData) => {
    return rowData.name;
  };

  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );  
}

export default TablePage;