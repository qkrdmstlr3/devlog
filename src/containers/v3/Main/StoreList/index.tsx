import { format } from 'date-fns';
import { BOOKSTORES } from '../../../../constants';
import { useCity } from '../../../../contexts/CityContext';
import * as Style from './style.css';

export function StoreList() {
  const { city } = useCity();

  if (!city) {
    return <></>;
  }

  const bookStores = BOOKSTORES[city];

  return (
    <ul className={Style.List}>
      {bookStores.map(({ number, name, region, book, date }) => (
        <li className={Style.Item} key={`${region}-${name}`}>
          <div className={Style.ItemTop}>
            <span>{number}</span>{' '}
            <span>
              {format(date, 'yyyy-MM')} <span>[{region}]</span>
            </span>
          </div>
          <div className={Style.ItemBottom}>
            <span className={Style.Name}>{name}</span>
            <span className={Style.Book}>{book}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
