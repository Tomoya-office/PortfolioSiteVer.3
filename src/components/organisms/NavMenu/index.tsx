import styles from "./index.module.css";
import NavMenuItem from "../../atoms/NavMenuItem";

export type NavMenuData = {
  label: string;
  href: string;
};

type Props = {
  menus: NavMenuData[];
};

export default function NavMenu({ menus }: Props) {
  return (
    <nav className={styles.Navigation}>
      <ul className={styles.UnorderedList}>
        {menus.map((menu, index) => (
          <NavMenuItem
            key={`${menu.href}-${index}`}
            label={menu.label}
            href={menu.href}
          />
        ))}
      </ul>
    </nav>
  );
}
