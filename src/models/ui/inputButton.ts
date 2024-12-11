interface InpuButtonprops {
  item: ItemTypes;
  handleOnClick: any;
}
interface ItemTypes {
  value: number;
  id: string;
  title: string;
}
export type {InpuButtonprops, ItemTypes};
