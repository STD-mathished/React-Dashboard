export default function NewsWidget() {
  const headlines = [
    "Global Markets Rally as Investors Digest Economic Data",
    "New Study Reveals the Benefits of a Plant-Based Diet",
    "Tech Companies Unveil Latest Advancements in AI",
    "Sports Update: Local Team Claims Victory in Championship"
  ];

  return (
    <div className="rounded-2xl shadow p-4 bg-white">
      <h2 className="text-lg font-bold mb-2">News</h2>
      <ul className="list-disc pl-5 text-sm">
        {headlines.map((headline, index) => (
          <li key={index} className="mb-1">{headline}</li>
        ))}
      </ul>
    </div>
  );
};
