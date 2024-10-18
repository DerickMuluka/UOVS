import Navbar from '../components/Navbar';
import PollCard from '../components/PollCard';
import { useEffect, useState } from 'react';
import { getPolls } from '../utils/api';

export default function Polls() {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    async function fetchPolls() {
      const response = await getPolls();
      setPolls(response.polls);
    }
    fetchPolls();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Available Polls</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {polls.map((poll) => (
            <PollCard key={poll.id} poll={poll} />
          ))}
        </div>
      </div>
    </>
  );
}
