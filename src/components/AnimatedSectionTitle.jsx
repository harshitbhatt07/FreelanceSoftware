import { motion } from "framer-motion";
import { fade } from "./animations";
import { SectionTitle } from "./SectionTitle";

export function AnimatedSectionTitle(props) {
  return (
    <motion.div {...fade}>
      <SectionTitle {...props} />
    </motion.div>
  );
}
