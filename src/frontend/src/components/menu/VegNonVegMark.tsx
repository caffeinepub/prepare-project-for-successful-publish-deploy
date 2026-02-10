interface VegNonVegMarkProps {
  isVeg: boolean;
}

export function VegNonVegMark({ isVeg }: VegNonVegMarkProps) {
  return (
    <div 
      className={`
        w-6 h-6 rounded-sm flex items-center justify-center
        ${isVeg ? 'bg-white border-2 border-success' : 'bg-white border-2 border-destructive'}
      `}
      aria-label={isVeg ? 'Vegetarian' : 'Non-vegetarian'}
    >
      <div 
        className={`
          w-2.5 h-2.5 rounded-full
          ${isVeg ? 'bg-success' : 'bg-destructive'}
        `}
      />
    </div>
  );
}
