import React from 'react';
import { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
const OrderList = () => {
    
    const [ordersInformation, setOrdersInformation]=useState([])

    useEffect(()=>{
        fetch ('https://thawing-shore-57581.herokuapp.com/allOrder')
        .then(res=>res.json())
        .then(data=>setOrdersInformation(data))
    },[])
   
    return (
        <div className="container">
           
            <p>Total Panding Order= {ordersInformation.length}</p>
            {
                ordersInformation.map(order=> <Table style={{borderBottom: '1px solid red'}} className="container" striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>Customer Name</th>
                    <th>Email</th>
                    <th>Service Name</th>
                  
                    <th>Payment ID</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <td>{order.userName}</td>
                  <td>{order.email}</td>
                  <td>{order.serviceName}</td>
                   
                    <td>{order.paymentId}</td>
                    <td>{order.cost}</td>
                  </tr>
                  
                  
                </tbody>
              </Table>)
              
            }
           

        </div>
    );
};

export default OrderList;