import React from 'react';

// FIX: Explicitly typed props for the ChartNode component to make `children` optional.
const ChartNode = ({ title, role, children }: { title: string; role: string; children?: React.ReactNode }) => (
  <li>
    <div className="node">
      <div className="title">{title}</div>
      {role && <div className="role">{role}</div>}
    </div>
    {children && <ul>{children}</ul>}
  </li>
);

export const OrganizationalChart: React.FC = () => {
  return (
    <div className="org-chart">
      <ul>
        <ChartNode title="Director / Directora" role="DAEM Parral">
          <ChartNode title="Sub Director" role="Colaborador Inmediato" />
          <ChartNode title="Jefe de Unidad Técnica Pedagógica (UTP)" role="Coordinación Pedagógica">
            <ChartNode title="Docentes" role="Profesores de Aula y Especialidad" />
             <ChartNode title="Coordinadores PIE" role="Programa de Integración Escolar" />
          </ChartNode>
          <ChartNode title="Inspector General" role="Organización y Supervisión">
             <ChartNode title="Asistentes de la Educación" role="Apoyo Docente e Inspectoría" />
              <ChartNode title="Auxiliares y Portería" role="Servicios Generales" />
          </ChartNode>
        </ChartNode>
      </ul>
    </div>
  );
};