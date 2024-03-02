// import { cn } from "@/lib/utils";  //For dynamic classes in Tailwind

import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div >
      <UserButton
        afterSignOutUrl="/"  
      />
      <ModeToggle/>
    </div>
  );
}
