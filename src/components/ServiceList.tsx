
// ServiceList.astro

// Import the necessary modules
import { useState, useEffect } from 'react';
import LinkCard from  './Card'
import React from 'react';

interface props {
  repo: string;
  title: string;
  description: string;
  img:string
}



function ServiceList() {
  // State to hold the list of services
  const [services, setServices] = useState<props[]>([{repo:"awaiting",title:"awaiting",description:"awaiting",img:"awaiting"}]);

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
    <div>

     
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
