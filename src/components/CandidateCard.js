const CandidateCard = ({ candidate, onVote }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h4 className="text-lg font-semibold">{candidate.name}</h4>
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
        onClick={() => onVote(candidate.id)}
      >
        Vote
      </button>
    </div>
  );
};

export default CandidateCard;
