import SearchListItem from "./SearchListItem";
//render các kết quả của việc tìm kiếm nằm ở bên phải của Page
function SearchList(props) {
  return (
    <div>
      {props.data.map((item) => (
        <SearchListItem
          name={item.name}
          distance={item.distance}
          tag={item.tag}
          type={item.type}
          description={item.description}
          free_cancel={item.free_cancel}
          price={item.price}
          rate={item.rate}
          rate_text={item.rate_text}
          image_url={item.image_url}
        />
      ))}
    </div>
  );
}
export default SearchList;
