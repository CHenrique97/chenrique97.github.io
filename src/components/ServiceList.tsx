import "./ServiceList.css"
import { useState, useEffect } from 'react';
import LinkCard from  './Card'
import React from 'react';

interface props {
  repo: string;
  title: string;
  description: string;
  img:string
}



const ServiceList = () => {
  // State to hold the list of services
  const [services, setServices] = useState<props[]>([{repo:"github.com",title:"waiting",description:"waiting",img:"awaiting"},{repo:"github.com",title:"waiting",description:"waiting",img:"awaiting"},{repo:"github.com",title:"waiting",description:"waiting",img:"awaiting"}]);

  // Effect to fetch the data from the API
  useEffect(() => {
    fetchServices();
  }, []);

  async function fetchServices() {
    try {
      const response = await fetch('https://api.example.com/services');
      const data = await response.json();
      setServices(data); // Update the state with the fetched data
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  }
 
  // Render the list of services
  return (
    <div className='project-showcase'>
        {services.map((service) => 
         <ul key={service.repo}>
          <LinkCard{ ...{href:service.repo,
          title:service.title,
          body:service.description}}/>
          </ul>
        )}
      
    </div>
  );
}

export default ServiceList;
