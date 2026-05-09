type SectionHeadingProps = {
  prefix: string;
  highlight: string;
};

export function SectionHeading({ prefix, highlight }: SectionHeadingProps) {
  return (
    <h2 className="heading">
      {prefix} <span>{highlight}</span>
    </h2>
  );
}
