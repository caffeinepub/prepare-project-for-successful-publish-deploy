import { MenuItemCard } from './MenuItemCard';
import { RevealOnEnter } from '../motion/RevealOnEnter';
import type { MenuSection } from '../../features/menu/menuData';

interface MenuSectionPageProps {
  section: MenuSection;
}

export function MenuSectionPage({ section }: MenuSectionPageProps) {
  return (
    <section className="px-6 py-8 min-h-[calc(100vh-280px)] overflow-y-auto smooth-scroll">
      <RevealOnEnter delay={0}>
        <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
          {section.title}
        </h2>
        {section.description && (
          <p className="font-body text-sm text-muted-foreground mb-8">
            {section.description}
          </p>
        )}
      </RevealOnEnter>

      <div className="space-y-8">
        {section.items.map((item, index) => (
          <RevealOnEnter key={item.id} delay={index * 0.1}>
            <MenuItemCard item={item} />
          </RevealOnEnter>
        ))}
      </div>
    </section>
  );
}
