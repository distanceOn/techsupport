export const Title = ({
  level,
  text,
}: {
  level: 1 | 2 | 3 | 4;
  text: string | number;
}) => {
  if (level === 4) {
    return <h4>{text}</h4>;
  }
  if (level === 3) {
    return <h3>{text}</h3>;
  }
  if (level === 2) {
    return <h2>{text}</h2>;
  }
  if (level === 1) {
    return <h1>{text}</h1>;
  }

  return null;
};
