export interface Entity {
  id: string;
  name: string;
  type: string;
  sourceChunkId: string;
}

export interface Relation {
  id: string;
  source: string;
  target: string;
  type: string;
}

export interface DagNode {
  id: string;
  label: string;
  category: string;
}

export interface DagEdge {
  id: string;
  source: string;
  target: string;
  type: string;
}

export interface ReportChunk {
  id: string;
  title: string;
  summary: string;
  evidenceSnippet: string;
  entities: Entity[];
  relations: Relation[];
  dagNodes: DagNode[];
  dagEdges: DagEdge[];
}

export interface SelectedNode {
  id: string;
  type: 'entity' | 'dagNode';
  data: Entity | DagNode;
}
