export type useFilterTypes = {
  filteredProducts: Product[];
  handleSearch: (value: string) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
