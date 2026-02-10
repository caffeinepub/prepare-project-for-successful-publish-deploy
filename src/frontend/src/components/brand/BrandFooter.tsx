import { Heart } from 'lucide-react';

export function BrandFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-card">
      <div className="px-6 py-6 text-center">
        <p className="text-sm text-muted-foreground font-body">
          Freshly made with love
        </p>
        <p className="text-xs text-muted-foreground/70 mt-2 font-body">
          © 2026. Built with <Heart className="inline-block w-3 h-3 text-accent fill-accent" /> using{' '}
          <a 
            href="https://caffeine.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
