const Header = () => {
  return (
    <header className="relative w-full overflow-hidden bg-cinder uppercase dark:border-b-2 dark:border-b-icterine dark:pb-8">
      <h1 className="relative -left-2 -top-4 m-0 -mb-14 whitespace-nowrap p-0 text-[15.9vw]">
        Brazilian Nut <span className="outline">News</span>
      </h1>
      <img
        src="/images/subheading.svg"
        alt="Where the best news rises to the top"
        className="absolute bottom-8 right-0 bg-cinder px-3 py-1"
      />
    </header>
  )
}

export default Header
