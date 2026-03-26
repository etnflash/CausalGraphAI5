# ESG Report Reader - Frontend Prototype

## Project Summary

A React + Vite + TypeScript frontend prototype featuring a scroll-synchronized document reader for long ESG-style reports with interactive entity-relation and DAG graphs.

## 📁 Complete Folder Structure

```
esg-reader/
├── src/
│   ├── components/
│   │   ├── ChunkCard.tsx          # Individual chunk display card
│   │   ├── DetailPanel.tsx        # Detail information panel
│   │   ├── DocumentReader.tsx     # Main reader with 3-column layout
│   │   └── GraphPanel.tsx         # Cytoscape graph visualization
│   ├── data/
│   │   └── mockReport.ts          # Mock ESG report data (10 chunks)
│   ├── App.tsx                    # Main app component
│   ├── types.ts                   # TypeScript interfaces
│   ├── styles.css                 # Global styles & layout
│   ├── main.tsx                   # React entry point
│   ├── index.css                  # Base styles
│   └── assets/                    # Static assets
├── public/                        # Public files
├── index.html                     # HTML entry point
├── package.json                   # Dependencies & scripts
├── tsconfig.json                  # TypeScript configuration
├── vite.config.ts                 # Vite configuration
└── .gitignore                     # Git ignore file
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 16+ and npm installed

### Step 1: Navigate to Project
```bash
cd "c:\Users\Pro360\OneDrive\바탕 화면\ANU\COMP8715 - Tech Launcher Sem2\CausalGraphAI5\esg-reader"
```

### Step 2: Install Dependencies
```bash
npm install
```

This installs:
- React 19
- React DOM 19
- Cytoscape 3.33 (graph library)
- Vite 8 (build tool)
- TypeScript 5.9

## 🚀 Run the Development Server

```bash
npm run dev
```

The app will start at `http://localhost:5173/` (or the next available port)

## 📦 Build for Production

```bash
npm run build
```

Outputs optimized files to `dist/` folder

## 🎯 Features Implemented

### 1. 3-Column Layout
- **Left Panel (280px)**: Entity-Relation constellation graph
- **Center Panel (flexible)**: Scrollable summarized document chunks
- **Right Panel (280px)**: DAG constellation graph

### 2. Document Chunks
- 10 mock ESG report chunks with comprehensive data
- Smooth scroll synchronization
- Click to activate chunk
- Auto-update based on scroll position
- Visual active state highlighting

### 3. Entity-Relation Graph (Left)
- Shows entities and their relationships for active chunk
- Purple nodes (entities)
- Cyan edges (relations)
- Click nodes to view details
- COSE layout for organic positioning
- Local scope - only shows active chunk's graph

### 4. DAG Graph (Right)
- Shows directed acyclic graph for active chunk
- Pink nodes (DAG nodes by category)
- Cyan edges (relationship types)
- Click nodes to view details
- Hierarchical layout (top-to-bottom)
- Local scope - only shows active chunk's graph

### 5. Interactive Features
- **Click on chunks**: Activates chunk and syncs graphs
- **Scroll chunks**: Auto-detects active chunk based on scroll position
- **Click graph nodes**: Shows node details in panel below graph
- **Canvas click**: Deselects node
- **Smooth animations**: Transitions and scrolling

### 6. Dark Mode UI
- Professional dark theme (#0f172a - #1e293b)
- Light text on dark background
- Accent colors: Blue (#60a5fa), Cyan (#06b6d4), Purple (#8b5cf6), Pink (#ec4899)
- Clean minimal scrollbars
- Dark-mode friendly styling

## 📊 Mock Data Structure

Each chunk includes:
- `id`: Unique identifier
- `title`: Chunk title
- `summary`: Main text content
- `evidenceSnippet`: Supporting quote
- `entities`: Array of Entity objects
- `relations`: Array of Relation objects connecting entities
- `dagNodes`: Array of DAG nodes
- `dagEdges`: Array of DAG edges

### Sample Data
10 comprehensive ESG report chunks:
1. Executive Summary
2. Environmental Performance
3. Renewable Energy Transition
4. Supply Chain Sustainability
5. Water Management
6. Workforce Development
7. Governance & Risk Management
8. Community & Social Impact
9. Data & Privacy Leadership
10. Innovation & Future Roadmap

## 💾 Key Files & Code Overview

### types.ts
Defines all TypeScript interfaces:
- `Entity` - Organization, Metric, Initiative, Timeline
- `Relation` - Connects entities with type
- `DagNode` - Goal, Solution, Area categories
- `DagEdge` - Relationship types between DAG nodes
- `ReportChunk` - Complete chunk structure
- `SelectedNode` - Selected node tracking

### App.tsx
Main component that renders:
- Header with title
- DocumentReader component with mock data

### DocumentReader.tsx
Core logic:
- Manages active chunk state
- Handles scroll-to-active synchronization
- Auto-detects active chunk from scroll position
- Passes data to left/right graph panels
- Manages 3-column layout

### GraphPanel.tsx
Cytoscape integration:
- Renders entity-relation graph (left) or DAG graph (right)
- Handles node selection and highlighting
- Detail section below graph
- Responsive to active chunk changes
- Smooth graph updates

### ChunkCard.tsx
Chunk display:
- Shows title, summary, evidence snippet
- Active state styling
- Click handler for activation

### DetailPanel.tsx
Node details (utility component):
- Displays selected node information
- Type/Category details

### styles.css
Complete styling:
- 3-column layout with flexbox
- Dark theme variables
- Chunk card styles and hover effects
- Graph panel styling
- Scrollbar customization
- Responsive design

### mockReport.ts
Mock data with 10 fully populated  ESG chunks:
- Real-world ESG content (TechCorp examples)
- Comprehensive entity-relation networks
- Complex DAG structures
- Evidence snippets for authenticity

## 🎨 Color Scheme

| Element | Color | Usage |
|---------|-------|-------|
| Background Primary | #0f172a | Main background |
| Background Secondary | #1e293b | Panel background |
| Background Tertiary | #334155 | Header/footer backgrounds |
| Text Primary | #f1f5f9 | Main text |
| Text Secondary | #cbd5e1 | Secondary text |
| Text Tertiary | #94a3b8 | Subtle text |
| Accent Color | #60a5fa | Highlights, active state |
| Entity Nodes | #8b5cf6 | Purple (ER graph) |
| DAG Nodes | #ec4899 | Pink (DAG graph) |
| Relations/Edges | #06b6d4 | Cyan (all graphs) |
| Success | #10b981 | Success states |
| Warning | #f59e0b | Warning states |

## 🔧 Technical Highlights

- **TypeScript**: Fully typed with no `any` casts (where practical)
- **React Hooks**: useState, useEffect, useRef for state management
- **Cytoscape.js**: Professional graph visualization
- **CSS Grid/Flexbox**: Responsive 3-column layout
- **Mock Data**: No backend required - all data in mockReport.ts
- **Type Safety**: Complete TypeScript support
- **Vite**: Fast hot module replacement during development
- **Zero Configuration**: Ready to use out of the box

## 🖥️ Browser Support

Works in all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## 📝 Next Steps (Optional Enhancements)

If you want to extend this prototype later:
1. Replace `mockReport` with real API data
2. Add export to PDF/Excel
3. Add search functionality
4. Add full-report graph view
5. Add filtering by entity type
6. Add graph layout customization
7. Add node/edge styling customization
8. Add keyboard shortcuts
9. Add touch support
10. Add data persistence

## 🚨 Common Issues & Solutions

**Q: Port 5173 already in use?**
A: Vite will automatically use the next available port (5174, 5175, etc.)

**Q: Graphs not showing?**
A: Make sure all dependencies are installed: `npm install`

**Q: Build fails?**
A: Clear node_modules and reinstall: `rm -r node_modules && npm install`

**Q: TypeScript errors?**
A: Make sure you're using TypeScript 5.9+: `npm install typescript@latest`

## 📄 License

This is a prototype for educational purposes.

---

**Ready to run!** Execute `npm run dev` and open http://localhost:5173 in your browser.
