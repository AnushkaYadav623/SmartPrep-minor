import React from 'react';
import { BookOpen, FileText, CheckCircle, TrendingUp } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import AnalyticsCard from '../components/AnalyticsCard';
import './Dashboard.css';

const studyHoursData = [
  { name: 'Mon', hours: 2 },
  { name: 'Tue', hours: 3.5 },
  { name: 'Wed', hours: 2.5 },
  { name: 'Thu', hours: 4 },
  { name: 'Fri', hours: 3 },
  { name: 'Sat', hours: 5 },
  { name: 'Sun', hours: 4.5 },
];

const subjectProgressData = [
  { name: 'Geography', progress: 75, fill: 'var(--accent-peach)' },
  { name: 'JavaScript', progress: 40, fill: 'var(--accent-lilac)' },
  { name: 'Photography', progress: 90, fill: 'var(--accent-sky)' },
  { name: 'Python', progress: 20, fill: 'var(--accent-pink)' },
];

const quizPerformanceData = [
  { name: 'Week 1', score: 65 },
  { name: 'Week 2', score: 72 },
  { name: 'Week 3', score: 85 },
  { name: 'Week 4', score: 90 },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      
      <div className="analytics-grid">
        <AnalyticsCard 
          title="Materials Uploaded" 
          value="12" 
          subtitle="+2 this week"
          icon={FileText}
          colorClass="peach"
        />
        <AnalyticsCard 
          title="Notes Generated" 
          value="24" 
          subtitle="From 8 materials"
          icon={BookOpen}
          colorClass="primary"
        />
        <AnalyticsCard 
          title="Avg. Quiz Score" 
          value="82%" 
          subtitle="+5% improvement"
          icon={CheckCircle}
          colorClass="sky"
        />
        <AnalyticsCard 
          title="Readiness" 
          value="High" 
          subtitle="Based on recent activity"
          icon={TrendingUp}
          colorClass="lilac"
        />
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <h3 className="chart-title">Study Hours Trend</h3>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={studyHoursData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-color)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: 'var(--text-muted)'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: 'var(--text-muted)'}} />
                <Tooltip cursor={{stroke: 'var(--border-color)'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: 'var(--shadow-md)'}} />
                <Line type="monotone" dataKey="hours" stroke="var(--primary)" strokeWidth={3} dot={{r: 4, fill: 'var(--primary)', strokeWidth: 2, stroke: '#fff'}} activeDot={{r: 6}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chart-card">
          <h3 className="chart-title">Subject Progress</h3>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={subjectProgressData} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="var(--border-color)" />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: 'var(--text-main)', fontWeight: 500}} />
                <Tooltip cursor={{fill: 'var(--bg-color)'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: 'var(--shadow-md)'}} />
                <Bar dataKey="progress" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chart-card full-width">
          <h3 className="chart-title">Quiz Performance</h3>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={quizPerformanceData}>
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--accent-sky)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="var(--accent-sky)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-color)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: 'var(--text-muted)'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: 'var(--text-muted)'}} />
                <Tooltip cursor={{stroke: 'var(--border-color)'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: 'var(--shadow-md)'}} />
                <Area type="monotone" dataKey="score" stroke="var(--accent-sky)" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;