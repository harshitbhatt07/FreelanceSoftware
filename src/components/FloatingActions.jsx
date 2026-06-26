import { Link } from "react-router-dom";
import { ArrowUp, MessageCircle } from "lucide-react";

export function FloatingActions() {
  return (
    <>
      <Link
        to="/contact"
        className="fixed bottom-24 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-2xl"
      >
        <MessageCircle />
      </Link>
      <a
        href="#top"
        className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-white text-black shadow-2xl"
      >
        <ArrowUp />
      </a>
    </>
  );
}
