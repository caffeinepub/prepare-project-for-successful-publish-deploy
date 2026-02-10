import { Badge } from '@/components/ui/badge';
import { Flame } from 'lucide-react';

interface ItemBadgesProps {
  badges?: string[];
  spiceLevel?: number;
}

export function ItemBadges({ badges = [], spiceLevel }: ItemBadgesProps) {
  return (
    <div className="flex flex-wrap gap-1.5 mt-1.5">
      {badges.map((badge) => (
        <Badge 
          key={badge} 
          variant="secondary"
          className="text-xs font-medium px-2 py-0.5 bg-accent/10 text-accent border-accent/20"
        >
          {badge}
        </Badge>
      ))}
      {spiceLevel && spiceLevel > 0 && (
        <Badge 
          variant="secondary"
          className="text-xs font-medium px-2 py-0.5 bg-destructive/10 text-destructive border-destructive/20 flex items-center gap-0.5"
        >
          <Flame className="w-3 h-3" />
          {spiceLevel === 1 && 'Mild'}
          {spiceLevel === 2 && 'Medium'}
          {spiceLevel === 3 && 'Hot'}
        </Badge>
      )}
    </div>
  );
}
