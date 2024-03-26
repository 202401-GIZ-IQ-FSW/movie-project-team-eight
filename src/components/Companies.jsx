import Image from "next/image";

export default function Companies({ companies }) {
  return (
    <>
      {companies.map((company) => (
        <div className="flex gap-2 items-center">
          <Image
            src={`https://image.tmdb.org/t/p/original${company.logo_path}`}
            width={50}
            height={50}
            className="rounded-full h-8 w-8 object-cover"
            alt="Company Logo"
            key={company.id}
          />
          <span className="text-sm">{company.name}</span>
        </div>
      ))}
    </>
  );
}
