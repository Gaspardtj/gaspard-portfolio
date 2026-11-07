
import { useEffect, useState } from "react";
import { Expand, X } from "lucide-react";

interface CertificateViewerProps {
  image: string;
  title: string;
}

export default function CertificateViewer({
  image,
  title,
}: CertificateViewerProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group relative block w-full overflow-hidden rounded-xl border border-white/10 bg-slate-800 p-3"
        aria-label={`Enlarge ${title}`}
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-64 w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
        />

        <span className="absolute bottom-4 right-4 flex items-center gap-2 rounded-lg bg-slate-950/90 px-3 py-2 text-xs text-white">
          <Expand size={15} />
          View Certificate
        </span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close certificate"
            className="absolute right-5 top-5 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
          >
            <X size={24} />
          </button>

          <div
            className="flex max-h-[90vh] max-w-6xl flex-col items-center gap-4"
            onClick={(event) => event.stopPropagation()}
          >
            <h2 className="text-center text-lg font-semibold text-white">
              {title}
            </h2>

            <img
              src={image}
              alt={title}
              className="max-h-[75vh] max-w-full rounded-lg object-contain"
            />

            <a
              href={image}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/20 px-5 py-2 text-sm text-white hover:bg-white/10"
            >
              Open Original Image
            </a>
          </div>
        </div>
      )}
    </>
  );
}
