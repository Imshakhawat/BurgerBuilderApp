const Container = () => {


  const [dustbins, setDustbins] = useState([
    { accepts: [ItemTypes.GLASS], lastDroppedItem: null },
    { accepts: [ItemTypes.FOOD], lastDroppedItem: null },
    {
      accepts: [ItemTypes.PAPER, ItemTypes.GLASS, NativeTypes.URL],
      lastDroppedItem: null,
    },
    { accepts: [ItemTypes.PAPER, NativeTypes.FILE], lastDroppedItem: null },
  ]);
  
  const [boxes, setBoxes] = useState([
    { id: 1, name: "Bottle", type: ItemTypes.GLASS },
    { id: 2, name: "Banana", type: ItemTypes.FOOD },
    { id: 3, name: "Magazine", type: ItemTypes.PAPER },
  ]);



  const [droppedBoxNames, setDroppedBoxNames] = useState([]);
  function isDropped(boxName) {
    return droppedBoxNames.indexOf(boxName) > -1;
  }



  const handleDrop = useCallback(
    (index, item, id) => {
      const { name } = item;
      setDroppedBoxNames((prev) => [...prev, name]);
      // setDroppedBoxNames(
      //   update(droppedBoxNames, name ? { $push: [name] } : { $push: [] })
      // );
      setBoxes((prev) => prev.filter((x) => x.id !== id));
      // setBoxes(update(boxes, { $splice: [[item.id, 1]] }));
      setDustbins(
        update(dustbins, {
          [index]: {
            lastDroppedItem: {
              $set: item,
            },
          },
        })
      );
    },
    [droppedBoxNames, boxes, dustbins]
  );



  
  return (
    <div>
      <div style={{ overflow: "hidden", clear: "both" }}>
        {dustbins.map(({ accepts, lastDroppedItem }, index) => (
          <Dustbin
            accept={accepts}
            lastDroppedItem={lastDroppedItem}
            onDrop={(item) => handleDrop(index, item)}
            key={index}
          />
        ))}
      </div>

      <div style={{ overflow: "hidden", clear: "both" }}>
        {boxes.map(({ name, type, id }, index) => (
          <Box
            key={id}
            id={id}
            name={name}
            type={type}
            isDropped={isDropped(name)}
          />
        ))}
      </div>
    </div>
  );
};
export default Container;
