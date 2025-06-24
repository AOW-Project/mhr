export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Mystic Heaven Realty</div>
      <div className="space-x-6 hidden md:flex">
        <a href="#">Home</a>
        <a href="#">Properties</a>
        <a href="#">About Us</a>
        <a href="#">For Buyers</a>
        <a href="#">Partners</a>
        <a href="#">Contact Us</a>
      </div>
      <div className="text-sm text-gray-600 hidden md:block">Dubai | India</div>
    </nav>
  );
}