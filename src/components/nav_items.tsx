import { Link } from "react-router-dom";

interface NavItemsProps {
  title: string;
  path: string;
}

export function NavItems({ title, path }: NavItemsProps) {
  return (
    <Link to={path}>{title}</Link>
  );
}