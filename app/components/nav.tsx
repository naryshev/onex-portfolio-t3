"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Modal from './Modal';
import { motion } from "framer-motion";

export const Navigation: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting),
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500  border-zinc-800 "
				}`}
			>
				
				<div className="flex flex-row-reverse items-center justify-between p-4 md:p-6 mx-auto w-full">
					<div className="flex justify-between space-x-4 mr-2 ">
						<Link
							href="/credits"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Credits
						</Link>
						<Link
							href="/booking"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Booking
						</Link>
						{/* <Link
							href="/about"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							About
						</Link> */}
					</div>
					<motion.div drag
					whileHover={{ scale: 1.2 }}
					dragConstraints={{
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,}}
					whileTap={{ cursor: "grabbing" }}>
					<div className="flex justify-between items-center space-x-4 mt-4">
						
						{/* <Link
							href="/"
							className="duration-200 text-zinc-300 hover:text-zinc-100"
						>
							<ArrowLeft className="w-6 h-6 " />
						</Link> */}
						
						<Link
							href="/"
							className="h2word"
						>
					
							<span  className="hover:text-fuchsia-400 duration-500 text-fuchsia-500 text-5xl mt-10 ml-4 ">1X</span>

							{/* onClick={handleOpenModal}
							Add this back for modal */}

						</Link>
						
						
					</div>
					</motion.div>
				</div>

			</div>
			{/* {isModalOpen && <Modal onClose={handleCloseModal} />} */}
		</header>
		
	);
};
