import { Rose } from '@ant-design/plots';

const DemoRose = () => {
    const data = [
        {
            type: 'Category 1',
            value: 27,
        },
        {
            type: 'Category 2',
            value: 25,
        },
        {
            type: 'Category 3',
            value: 18,
        },
        {
            type: 'Category 4',
            value: 15,
        },
        {
            type: 'Category 5',
            value: 10,
        },
        {
            type: 'Others',
            value: 5,
        },
    ];
    const config = {
        data,
        xField: 'type',
        yField: 'value',
        seriesField: 'type',
        radius: 0.9,
        legend: {
            position: 'bottom',
        },
    };
    return <Rose {...config} />;
};

export default DemoRose;
