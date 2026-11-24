"use client";

import { motion, AnimatePresence } from "framer-motion";

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SizeGuideModal({ isOpen, onClose }: SizeGuideModalProps) {
  const chart = [
    { size: "S", chest: "40 in", length: "29 in", shoulder: "21 in" },
    { size: "M", chest: "42 in", length: "30 in", shoulder: "22 in" },
    { size: "L", chest: "45 in", length: "31 in", shoulder: "23 in" },
    { size: "XL", chest: "48 in", length: "32 in", shoulder: "24 in" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/20"
          />

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-bg border border-hair p-6 sm:p-8"
          >
            <div className="flex items-center justify-between pb-4 border-b border-hair">
              <span className="font-mono text-xs uppercase tracking-mono text-ink">
                Fit & Sizing
              </span>
              <button
                onClick={onClose}
                className="font-mono text-xs uppercase tracking-mono text-muted hover:text-ink cursor-pointer"
              >
                Close (×)
              </button>
            </div>

            <div className="py-6 space-y-4 text-xs font-mono">
              <p className="text-muted leading-relaxed font-body">
                Our silhouettes are cut with an architectural, relaxed shoulder drop. For our intended relaxed drape, take your true size. For a regular fit, select one size down.
              </p>

              <table className="w-full text-left border-t border-hair">
                <thead>
                  <tr className="border-b border-hair text-muted uppercase tracking-mono text-[11px]">
                    <th className="py-2.5">Size</th>
                    <th className="py-2.5">Chest</th>
                    <th className="py-2.5">Length</th>
                    <th className="py-2.5">Shoulder</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-hair">
                  {chart.map((row) => (
                    <tr key={row.size}>
                      <td className="py-2.5 text-ink font-bold">{row.size}</td>
                      <td className="py-2.5 text-muted">{row.chest}</td>
                      <td className="py-2.5 text-muted">{row.length}</td>
                      <td className="py-2.5 text-muted">{row.shoulder}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button
              onClick={onClose}
              className="w-full btn-ink py-3 text-xs font-mono uppercase tracking-mono cursor-pointer"
            >
              Close Guide
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
