import {Container,Row,Col, NavItem} from 'react-bootstrap';
import { person } from './data';
import DatesCount from './components/DatesCount';
import DatesList from './components/DatesList';
import DatesAction from './components/DatesAction';
import React,{useState} from 'react';

function App() {
 
  const [personData,setPersonData ] = useState(person)

  const onDelete= ()=> {
    setPersonData([])
  }
  const onViewData= ()=> {
    setPersonData(person)
  }
  return (
    <div className="font color-body">
      <Container className='py-5'>
      
        <DatesCount person={personData}/>
        <DatesList person={personData}/>
        <DatesAction onDelete={onDelete} onViewData={onViewData}/>
      </Container>
    </div>
  );
}

export default App;
