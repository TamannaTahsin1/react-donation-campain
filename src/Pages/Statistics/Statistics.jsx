/** @format */

import { PieChart, Pie, Cell } from "recharts";

const Statistics = () => {
  const COLORS = ["#FF444A", "#00C49F"];
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
  ];

  return (
    <div className="container mx-auto">
      <div className='w-[300px] h-[50vh] flex justify-center items-center'>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx='50%'
            cy='50%'
            labelLine={false}
            outerRadius={80}
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
      <div className="block flex gap-3">
       <h1>Your Donation</h1>
       <div className="badge badge-accent"></div>
      </div>
    </div>
  );
};

export default Statistics;
