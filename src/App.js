import './App.css';
import { Data } from './Data.js';

export default function App(){
	return(
    <div className="app">
      {
        Data.map((bill, key) => {
          return(
            <MyBill
              bill={bill}
              key={key}
            />
          )
        })
      }
    </div>
  )
}

const MyBill = ({ bill }) => {

  const handleStatusStyling = (status) => {
    if(status === 'Paid'){
      return { background: 'lightgreen'}
    } else if(status === 'Overdue'){
      return { background: 'lightcoral'}
    }
  }

	return(
    <div className="my-bill-container" style={handleStatusStyling(bill.status)}>
      <h2>{bill.type}</h2>
      <h2>Amount: {bill.amount}</h2>
      <h2>Status: {bill.status}</h2>
    </div>
  )
}