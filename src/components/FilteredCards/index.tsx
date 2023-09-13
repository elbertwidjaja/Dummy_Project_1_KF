import { FilteredCardsTypes } from "./types";
import styles from "./styles.module.scss";

const FilteredCards: React.FC<FilteredCardsTypes> = ({ data }) => {
  return (
    <div className={styles.filtered_data}>
      {data.id}
      {data.title}
      {data.price}
    </div>
  );
};

export default FilteredCards;
