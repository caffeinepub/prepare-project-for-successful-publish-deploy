import { CircularImage } from '../media/CircularImage';
import { VegNonVegMark } from './VegNonVegMark';
import { ItemBadges } from './ItemBadges';
import type { MenuItem } from '../../features/menu/menuData';

interface MenuItemCardProps {
  item: MenuItem;
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <article className="bg-card rounded-lg p-5 shadow-soft border border-border/50">
      <div className="flex gap-4">
        {/* Circular Image with Veg/Non-veg indicator */}
        <div className="relative flex-shrink-0">
          <CircularImage
            src={item.image}
            alt={item.name}
            size={105}
          />
          <div className="absolute -top-1 -left-1">
            <VegNonVegMark isVeg={item.isVeg} />
          </div>
        </div>

        {/* Item Details */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-body text-lg font-semibold text-foreground leading-tight">
              {item.name}
            </h3>
            <span className="font-body text-lg font-bold text-accent whitespace-nowrap">
              ₹{item.price}
            </span>
          </div>

          {item.badges && item.badges.length > 0 && (
            <ItemBadges badges={item.badges} spiceLevel={item.spiceLevel} />
          )}

          <p className="font-body text-sm text-muted-foreground leading-relaxed mt-2">
            {item.description}
          </p>
        </div>
      </div>
    </article>
  );
}
