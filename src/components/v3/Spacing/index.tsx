interface Props {
  size: number;
}

export function Spacing({ size }: Props) {
  return <div style={{ height: size }} />;
}
