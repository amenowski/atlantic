import { useEffect, useState } from 'react';
import Accordion from '../../ui/Accordion';
import { useSearchParams } from 'react-router-dom';

function Categories() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [categories, setCategories] = useState({
    storage: false,
    desk: false,
    clocks: false,
    tools: false,
    furniture: false,
    tableware: false,
  });

  useEffect(() => {
    const categoriesParam = searchParams.get('categories');

    if (categoriesParam) {
      const categoriesArray = categoriesParam.split('-');
      const updatedCategories = { ...categories };

      categoriesArray.forEach((category) => {
        if (updatedCategories.hasOwnProperty(category)) {
          updatedCategories[category] = true;
        }
      });

      setCategories(updatedCategories);
    }
  }, [searchParams, categories]);

  function handleChange(category) {
    setCategories((prevCategories) => {
      const updatedCategories = {
        ...prevCategories,
        [category]: !prevCategories[category],
      };

      searchParams.set(
        'categories',
        Object.keys(updatedCategories)
          .filter((cat) => updatedCategories[cat])
          .join('-'),
      );

      setSearchParams(searchParams);

      return updatedCategories;
    });
  }

  console.log(categories);

  return (
    <div className="">
      <Accordion title="Categories">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              onChange={() => handleChange('storage')}
              checked={categories.storage}
            />
            <span>Storage</span>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              onChange={() => handleChange('desk')}
              checked={categories.desk}
            />
            <span>Desk</span>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              onChange={() => handleChange('clocks')}
              checked={categories.clocks}
            />
            <span>Clocks</span>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              onChange={() => handleChange('tools')}
              checked={categories.tools}
            />
            <span>Tools</span>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              onChange={() => handleChange('furniture')}
              checked={categories.furniture}
            />
            <span>Furniture</span>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              onChange={() => handleChange('tableware')}
              checked={categories.tableware}
            />
            <span>Tableware</span>
          </div>
        </div>
      </Accordion>
    </div>
  );
}

export default Categories;
