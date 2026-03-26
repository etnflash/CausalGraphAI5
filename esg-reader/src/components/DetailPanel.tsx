import type { SelectedNode, Entity, DagNode } from '../types';

interface DetailPanelProps {
  selectedNode: SelectedNode | null;
}

export const DetailPanel: React.FC<DetailPanelProps> = ({ selectedNode }) => {
  if (!selectedNode) {
    return null;
  }

  const isEntity = selectedNode.type === 'entity';
  const data = selectedNode.data as Entity | DagNode;

  return (
    <div className="detail-card">
      <h3 className="detail-card-title">
        {isEntity ? (data as Entity).name : (data as DagNode).label}
      </h3>
      <div className="detail-card-content">
        {isEntity && (
          <>
            <p><strong>Type:</strong> {(data as Entity).type}</p>
            <p><strong>Source Chunk:</strong> {(data as Entity).sourceChunkId}</p>
          </>
        )}
        {!isEntity && (
          <>
            <p><strong>Category:</strong> {(data as DagNode).category}</p>
          </>
        )}
      </div>
    </div>
  );
};
