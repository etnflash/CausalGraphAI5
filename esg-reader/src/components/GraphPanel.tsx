import { useEffect, useRef, useState } from 'react';
import cytoscape from 'cytoscape';
import type { Entity, DagNode, DagEdge, Relation } from '../types';

interface GraphPanelProps {
  type: 'er' | 'dag';
  entities?: Entity[];
  relations?: Relation[];
  dagNodes?: DagNode[];
  dagEdges?: DagEdge[];
  chunkId: string;
}

interface NodeDetail {
  id: string;
  label: string;
  type?: string;
  category?: string;
}

export const GraphPanel: React.FC<GraphPanelProps> = ({
  type,
  entities = [],
  relations = [],
  dagNodes = [],
  dagEdges = [],
  chunkId,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedNode, setSelectedNode] = useState<NodeDetail | null>(null);

  const fitGraph = (cy: cytoscape.Core) => {
    cy.resize();
    cy.fit(cy.elements(), 90);
    cy.center(cy.elements());
  };

  useEffect(() => {
    if (!containerRef.current) return;

    setSelectedNode(null);

    const elements: cytoscape.ElementDefinition[] = [];

    if (type === 'er') {
      entities.forEach((entity) => {
        elements.push({
          data: {
            id: entity.id,
            label: entity.name,
            type: entity.type,
          },
        });
      });

      relations.forEach((rel) => {
        elements.push({
          data: {
            id: rel.id,
            source: rel.source,
            target: rel.target,
            label: rel.type,
          },
        });
      });
    } else {
      dagNodes.forEach((node) => {
        elements.push({
          data: {
            id: node.id,
            label: node.label,
            category: node.category,
          },
        });
      });

      dagEdges.forEach((edge) => {
        elements.push({
          data: {
            id: edge.id,
            source: edge.source,
            target: edge.target,
            label: edge.type,
          },
        });
      });
    }

    const cy = cytoscape({
      container: containerRef.current,
      elements,
      style: getStylesheet(type),
      layout:
        type === 'er'
          ? {
              name: 'grid',
              fit: true,
              padding: 90,
              avoidOverlap: true,
              animate: false,
            }
          : {
              name: 'breadthfirst',
              directed: true,
              fit: true,
              padding: 90,
              avoidOverlap: true,
              animate: false,
              spacingFactor: 1.5,
            },
      wheelSensitivity: 0.1,
      minZoom: 0.2,
      maxZoom: 1,
      userZoomingEnabled: false,
      userPanningEnabled: false,
      panningEnabled: false,
      boxSelectionEnabled: false,
    });

    fitGraph(cy);

    const onWindowResize = () => {
      fitGraph(cy);
    };

    window.addEventListener('resize', onWindowResize);

    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(() => fitGraph(cy));
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Handle node click
    cy.on('tap', 'node', (event) => {
      const node = event.target;
      const data = node.data();
      
      setSelectedNode({
        id: data.id,
        label: data.label,
        type: data.type,
        category: data.category,
      });

      // Highlight selected node
      cy.elements().removeClass('selected');
      node.addClass('selected');
    });

    // Handle background click to deselect
    cy.on('tap', (event) => {
      if (event.target === cy) {
        setSelectedNode(null);
        cy.elements().removeClass('selected');
      }
    });

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', onWindowResize);
      cy.destroy();
    };
  }, [type, entities, relations, dagNodes, dagEdges, chunkId]);

  return (
    <div className="graph-panel">
      <div className="graph-container">
        <div ref={containerRef} className="graph-canvas" />
      </div>
      {selectedNode && (
        <div className="detail-section">
          <div className="detail-title">{selectedNode.label}</div>
          {selectedNode.type && (
            <div className="detail-value">
              <strong>Type:</strong> {selectedNode.type}
            </div>
          )}
          {selectedNode.category && (
            <div className="detail-value">
              <strong>Category:</strong> {selectedNode.category}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

function getNodeColor(type: string, graphType: 'er' | 'dag'): string {
  if (graphType === 'er') {
    // Entity types
    const typeColors: { [key: string]: string } = {
      Organization: '#8b5cf6',
      Metric: '#06b6d4',
      Initiative: '#10b981',
      Timeline: '#f59e0b',
      Stakeholder: '#f87171',
      Process: '#a78bfa',
      Agreement: '#34d399',
      Achievement: '#fbbf24',
      Technology: '#60a5fa',
      Amount: '#c084fc',
      Reference: '#93c5fd',
      Policy: '#fca5a5',
      Goal: '#d1d5db',
      Area: '#9ca3af',
      Classification: '#e5e7eb',
      Percentage: '#b1b5c2',
      Objective: '#cbd5e1',
      Solution: '#a1a8c2',
      Contract: '#d9d9dd',
      SLA: '#b9bac4',
      Investment: '#f0a0ff',
      Position: '#aed6f1',
      Action: '#82e0aa',
      Control: '#f9e79f',
      Outcome: '#f8b88b',
      Governance: '#abebc6',
      Analysis: '#85c1e2',
      Incentive: '#f5a9d0',
      Resource: '#82e0aa',
      Phase: '#f9e79f',
      Commercialization: '#f5a9d0',
      Hiring: '#85c1e2',
      Infrastructure: '#abebc6',
      Measurement: '#82e0aa',
    };
    return typeColors[type] || '#8b5cf6';
  } else {
    // DAG categories
    const categoryColors: { [key: string]: string } = {
      Goal: '#ec4899',
      Solution: '#f87171',
      Area: '#fbbf24',
      Reference: '#06b6d4',
      Action: '#10b981',
      Outcome: '#8b5cf6',
      Impact: '#f59e0b',
      Objective: '#a78bfa',
      Contract: '#34d399',
      SLA: '#fca5a5',
      Process: '#60a5fa',
      Control: '#f0a0ff',
      Policy: '#82e0aa',
      Initiative: '#f9e79f',
      Funding: '#f8b88b',
      Development: '#85c1e2',
      Analysis: '#abebc6',
      Planning: '#f5a9d0',
      Incentive: '#aed6f1',
      Technology: '#82e0aa',
      Investment: '#f9e79f',
      Phase: '#f5a9d0',
      Measurement: '#85c1e2',
      Infrastructure: '#abebc6',
      Standard: '#82e0aa',
      Achievement: '#f9e79f',
      Hiring: '#f5a9d0',
    };
    return categoryColors[type] || '#ec4899';
  }
}

function getStylesheet(type: 'er' | 'dag'): cytoscape.StylesheetCSS[] {
  return [
    {
      selector: 'node',
      css: {
        'background-color': (ele: any) => getNodeColor(ele.data(type === 'er' ? 'type' : 'category') || 'default', type),
        'border-color': '#cbd5e1',
        'border-width': 2,
        color: '#f1f5f9',
        'font-size': 10,
        'font-weight': 600,
        label: 'data(label)',
        'padding': 8,
        'shape': type === 'er' ? 'ellipse' : 'round-rectangle',
        'text-halign': 'center',
        'text-valign': 'center',
        'text-wrap': 'wrap',
        'text-max-width': type === 'er' ? 78 : 90,
        'width': type === 'er' ? 68 : 84,
        'height': type === 'er' ? 50 : 48,
        'box-shadow-blur': 4,
        'box-shadow-color': 'rgba(0, 0, 0, 0.3)',
        'box-shadow-offset-x': 0,
        'box-shadow-offset-y': 2,
      } as any,
    },
    {
      selector: 'node.selected',
      css: {
        'border-color': '#60a5fa',
        'border-width': 3,
        'box-shadow-blur': 8,
        'box-shadow-color': 'rgba(96, 165, 250, 0.5)',
        'box-shadow-offset-x': 0,
        'box-shadow-offset-y': 0,
      } as any,
    },
    {
      selector: 'edge',
      css: {
        'curve-style': 'bezier',
        'target-arrow-color': '#cbd5e1',
        'target-arrow-shape': 'triangle',
        'line-color': '#64748b',
        'line-opacity': 0.7,
        'font-size': 10,
        label: 'data(label)',
        'text-background': true,
        'text-background-color': '#1e293b',
        'text-background-padding': 2,
        'text-background-opacity': 0.9,
        width: 2,
      } as any,
    },
  ];
}
