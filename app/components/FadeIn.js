"use client";

const FadeIn = ({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  className = "",
}) => {
  const normalizedDelay = Math.max(0, Math.round(Number(delay || 0) * 1000));

  return (
    <div
      className={className}
      data-aos={animation}
      data-aos-delay={normalizedDelay}
      data-aos-duration={duration}
    >
      {children}
    </div>
  );
};

export default FadeIn;
