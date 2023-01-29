import { Radar } from '@ant-design/plots';

const DemoRadar = () => {
  const data = [
    {
      name: 'Meeting Deadlines',
      star: 15,
    },
    {
      name: 'Problem Solving',
      star: 35,
    },
    {
      name: 'Communication',
      star: 40,
    },
    {
      name: 'Technical Knowlegde',
      star: 12,
    },
    {
      name: 'Punctuality',
      star: 30,
    },
    {
      name: 'Team Player',
      star: 80,
    },
  ];
  const config = {
    data: data.map((d) => ({ ...d, star: Math.sqrt(d.star) })),
    xField: 'name',
    yField: 'star',
    appendPadding: [0, 10, 0, 10],
    meta: {
      star: {
        alias: 'Task Completed',
        min: 0,
        nice: true,
        formatter: (v) => Number(v).toFixed(2),
      },
    },
    xAxis: {
      tickLine: null,
    },
    yAxis: {
      label: false,
      grid: {
        alternateColor: 'rgba(0, 0, 0, 0.04)',
      },
    },
    point: {
      size: 2,
    },
    area: {},
  };
  return <Radar {...config} />;
};

export default DemoRadar;
