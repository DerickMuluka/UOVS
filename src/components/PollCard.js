import Link from 'next/link';

const PollCard = ({ poll }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-2">{poll.title}</h3>
      <p className="text-gray-700">{poll.description}</p>
      <Link href={`/vote?pollId=${poll.id}`}>
        <a className="text-blue-500 mt-4 inline-block">Vote Now</a>
      </Link>
    </div>
  );
};

export default PollCard;
