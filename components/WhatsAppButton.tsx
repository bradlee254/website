import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-40 flex h-14 items-center rounded-full bg-[#1fa855] text-white shadow-lg shadow-ink/25 transition-[background-color,transform] duration-200 hover:bg-[#178a45] active:scale-95"
    >
      <span className="flex h-14 w-14 items-center justify-center">
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
      </span>
      {/* Label slides open on pointer devices; touch users just get the icon. */}
      <span
        aria-hidden="true"
        className="grid grid-cols-[0fr] transition-[grid-template-columns] duration-300 ease-out-expo group-hover:grid-cols-[1fr] group-focus-visible:grid-cols-[1fr]"
      >
        <span className="overflow-hidden whitespace-nowrap text-[0.9375rem] font-semibold">
          <span className="pr-5">Chat on WhatsApp</span>
        </span>
      </span>
    </a>
  );
}
