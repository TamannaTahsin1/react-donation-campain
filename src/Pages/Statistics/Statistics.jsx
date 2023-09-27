/** @format */

import { PieChart, Pie, Cell } from "recharts";

const Statistics = () => {
  const COLORS = ["#FF444A", "#00C49F"];
  // change from here
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
  ]; 
  // to here
  return (
    <div className="container mx-auto">
      <div className='container lg:flex lg:items-center lg:justify-center'>
        <PieChart width={500} height={500}>
          <Pie 
            data={data}
            cx='50%'
            cy='50%'
            labelLine={false}
            outerRadius={180}
            fill='#8884d8'
            dataKey='value'>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
              <div className="md:flex lg:justify-around gap-4">
              <div className="md:flex gap-3">
       <h1>Your Donation</h1>
       <div className="border-none w-32 h-5 bg-[#00C49F]"></div>
      </div>
      <div className="md:flex gap-3">
       <h1>Total Donation</h1>       
       <div className="border-none w-32 h-5 bg-[#FF444A]"></div>
      </div>
        </div>
    </div>
  );
};

export default Statistics;
