import categories from "./category"


interface Props {
    onSelectCategory: (category: string) => void
}

const Filter = ({onSelectCategory}:Props) => {
  return (
   <select  className="form-select my-3" onChange={event => onSelectCategory(event.target.value)}>
    <option value=""> All categories</option>
    {categories.map(category => <option key={category}>{category}</option>)}
   </select>
  )
}

export default Filter