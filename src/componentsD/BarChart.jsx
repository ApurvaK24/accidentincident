import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

class Example extends PureComponent {
  state = {
    accidentData: [],
    isLoading: true
  };

  componentDidMount() {
    // Fetch accident data from backend API
    fetch('https://localhost:44369/api/Accident/GetMonthlyAccidentCounts')
      .then(response => response.json())
      .then(data => {
        this.setState({
          accidentData: data,
          isLoading: false
        });
      })
      .catch(error => {
        console.error('Error fetching accident data:', error);
        this.setState({
          isLoading: false
        });
      });
  }

  render() {
    const { accidentData, isLoading } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={accidentData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="MonthName" tick={{ fill: '#fff' }} />
          <YAxis tick={{ fill: '#fff' }} />
          <Tooltip />
          <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
          <Bar dataKey="AccidentCount" name="Accidents" fill="#FFC436" />
          <Bar dataKey="IncidentCount" name="Incidents" fill="#F0F0F0" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

export default Example;













/*import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', I: 300, A: 400 },
  { name: 'Feb', I: 145, A: 230 },
  { name: 'March', I: 100, A: 345 },
  { name: 'April', I: 8, A: 450 },
  { name: 'May', I: 100, A: 321 },
  { name: 'June', I: 9, A: 235 },
  { name: 'July', I: 53, A: 267 },
  { name: 'Aug', I: 252, A: 378 },
  { name: 'Sept', I: 79, A: 210 },
  { name: 'Oct', I: 294, A: 23 },
  { name: 'Nov', I: 43, A: 45 },
  { name: 'Dec', I: 93, A: 125 },
  
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/bar-chart-with-brush-ghsz3';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={1700}
          data={data}
          margin={{
            top: 4,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fill: '#fff' }}/>
          <YAxis type="number" domain={[0, 200]} tick={{ fill: '#fff' }}/>
          <Tooltip />
          <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
          <ReferenceLine y={0} stroke="#000" />
          
          <Bar dataKey="I" fill="#FFC436" />
          <Bar dataKey="A" fill="#F0F0F0" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}*/

