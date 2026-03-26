import type { ReportChunk } from '../types';

export const mockReportChunks: ReportChunk[] = [
  {
    id: 'chunk-1',
    title: 'Executive Summary',
    summary: 'TechCorp commits to achieving net-zero carbon emissions by 2050. Our strategy focuses on renewable energy adoption, supply chain optimization, and employee engagement in sustainability initiatives.',
    evidenceSnippet: '"We recognize the critical importance of environmental stewardship and have established comprehensive targets across our operations."',
    entities: [
      { id: 'e-1-1', name: 'TechCorp', type: 'Organization', sourceChunkId: 'chunk-1' },
      { id: 'e-1-2', name: 'Carbon Emissions', type: 'Metric', sourceChunkId: 'chunk-1' },
      { id: 'e-1-3', name: 'Renewable Energy', type: 'Initiative', sourceChunkId: 'chunk-1' },
      { id: 'e-1-4', name: '2050', type: 'Timeline', sourceChunkId: 'chunk-1' },
    ],
    relations: [
      { id: 'r-1-1', source: 'e-1-1', target: 'e-1-2', type: 'reduces' },
      { id: 'r-1-2', source: 'e-1-1', target: 'e-1-3', type: 'invests_in' },
      { id: 'r-1-3', source: 'e-1-3', target: 'e-1-4', type: 'targets' },
    ],
    dagNodes: [
      { id: 'dag-1-1', label: 'Net-Zero Target', category: 'Goal' },
      { id: 'dag-1-2', label: 'Renewable Energy', category: 'Solution' },
      { id: 'dag-1-3', label: 'Supply Chain', category: 'Area' },
    ],
    dagEdges: [
      { id: 'dag-e-1-1', source: 'dag-1-1', target: 'dag-1-2', type: 'requires' },
      { id: 'dag-e-1-2', source: 'dag-1-1', target: 'dag-1-3', type: 'includes' },
    ],
  },
  {
    id: 'chunk-2',
    title: 'Environmental Performance',
    summary: 'In 2024, TechCorp reduced greenhouse gas emissions by 35% compared to 2020 baseline. This was achieved through facility upgrades, renewable energy procurement, and process optimization.',
    evidenceSnippet: '"GHG intensity improved to 0.45 MT CO2e per $M revenue, down from 0.89 in 2020."',
    entities: [
      { id: 'e-2-1', name: 'GHG Emissions', type: 'Metric', sourceChunkId: 'chunk-2' },
      { id: 'e-2-2', name: '35% Reduction', type: 'Achievement', sourceChunkId: 'chunk-2' },
      { id: 'e-2-3', name: 'Facility Upgrades', type: 'Initiative', sourceChunkId: 'chunk-2' },
      { id: 'e-2-4', name: '2020 Baseline', type: 'Reference', sourceChunkId: 'chunk-2' },
    ],
    relations: [
      { id: 'r-2-1', source: 'e-2-3', target: 'e-2-1', type: 'reduces' },
      { id: 'r-2-2', source: 'e-2-2', target: 'e-2-4', type: 'compared_to' },
    ],
    dagNodes: [
      { id: 'dag-2-1', label: 'Baseline', category: 'Reference' },
      { id: 'dag-2-2', label: 'Facility Upgrades', category: 'Action' },
      { id: 'dag-2-3', label: 'Emissions Reduction', category: 'Outcome' },
    ],
    dagEdges: [
      { id: 'dag-e-2-1', source: 'dag-2-2', target: 'dag-2-3', type: 'leads_to' },
      { id: 'dag-e-2-2', source: 'dag-2-1', target: 'dag-2-3', type: 'measured_against' },
    ],
  },
  {
    id: 'chunk-3',
    title: 'Renewable Energy Transition',
    summary: 'We have installed 250 MW of on-site renewable capacity and signed PPAs for an additional 500 MW. By 2025, renewable energy will account for 60% of our total electricity consumption.',
    evidenceSnippet: '"Our solar installations across 12 major facilities now offset peak demand by 40%."',
    entities: [
      { id: 'e-3-1', name: 'Renewable Capacity', type: 'Metric', sourceChunkId: 'chunk-3' },
      { id: 'e-3-2', name: '250 MW', type: 'Amount', sourceChunkId: 'chunk-3' },
      { id: 'e-3-3', name: 'Solar', type: 'Technology', sourceChunkId: 'chunk-3' },
      { id: 'e-3-4', name: 'PPA', type: 'Agreement', sourceChunkId: 'chunk-3' },
    ],
    relations: [
      { id: 'r-3-1', source: 'e-3-2', target: 'e-3-3', type: 'represents' },
      { id: 'r-3-2', source: 'e-3-4', target: 'e-3-1', type: 'secures' },
    ],
    dagNodes: [
      { id: 'dag-3-1', label: 'Renewable Goal', category: 'Objective' },
      { id: 'dag-3-2', label: 'On-site Solar', category: 'Investment' },
      { id: 'dag-3-3', label: 'PPAs', category: 'Contract' },
      { id: 'dag-3-4', label: '60% Target', category: 'SLA' },
    ],
    dagEdges: [
      { id: 'dag-e-3-1', source: 'dag-3-2', target: 'dag-3-1', type: 'contributes_to' },
      { id: 'dag-e-3-2', source: 'dag-3-3', target: 'dag-3-1', type: 'contributes_to' },
      { id: 'dag-e-3-3', source: 'dag-3-1', target: 'dag-3-4', type: 'targets' },
    ],
  },
  {
    id: 'chunk-4',
    title: 'Supply Chain Sustainability',
    summary: 'TechCorp has engaged with 85% of critical suppliers regarding sustainability practices. We implemented tier-1 supplier audits and established clear ESG expectations for all new partnerships.',
    evidenceSnippet: '"Our supplier engagement score improved from 42% in 2022 to 85% in 2024."',
    entities: [
      { id: 'e-4-1', name: 'Suppliers', type: 'Stakeholder', sourceChunkId: 'chunk-4' },
      { id: 'e-4-2', name: '85%', type: 'Percentage', sourceChunkId: 'chunk-4' },
      { id: 'e-4-3', name: 'ESG Audits', type: 'Process', sourceChunkId: 'chunk-4' },
      { id: 'e-4-4', name: 'Tier-1', type: 'Classification', sourceChunkId: 'chunk-4' },
    ],
    relations: [
      { id: 'r-4-1', source: 'e-4-1', target: 'e-4-3', type: 'subject_to' },
      { id: 'r-4-2', source: 'e-4-4', target: 'e-4-2', type: 'percentage_of' },
    ],
    dagNodes: [
      { id: 'dag-4-1', label: 'Supplier Engagement', category: 'Process' },
      { id: 'dag-4-2', label: 'Audits', category: 'Control' },
      { id: 'dag-4-3', label: 'Partnership Criteria', category: 'Policy' },
      { id: 'dag-4-4', label: 'Risk Mitigation', category: 'Outcome' },
    ],
    dagEdges: [
      { id: 'dag-e-4-1', source: 'dag-4-1', target: 'dag-4-2', type: 'includes' },
      { id: 'dag-e-4-2', source: 'dag-4-2', target: 'dag-4-4', type: 'achieves' },
      { id: 'dag-e-4-3', source: 'dag-4-3', target: 'dag-4-1', type: 'guides' },
    ],
  },
  {
    id: 'chunk-5',
    title: 'Water Management',
    summary: 'Water consumption per revenue unit decreased by 28% through facility-level improvements and wastewater recycling. We aim for water neutrality across all operations by 2030.',
    evidenceSnippet: '"Recycled water now represents 35% of total facility water usage."',
    entities: [
      { id: 'e-5-1', name: 'Water Usage', type: 'Metric', sourceChunkId: 'chunk-5' },
      { id: 'e-5-2', name: '28% Reduction', type: 'Achievement', sourceChunkId: 'chunk-5' },
      { id: 'e-5-3', name: 'Recycling', type: 'Technology', sourceChunkId: 'chunk-5' },
      { id: 'e-5-4', name: '2030', type: 'Timeline', sourceChunkId: 'chunk-5' },
    ],
    relations: [
      { id: 'r-5-1', source: 'e-5-3', target: 'e-5-1', type: 'reduces' },
      { id: 'r-5-2', source: 'e-5-2', target: 'e-5-4', type: 'progress_toward' },
    ],
    dagNodes: [
      { id: 'dag-5-1', label: 'Water Baseline', category: 'Measurement' },
      { id: 'dag-5-2', label: 'Recycling Tech', category: 'Technology' },
      { id: 'dag-5-3', label: 'Facility Improvements', category: 'Infrastructure' },
      { id: 'dag-5-4', label: 'Neutrality Goal', category: 'Target' },
    ],
    dagEdges: [
      { id: 'dag-e-5-1', source: 'dag-5-2', target: 'dag-5-4', type: 'enables' },
      { id: 'dag-e-5-2', source: 'dag-5-3', target: 'dag-5-4', type: 'enables' },
      { id: 'dag-e-5-3', source: 'dag-5-1', target: 'dag-5-2', type: 'informs' },
    ],
  },
  {
    id: 'chunk-6',
    title: 'Workforce Development',
    summary: 'TechCorp invested $45M in employee development, with 92% of workforce completing ESG training. We created 250 new roles in sustainability and green technology fields.',
    evidenceSnippet: '"Gender diversity in leadership reached 42%, up from 28% in 2019."',
    entities: [
      { id: 'e-6-1', name: 'Employee Training', type: 'Program', sourceChunkId: 'chunk-6' },
      { id: 'e-6-2', name: '92%', type: 'Percentage', sourceChunkId: 'chunk-6' },
      { id: 'e-6-3', name: 'Green Jobs', type: 'Position', sourceChunkId: 'chunk-6' },
      { id: 'e-6-4', name: '$45M', type: 'Investment', sourceChunkId: 'chunk-6' },
    ],
    relations: [
      { id: 'r-6-1', source: 'e-6-4', target: 'e-6-1', type: 'funds' },
      { id: 'r-6-2', source: 'e-6-1', target: 'e-6-2', type: 'participation_rate' },
    ],
    dagNodes: [
      { id: 'dag-6-1', label: 'Training Budget', category: 'Resource' },
      { id: 'dag-6-2', label: 'ESG Program', category: 'Initiative' },
      { id: 'dag-6-3', label: 'Skills Development', category: 'Outcome' },
      { id: 'dag-6-4', label: 'Green Roles', category: 'Hiring' },
    ],
    dagEdges: [
      { id: 'dag-e-6-1', source: 'dag-6-1', target: 'dag-6-2', type: 'funds' },
      { id: 'dag-e-6-2', source: 'dag-6-2', target: 'dag-6-3', type: 'delivers' },
      { id: 'dag-e-6-3', source: 'dag-6-3', target: 'dag-6-4', type: 'enables' },
    ],
  },
  {
    id: 'chunk-7',
    title: 'Governance & Risk Management',
    summary: 'Our Board has dedicated ESG oversight with quarterly reporting. We conduct annual climate risk assessments and integrate findings into strategic planning. ESG compensation metrics apply to 100% of executives.',
    evidenceSnippet: '"Board composition includes 5 members with sustainability expertise and 60% independent directors."',
    entities: [
      { id: 'e-7-1', name: 'Board', type: 'Governance', sourceChunkId: 'chunk-7' },
      { id: 'e-7-2', name: 'Climate Risk', type: 'Assessment', sourceChunkId: 'chunk-7' },
      { id: 'e-7-3', name: 'ESG Metrics', type: 'KPI', sourceChunkId: 'chunk-7' },
      { id: 'e-7-4', name: 'Executives', type: 'Stakeholder', sourceChunkId: 'chunk-7' },
    ],
    relations: [
      { id: 'r-7-1', source: 'e-7-1', target: 'e-7-2', type: 'oversees' },
      { id: 'r-7-2', source: 'e-7-3', target: 'e-7-4', type: 'applies_to' },
    ],
    dagNodes: [
      { id: 'dag-7-1', label: 'Board Oversight', category: 'Governance' },
      { id: 'dag-7-2', label: 'Risk Assessment', category: 'Analysis' },
      { id: 'dag-7-3', label: 'Strategy Integration', category: 'Planning' },
      { id: 'dag-7-4', label: 'Executive Alignment', category: 'Incentive' },
    ],
    dagEdges: [
      { id: 'dag-e-7-1', source: 'dag-7-1', target: 'dag-7-2', type: 'initiates' },
      { id: 'dag-e-7-2', source: 'dag-7-2', target: 'dag-7-3', type: 'informs' },
      { id: 'dag-e-7-3', source: 'dag-7-3', target: 'dag-7-4', type: 'includes' },
    ],
  },
  {
    id: 'chunk-8',
    title: 'Community & Social Impact',
    summary: 'TechCorp donated $12M to environmental and social programs, benefiting 100,000+ community members. We operate 8 STEM education centers and support local conservation projects in all major markets.',
    evidenceSnippet: '"60% of our facilities are located in communities where we invest in local schools and health initiatives."',
    entities: [
      { id: 'e-8-1', name: 'Community Programs', type: 'Initiative', sourceChunkId: 'chunk-8' },
      { id: 'e-8-2', name: '$12M', type: 'Investment', sourceChunkId: 'chunk-8' },
      { id: 'e-8-3', name: 'STEM Education', type: 'Program', sourceChunkId: 'chunk-8' },
      { id: 'e-8-4', name: '100,000+', type: 'Beneficiary', sourceChunkId: 'chunk-8' },
    ],
    relations: [
      { id: 'r-8-1', source: 'e-8-2', target: 'e-8-1', type: 'funds' },
      { id: 'r-8-2', source: 'e-8-3', target: 'e-8-4', type: 'benefits' },
    ],
    dagNodes: [
      { id: 'dag-8-1', label: 'Philanthropy Budget', category: 'Resource' },
      { id: 'dag-8-2', label: 'Education Program', category: 'Initiative' },
      { id: 'dag-8-3', label: 'Community Benefit', category: 'Outcome' },
      { id: 'dag-8-4', label: 'Local Employment', category: 'Impact' },
    ],
    dagEdges: [
      { id: 'dag-e-8-1', source: 'dag-8-1', target: 'dag-8-2', type: 'deploys' },
      { id: 'dag-e-8-2', source: 'dag-8-2', target: 'dag-8-3', type: 'creates' },
      { id: 'dag-e-8-3', source: 'dag-8-3', target: 'dag-8-4', type: 'enables' },
    ],
  },
  {
    id: 'chunk-9',
    title: 'Data & Privacy Leadership',
    summary: 'We maintain industry-leading data protection practices with zero material breaches. 98% of employee data governance training completed, and we achieved ISO 27001 certification across all operations.',
    evidenceSnippet: '"Our privacy impact assessments cover 100% of new products before launch."',
    entities: [
      { id: 'e-9-1', name: 'Data Protection', type: 'Program', sourceChunkId: 'chunk-9' },
      { id: 'e-9-2', name: 'ISO 27001', type: 'Certification', sourceChunkId: 'chunk-9' },
      { id: 'e-9-3', name: '98%', type: 'Percentage', sourceChunkId: 'chunk-9' },
      { id: 'e-9-4', name: 'Privacy Assessments', type: 'Process', sourceChunkId: 'chunk-9' },
    ],
    relations: [
      { id: 'r-9-1', source: 'e-9-1', target: 'e-9-2', type: 'achieves' },
      { id: 'r-9-2', source: 'e-9-4', target: 'e-9-1', type: 'supports' },
    ],
    dagNodes: [
      { id: 'dag-9-1', label: 'Security Framework', category: 'Standard' },
      { id: 'dag-9-2', label: 'Training Program', category: 'Initiative' },
      { id: 'dag-9-3', label: 'Certification', category: 'Achievement' },
      { id: 'dag-9-4', label: 'Risk Reduction', category: 'Outcome' },
    ],
    dagEdges: [
      { id: 'dag-e-9-1', source: 'dag-9-1', target: 'dag-9-2', type: 'defines' },
      { id: 'dag-e-9-2', source: 'dag-9-2', target: 'dag-9-3', type: 'leads_to' },
      { id: 'dag-e-9-3', source: 'dag-9-3', target: 'dag-9-4', type: 'achieves' },
    ],
  },
  {
    id: 'chunk-10',
    title: 'Innovation & Future Roadmap',
    summary: 'TechCorp is investing $200M in deep-tech sustainability solutions including carbon capture, circular design, and AI-driven resource optimization. We aim to commercialize 5 new solutions by 2027.',
    evidenceSnippet: '"Our R&D pipeline includes projects with partners like MIT and Stanford on breakthrough sustainability technologies."',
    entities: [
      { id: 'e-10-1', name: 'R&D Investment', type: 'Funding', sourceChunkId: 'chunk-10' },
      { id: 'e-10-2', name: '$200M', type: 'Amount', sourceChunkId: 'chunk-10' },
      { id: 'e-10-3', name: 'Carbon Capture', type: 'Technology', sourceChunkId: 'chunk-10' },
      { id: 'e-10-4', name: 'Universities', type: 'Partner', sourceChunkId: 'chunk-10' },
    ],
    relations: [
      { id: 'r-10-1', source: 'e-10-2', target: 'e-10-3', type: 'funds' },
      { id: 'r-10-2', source: 'e-10-4', target: 'e-10-1', type: 'collaborates_on' },
    ],
    dagNodes: [
      { id: 'dag-10-1', label: 'Innovation Fund', category: 'Resource' },
      { id: 'dag-10-2', label: 'Technology Research', category: 'Development' },
      { id: 'dag-10-3', label: 'Prototyping', category: 'Phase' },
      { id: 'dag-10-4', label: 'Market Launch', category: 'Commercialization' },
    ],
    dagEdges: [
      { id: 'dag-e-10-1', source: 'dag-10-1', target: 'dag-10-2', type: 'funds' },
      { id: 'dag-e-10-2', source: 'dag-10-2', target: 'dag-10-3', type: 'leads_to' },
      { id: 'dag-e-10-3', source: 'dag-10-3', target: 'dag-10-4', type: 'leads_to' },
    ],
  },
];
