import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Statistics.css';
const Statistics = () => {
    const topics = useLoaderData().data;
    return (
        <Container>
        <div className='d-flex justify-content-center my-5'>
        <ResponsiveContainer width="100%" height={500}>
          <BarChart
            width={700}
            height={500}
            data={topics}
            
          >
            <CartesianGrid/>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" fill="#8884d8" />
          </BarChart>
          </ResponsiveContainer>
          
        </div>
        <h4 className = "text-center">Figure: Bar chart of quiz topics vs total questions</h4>
      </Container>
    );
};

export default Statistics;