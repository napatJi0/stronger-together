export default function SupMemberCard({
  name = "Member Name",
  role = "Member Role",
  className = "",
}) {
  return (
    <div className={`border border-1 rounded-2xl h-35 w-full flex flex-row my-auto p-5 gap-5 items-center ${className}`}>
        <div className="border border-1 rounded-2xl w-25 h-25" />
        <div className="m-1">
            <h1 className="text-lg font-semibold">{name}</h1>
            <p className="text-sm text-gray-600">{role}</p>
        </div>
    </div>
  );
}
