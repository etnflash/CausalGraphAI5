import './styles.css';
import { DocumentReader } from './components/DocumentReader';
import { mockReportChunks } from './data/mockReport';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>ESG Report Reader</h1>
        <p>Scroll-synchronized document reader with entity-relation and DAG graphs</p>
      </header>
      <DocumentReader chunks={mockReportChunks} />
    </div>
  );
}

export default App;
