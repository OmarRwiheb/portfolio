export default function Experience({ title, jd, place, startDate, endDate, location }) {
  return (
    <>
      <div className="mb-14">
        <h3 className="text-white font-semibold text-2xl mb-3">
          {title} <span className="text-[#037EF3]">@{place}</span>
        </h3>
        <div className="flex justify-between lg:justify-start gap-10 mt-5 mb-5">
          <p className="text-slate-400 text-[15px] lg:text-lg">{location}</p>
          <p className="text-slate-400 text-[15px] lg:text-lg">{startDate} - {endDate}</p>
        </div>
        {/* Added pl-5 to push the list inside */}
        <ul className="text-slate-400 text-[15px] lg:text-lg list-disc pl-5 flex flex-col gap-2">
          {jd.map((j, index) => (
            <li key={index}>{j}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
