// import { cn } from "@/lib/utils";  //For dynamic classes in Tailwind

import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div >
      <UserButton
        afterSignOutUrl="/"  
      />
    </div>
  );
}
