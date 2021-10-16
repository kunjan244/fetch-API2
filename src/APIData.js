import React,{ useEffect,useState}from 'react';
const APIData =()=> {

    const[data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await
        fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.cases_time_series);
        setData(actualData.cases_time_series);

    }
    useEffect(() => { getCovidData();
 }, []);
 return(
     <div>
         <h1>India Covid 19 Dashboard</h1>
         <table>
             
             <tr>
                 <th>dailyconfirmed</th>
                 <th>dailyrecoverd</th>
                 <th>date</th>
                 <th>totalconfirmed</th>
                 <th>dateymd</th>
               
      </tr>
      
      <tbody>
          {
              data.map((curelemind) => {
                  return(
                      <tr>
                          <td>{curelemind.dailyconfirmed}</td>
                      <td>{curelemind.dailyrecoverd}</td>
                      <td>{curelemind.date}</td>
                      <td>{curelemind.totalconfirmed}</td>

                            <td>{curelemind.dateymd}</td> 
</tr>
                  );
              })
          }
      </tbody>
         </table>
     </div>
 );


}
export default APIData;