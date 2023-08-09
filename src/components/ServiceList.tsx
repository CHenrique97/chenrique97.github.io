import "./ServiceList.css"
import { useState, useEffect } from 'react';
import LinkCard from  './Card'
import React from 'react';

interface props {
  Repo: string;
  Title: string;
  Description: string;
  Img:string
}



const ServiceList = () => {
  // State to hold the list of services
  const [services, setServices] = useState<props[]>([{Repo:"github.com",Title:"waiting",Description:"waiting",Img:"awaiting"}]);

  // Effect to fetch the data from the API
  useEffect(() => {
    fetchServices();
  }, []);

  async function fetchServices() {
    try {
      const response = await fetch('https://pbackend-production.up.railway.app/');
      const data = await response.json();
      setServices(data.message.List); // Update the state with the fetched data
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  }
 
  // Render the list of services
  return (
    <div className='project-showcase'>
        {services.map((service) => 
         <ul key={service.Repo}>
          <LinkCard{ ...{href:service.Repo,
          title:service.Title,
          body:service.Description,
          img:service.Img}}/>
          
          </ul>
        )}
      
    </div>
  );
}

export default ServiceList;
