import './App.css';

import { Data } from './Data';

function App() {

  return (
    <div className="App">
      <h1>Hey YouTube</h1>
      <h1>React Inline Styling with Conditionals??</h1>
      {
        Data.map((bill, key) => {
          return (
            <MyBill
              bill={bill}
              key={key}
            />
          )
        })
      }
    </div>
  );
}

export default App;

const MyBill = ({bill}) => {

  const handleStatus = (status) => {
    if (status === 'Overdue'){
      return { background: 'lightcoral'}
    } else if (status === 'Paid'){
      return { background: "lightgreen" }
    }
  }

  const handleType = (type) => {
    if (type === 'Water'){
      return 'water'
    }
  }

  return (
    <div className={`my-bill-container ${handleType(bill.type)}`} style={ handleStatus(bill.status)}>
      <h2>{bill.type}</h2>
      <h2>Amount: ${bill.amount}</h2>
      <h2>Status: {bill.status}</h2>
    </div>
  )
}