'use client'
function RatingStars({ rating }) {
  const roundedRating = Math.round(rating); // Redondeamos el rating al entero más cercano

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((value) => (
        <div
          key={value}
          name="rating"
          className="mask mask-star-2 bg-orange-400"
          aria-label={`${value} star`}
          aria-current={value === roundedRating}
          readOnly
        />
      ))}
    </div>
  );
}
export default RatingStars;