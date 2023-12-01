import TopNav from "./TopNav";

export default function Header ({setScreen}) {
  return <header className="header"><TopNav setScreen={setScreen} /></header>
}