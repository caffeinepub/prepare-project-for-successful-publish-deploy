import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MenuPagerProps {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
  onGoToPage: (page: number) => void;
  sectionNames: string[];
}

export function MenuPager({ 
  currentPage, 
  totalPages, 
  onNext, 
  onPrev,
  onGoToPage,
  sectionNames 
}: MenuPagerProps) {
  return (
    <nav 
      className="sticky bottom-0 bg-card/95 backdrop-blur-sm border-t border-border px-4 py-3"
      aria-label="Menu navigation"
    >
      <div className="flex items-center justify-between gap-3">
        {/* Previous Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={onPrev}
          disabled={currentPage === 0}
          className="h-9 px-3"
          aria-label="Previous section"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        {/* Page Indicators */}
        <div className="flex items-center gap-1.5 flex-1 justify-center overflow-x-auto no-scrollbar">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => onGoToPage(index)}
              className={`
                h-2 rounded-full transition-all duration-300
                ${index === currentPage 
                  ? 'w-8 bg-accent' 
                  : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }
              `}
              aria-label={`Go to ${sectionNames[index]}`}
              aria-current={index === currentPage ? 'page' : undefined}
            />
          ))}
        </div>

        {/* Next Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={onNext}
          disabled={currentPage === totalPages - 1}
          className="h-9 px-3"
          aria-label="Next section"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Current Section Name */}
      <div className="text-center mt-2">
        <p className="text-xs font-medium text-muted-foreground font-body">
          {sectionNames[currentPage]}
        </p>
      </div>
    </nav>
  );
}
