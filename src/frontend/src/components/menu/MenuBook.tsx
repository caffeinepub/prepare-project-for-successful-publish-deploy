import { useState } from 'react';
import { MenuSectionPage } from './MenuSectionPage';
import { MenuPager } from './MenuPager';
import { menuSections } from '../../features/menu/menuData';
import { usePrefersReducedMotion } from '../motion/usePrefersReducedMotion';

export function MenuBook() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleNext = () => {
    if (currentPage < menuSections.length - 1) {
      setDirection('right');
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setDirection('left');
      setCurrentPage(currentPage - 1);
    }
  };

  const handleGoToPage = (pageIndex: number) => {
    if (pageIndex !== currentPage) {
      setDirection(pageIndex > currentPage ? 'right' : 'left');
      setCurrentPage(pageIndex);
    }
  };

  const currentSection = menuSections[currentPage];

  return (
    <main className="flex-1 flex flex-col relative overflow-hidden">
      <div className="flex-1 relative">
        <div 
          key={currentPage}
          className={
            prefersReducedMotion 
              ? 'animate-fade-in' 
              : direction === 'right' 
                ? 'animate-slide-in-right' 
                : 'animate-slide-in-left'
          }
        >
          <MenuSectionPage section={currentSection} />
        </div>
      </div>
      
      <MenuPager
        currentPage={currentPage}
        totalPages={menuSections.length}
        onNext={handleNext}
        onPrev={handlePrev}
        onGoToPage={handleGoToPage}
        sectionNames={menuSections.map(s => s.title)}
      />
    </main>
  );
}
