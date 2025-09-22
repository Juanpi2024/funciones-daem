import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { subject: 'Compromiso Ético-Social', value: 100, fullMark: 100 },
  { subject: 'Orientación a la Calidad', value: 100, fullMark: 100 },
  { subject: 'Autoaprendizaje', value: 100, fullMark: 100 },
  { subject: 'Liderazgo', value: 100, fullMark: 100 },
  { subject: 'Liderazgo Pedagógico', value: 100, fullMark: 100 },
  { subject: 'Responsabilidad', value: 100, fullMark: 100 },
  { subject: 'Relaciones Interpersonales', value: 100, fullMark: 100 },
  { subject: 'Negociar y Resolver Conflictos', value: 100, fullMark: 100 },
  { subject: 'Trabajo en Equipo', value: 100, fullMark: 100 },
  { subject: 'Adaptación al Cambio', value: 100, fullMark: 100 },
  { subject: 'Asertividad', value: 100, fullMark: 100 },
  { subject: 'Iniciativa e Innovación', value: 100, fullMark: 100 },
];

export const CompetencyChart: React.FC = () => {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12, fill: '#475569' }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar name="Perfil Ideal" dataKey="value" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.6} />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};