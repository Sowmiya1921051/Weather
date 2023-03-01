import { AreaChart, Area ,ResponsiveContainer, XAxis, Tooltip} from "recharts";

const data = [
  {
    name: "23%",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "29%",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "58%",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "75%",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "33%",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "55%",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
 
];

export default function AreaCharts() {
  return (
    
            <ResponsiveContainer className='mx-auto' width="96%" height="68%">
          <AreaChart     
         
      data={data}
      margin={{
        top: 10,
        right: 0,
        left: 0,
        bottom: 5
      }}
    >             <Tooltip />
              <Area type="monotone" dataKey="uv" stroke="#5C9CE5" fill="#5C9CE5" />
              <XAxis dataKey="name" />
          </AreaChart>
          </ResponsiveContainer>
  );
}
