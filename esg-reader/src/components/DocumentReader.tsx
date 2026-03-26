import { useState, useRef } from 'react';
import type { ReportChunk } from '../types';
import { ChunkCard } from './ChunkCard';
import { GraphPanel } from './GraphPanel';

interface DocumentReaderProps {
  chunks: ReportChunk[];
}

export const DocumentReader: React.FC<DocumentReaderProps> = ({ chunks }) => {
  const [activeChunkId, setActiveChunkId] = useState<string>(chunks[0]?.id || '');
  const containerRef = useRef<HTMLDivElement>(null);
  const chunkRefsMap = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const activeChunk = chunks.find((c) => c.id === activeChunkId) || chunks[0];

  const handleScroll = () => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.top + containerRect.height / 2;

    let closestChunk = chunks[0];
    let closestDistance = Infinity;

    chunks.forEach((chunk) => {
      const element = chunkRefsMap.current[chunk.id];
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const distance = Math.abs(elementCenter - containerCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestChunk = chunk;
      }
    });

    if (closestChunk.id !== activeChunkId) {
      setActiveChunkId(closestChunk.id);
    }
  };

  return (
    <div className="document-reader">
      {/* Left Panel - Entity-Relation Graph */}
      <div className="left-panel">
        <div className="graph-panel-header">Entity-Relation Graph</div>
        <GraphPanel
          type="er"
          entities={activeChunk.entities}
          relations={activeChunk.relations}
          chunkId={activeChunk.id}
        />
      </div>

      {/* Center Panel - Document Chunks */}
      <div className="center-panel">
        <div className="center-header">ESG Report Chunks</div>
        <div
          ref={containerRef}
          className="chunks-container"
          onScroll={handleScroll}
        >
          {chunks.map((chunk) => (
            <div
              key={chunk.id}
              ref={(el) => {
                if (el) chunkRefsMap.current[chunk.id] = el;
              }}
            >
              <ChunkCard
                chunk={chunk}
                isActive={chunk.id === activeChunkId}
                onClick={setActiveChunkId}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel - DAG Graph */}
      <div className="right-panel">
        <div className="graph-panel-header">DAG Graph</div>
        <GraphPanel
          type="dag"
          dagNodes={activeChunk.dagNodes}
          dagEdges={activeChunk.dagEdges}
          chunkId={activeChunk.id}
        />
      </div>
    </div>
  );
};
