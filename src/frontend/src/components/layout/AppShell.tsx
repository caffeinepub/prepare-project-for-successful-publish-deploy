import { ReactNode } from 'react';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-background">
      <div className="flex-1 flex flex-col w-full max-w-[428px] mx-auto">
        {children}
      </div>
    </div>
  );
}
