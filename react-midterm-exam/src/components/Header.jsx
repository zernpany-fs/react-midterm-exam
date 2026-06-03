import { NavLink } from "react-router";

export default function Header() {
  return (
    <div className="flex flex-col  p-4  ">
      <div className="flex justify-between mb-6 bg-blue-950 text-white p-4 rounded-lg">
        <div>
          <p>Writing workspace</p>
          <h1 className="text-4xl font-extrabold">
            Capture ideas. Keep the details close.
          </h1>
          <p>A focused notes shelf for quick thoughts and longer references.</p>
        </div>
        <NavLink
          to="/notes"
          className="border-none flex items-center p-4 text-6xl"
        >
          📒
        </NavLink>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-emerald-800">
            Token CRUD example
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-normal">Notes</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Search, create, update, and delete notes.
          </p>
        </div>
        <div>
          <NavLink
            to="/notes/new"
            className="bg-green-700 w-2.5 h-2.5 px-4 py-2.5 rounded-lg text-white"
          >
            + Create Note
          </NavLink>
        </div>
      </div>
    </div>
  );
}
