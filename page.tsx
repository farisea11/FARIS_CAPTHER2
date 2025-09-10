import Link from "next/link";

export default function HomePage() {
  return (
    <div>

      <header className="bg-[#5a2d1c] text-white py-4 sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center px-6">
          <Link href="/" className="text-2xl font-bold">
            Nicole
          </Link>

          <ul className="flex space-x-6 text-sm md:text-base">
            <li>
              <Link href="/home" className="hover:text-[#f4c7b5]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/portofolio" className="hover:text-[#f4c7b5]">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-[#f4c7b5]">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <section
        className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 text-center md:text-left"
        style={{
          backgroundImage: "url('/bg-flowers.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex-shrink-0">
          <img
            src="/FARIS.jpg"
            alt="Profile"
            className="w-48 h-48 rounded-full border-4 border-[#f4c7b5] shadow-lg"
          />
        </div>

        <div className="flex flex-col justify-center max-w-xl">
          <h1 className="text-4xl font-bold mb-2">Hi, I’m Faris</h1>
          <h2 className="text-lg font-medium mb-4">A Frontend Developer</h2>
          <p className="leading-relaxed text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Magni, inventore? Nesciunt cupiditate exercitationem ex id, et,
            voluptatum facere laborum aspernatur adipisci maiores corrupti similique dolorum,
            tenetur nisi unde quasi magni.
          </p>
        </div>
      </section>
    </div>
  );
}
