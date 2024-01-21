const fs = require('fs');

const deleteFile = (filePath) => {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(`Error deleting file: ${filePath}`);
      console.error(err);
    } else {
      console.log(`File deleted successfully: ${filePath}`);
    }
  });
};

// Delete canada.txt if it exists
deleteFile('canada.txt');

// Delete usa.txt if it exists
deleteFile('usa.txt');


const data = [
    { country: 'Canada', year: 1897, population: 2500000 },
    { country: 'USA', year: 1990, population: 30000000 },
  ];
  
  // Filter data for Canada
  const canadaData = data.filter((item) => item.country === 'Canada');
  
  // Convert the filtered data to a string
  const canadaDataString = canadaData.map((item) => JSON.stringify(item)).join('\n');
  
  // Write the filtered data to canada.txt
  fs.writeFile('canada.txt', canadaDataString, (err) => {
    if (err) err

    console.log('Data for Canada has been written to canada.txt');

  });


    // Filter data for USA
    const usaData = data.filter((item) => item.country === 'USA');
  
    // Convert the filtered data to a string
    const usaDataString = usaData.map((item) => JSON.stringify(item)).join('\n');
    
    fs.writeFile('usa.txt', usaDataString, (err) => {
      if (err) err
      
      console.log('Data for USA has been written to usa.txt');

    });