import Grid from '../components/Grid';
import Toolbar from '../components/Toolbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
     <h1 className="text-center text-2xl font-bold">SpreadSheet APP</h1>
      <Toolbar />
      <Grid />
    </div>
  );
}
