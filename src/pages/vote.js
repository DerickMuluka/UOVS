import Navbar from '../components/Navbar';
import CandidateCard from '../components/CandidateCard';
import { useEffect, useState } from 'react';
import { getCandidates, castVote } from '../utils/api';
import { useRouter } from 'next/router';

export default function Vote() {
  const router = useRouter();
  const { pollId } = router.query;
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    async function fetchCandidates() {
      const response = await getCandidates(pollId);
      setCandidates(response.candidates);
    }
    if (pollId) {
      fetchCandidates();
    }
  }, [pollId]);

  const handleVote = async (candidateId) => {
    const response = await castVote(candidateId, pollId);
    if (response.success) {
      alert('Vote cast successfully!');
    } else {
      alert('Failed to cast vote.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Vote for Your Candidate</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {candidates.map((candidate) => (
            <CandidateCard key={candidate.id} candidate={candidate} onVote={handleVote} />
          ))}
        </div>
      </div>
    </>
  );
}
