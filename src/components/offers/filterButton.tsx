import { Button } from "../ui/button";

const FilterButton = ({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) => (
  <Button variant={active ? "default" : "outline"} size="sm" onClick={onClick}>
    {label}
  </Button>
);

export default FilterButton;
