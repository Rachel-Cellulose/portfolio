import { motion } from "framer-motion";
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const listVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const NavLinks = () => {
  const lists = ["About", "Experience", "Portfolio", "Contact Me"];

  return (
    <motion.div className="nav_links" variants={variants}>
      {lists.map((list) => (
        <motion.a
          href={`#${list}`}
          key={list}
          variants={listVariants}
          whileHover={{ scale: 1.0 }}
          whileTap={{ scale: 0.7 }}
        >
          {list}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default NavLinks;
