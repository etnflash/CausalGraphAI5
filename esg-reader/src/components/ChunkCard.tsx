import type { ReportChunk } from '../types';

interface ChunkCardProps {
  chunk: ReportChunk;
  isActive: boolean;
  onClick: (chunkId: string) => void;
}

export const ChunkCard: React.FC<ChunkCardProps> = ({ chunk, isActive, onClick }) => {
  return (
    <div
      className={`chunk-card ${isActive ? 'active' : ''}`}
      onClick={() => onClick(chunk.id)}
    >
      <div className="chunk-card-header">
        <span className="chunk-card-id">{chunk.id}</span>
      </div>
      <div className="chunk-card-title">{chunk.title}</div>
      <div className="chunk-card-summary">{chunk.summary}</div>
      <div className="chunk-card-snippet">{chunk.evidenceSnippet}</div>
    </div>
  );
};
