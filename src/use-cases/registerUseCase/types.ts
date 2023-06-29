export type GoodResponse = {
  data: { status: number; data: { id: string }; message: string };
};
export type BadResponse = { data: { status: number; message: string } };
