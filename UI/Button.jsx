export default function Button({
  children,
  type = "button",
  onClick,
  className = "",
  variant = "rect",
}) {
  const commonStyles = `
    flex
    gap-2
    items-center
    justify-center
    font-semibold 
    text-xl 
    text-[--pink]
    bg-[--bgheader] 
    shadow-lg 
    shadow-black/10 
    dark:shadow-white/10 
    focus:outline-none 
    transition 
    transform 
    hover:-translate-y-0.5 
    hover:shadow-lg 
    hover:bg-[--pink]
`;

  const baseStyles = {
    rect: `
    px-6 py-3 
    rounded-md
  `,
    square: `
    p-3
    rounded-md
  `,
    round: `
    w-12 h-12 
    flex items-center justify-center 
    rounded-full
    focus:ring-2 
    focus:ring-offset-2 
    focus:ring-[--pink] 
  `,
  };

  const hoverStyles = `
    hover:bg-gradient-to-r 
    hover:from-purple-500 
    hover:to-[--pink] 
    hover:text-white
  `;

  const combinedStyles = `${baseStyles[variant]} ${commonStyles} ${hoverStyles} ${className}`;

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
