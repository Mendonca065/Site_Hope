interface NavItemProps {
  href: string;
  text: string;
}

// Componente de navbar reutilizável

export const NavItem = ({ href, text }: NavItemProps) => {
  return (
    <li>
      <a
        href={href}
        className="duration-300 font-medium ease-linear hover:text-primary py-3"
      >
        {text}
      </a>
    </li>
  );
};
