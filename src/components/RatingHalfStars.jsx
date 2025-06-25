'use client'
function RatingStars({ rating }) {
  const roundedRating = Math.round(rating * 2) / 2;

  // Array con los valores que representan cada mitad de estrella
  const starValues = [
    0.5, 1, 1.5, 2, 2.5,
    3, 3.5, 4, 4.5, 5
  ];

  return (
    <div className="rating rating-half">
      <div name="rating-11" className="rating-hidden" aria-label="0 star" />
      {starValues.map((value, index) => {
        const isHalf = value % 1 !== 0;
        const halfClass = isHalf ? "mask-half-1" : "mask-half-2";
        return (
          <div
            key={value}
            type="radio"
            name="rating-11"
            className={`mask mask-star-2 ${halfClass} bg-orange-400`}
            aria-label={`${value} star`}
            aria-current={value === roundedRating}
            readOnly
          />
        );
      })}
    </div>
  );
}
export default RatingStars;